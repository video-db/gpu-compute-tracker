#!/usr/bin/env node
/**
 * update-data.mjs — regenerates data.json + data.js for the GPU Compute Tracker.
 *
 * Runs daily in GitHub Actions (.github/workflows/update-data.yml). It:
 *   1. Loads the canonical data.json (curated baseline).
 *   2. Runs any enabled live "fetchers" to refresh pricing from public sources.
 *      Each fetcher is best-effort and degrades gracefully — if a source is
 *      unreachable or its shape changed, the curated value is kept and the run
 *      still succeeds (so the daily deploy never breaks).
 *   3. Re-stamps meta.updated / meta.updatedAt.
 *   4. Writes data.json (raw, for API consumers) and data.js (window.GPU_DATA,
 *      loaded by index.html — works over file:// and on Vercel with no backend).
 *
 * No external dependencies — uses Node 20+ global fetch.
 *
 * To wire a real live source: add a fetcher to SOURCES below that returns a map
 * of { instanceName: { od, spot, res1 } } and the merge step applies it.
 */
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DATA_JSON = join(ROOT, "data.json");
const DATA_JS = join(ROOT, "data.js");

const log = (...a) => console.log("[update-data]", ...a);

/* ------------------------------------------------------------------ */
/* Live source fetchers.                                               */
/* Return: { [instanceName]: { od?, spot?, res1? } }  (any subset)     */
/* Add real endpoints here. Disabled by default so CI is deterministic */
/* and never blocks the daily deploy on a flaky third party.           */
/* ------------------------------------------------------------------ */
const SOURCES = [
  // Example skeleton — enable + point at a real JSON feed you trust.
  // {
  //   name: "my-pricing-feed",
  //   enabled: true,
  //   async fetch() {
  //     const res = await fetch("https://example.com/gpu-prices.json", { signal: AbortSignal.timeout(20000) });
  //     if (!res.ok) throw new Error("HTTP " + res.status);
  //     const rows = await res.json();
  //     const out = {};
  //     for (const r of rows) out[r.instance] = { od: r.onDemand, spot: r.spot };
  //     return out;
  //   },
  // },
];

async function gatherLivePrices() {
  const merged = {};
  for (const src of SOURCES) {
    if (!src.enabled) { log(`source "${src.name}" disabled — skipping`); continue; }
    try {
      const data = await src.fetch();
      let n = 0;
      for (const [k, v] of Object.entries(data)) {
        merged[k] = { ...(merged[k] || {}), ...v }; n++;
      }
      log(`source "${src.name}" ok — ${n} rows`);
    } catch (e) {
      log(`source "${src.name}" FAILED (${e.message}) — keeping curated values`);
    }
  }
  return merged;
}

function applyLivePrices(db, live) {
  let changed = 0;
  for (const inst of db.instances) {
    const upd = live[inst.name];
    if (!upd) continue;
    for (const field of ["od", "spot", "res1"]) {
      if (upd[field] != null && Number.isFinite(upd[field]) && upd[field] !== inst[field]) {
        inst[field] = upd[field];
        delete inst.est; // a real fetched price is no longer an estimate
        changed++;
      }
    }
  }
  return changed;
}

/* ------------------------------------------------------------------ */
/* Integrity checks — catch a malformed dataset before it ships.      */
/* ------------------------------------------------------------------ */
function validate(db) {
  const errs = [];
  if (!db.gpus || !db.providers || !Array.isArray(db.instances)) errs.push("missing top-level keys");
  for (const i of db.instances || []) {
    if (!db.gpus[i.gpu]) errs.push(`instance "${i.name}" references unknown gpu "${i.gpu}"`);
    if (!db.providers[i.provider]) errs.push(`instance "${i.name}" references unknown provider "${i.provider}"`);
    if (i.od != null && !(i.od > 0)) errs.push(`instance "${i.name}" has non-positive od`);
    if (!Array.isArray(i.r) || !i.r.length) errs.push(`instance "${i.name}" has no regions`);
  }
  if (errs.length) { errs.forEach(e => console.error("  ✗", e)); throw new Error(`${errs.length} validation error(s)`); }
}

async function main() {
  const db = JSON.parse(await readFile(DATA_JSON, "utf8"));
  db.meta = db.meta || {};

  const live = await gatherLivePrices();
  const changed = applyLivePrices(db, live);
  log(`applied ${changed} live price update(s)`);

  const now = new Date();
  db.meta.updated = now.toISOString().slice(0, 10);
  db.meta.updatedAt = now.toISOString();

  validate(db);

  const json = JSON.stringify(db, null, 2);
  await writeFile(DATA_JSON, json + "\n");
  await writeFile(DATA_JS,
    "/* AUTO-GENERATED from data.json by scripts/update-data.mjs — do not edit by hand */\n" +
    "window.GPU_DATA = " + json + ";\n");

  log(`wrote data.json + data.js — ${db.instances.length} instances, refreshed ${db.meta.updated}`);
}

main().catch(e => { console.error("[update-data] FATAL:", e); process.exit(1); });
