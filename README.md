# GPU Compute Tracker

Cross-cloud availability, pricing & intelligent matching for large-scale GPU machines — across hyperscalers, neoclouds and regional data centers.

Type an instance name (`p5.48xlarge`, `ND H100 v5`, `BM.GPU.H100.8`) or a raw spec (`8x H200`, `A100 80GB`, `B200`, `MI300X`). The tracker extracts the underlying GPU, shows every matching machine across providers and regions with on-demand / spot / committed pricing normalized to `$/GPU/hr`, and recommends the closest-matching alternatives — ranked by performance similarity, availability and price — when your first choice is scarce.

Covers **18 providers / 77 machine SKUs / 15 GPU models**: AWS · GCP · Azure · Oracle OCI · CoreWeave · Lambda · Crusoe · Nebius · RunPod · Vast.ai · Together · Fluidstack · Scaleway · OVHcloud · Alibaba · Tencent · E2E · Yotta.

Styled with the [VideoDB atomic design system](https://github.com/videodb-social/atomic-design-system).

## Architecture

Single-file static site, **no build step, no backend**:

```
index.html   – the app (HTML + CSS + JS, inlined). Loads data.js.
data.js      – window.GPU_DATA = {...}. Loaded via <script>, so it works
               over file:// AND when hosted. Auto-generated — do not hand-edit.
data.json    – the same dataset as raw JSON, for API/data consumers.
scripts/
  update-data.mjs  – regenerates data.json + data.js (timestamp + live fetchers).
.github/workflows/
  update-data.yml  – daily cron that runs the script and commits any change.
vercel.json  – clean URLs + no-cache headers on the data files.
```

`index.html` reads `window.GPU_DATA`, so refreshing the data is just regenerating `data.js` — the page never changes.

## How the daily update works (no backend)

The site is fully static, yet refreshes every day. The trick is to do the refresh at **build time, not request time**:

1. **GitHub Actions** runs `scripts/update-data.mjs` on a daily cron (`0 6 * * *`).
2. The script refreshes pricing, re-stamps `meta.updated`, validates the dataset, and rewrites `data.json` + `data.js`.
3. If anything changed, it commits back to `main`.
4. Vercel's Git integration deploys that commit. The live site is updated — with no server running, ever.

You can also trigger it manually from the repo's **Actions → Daily data refresh → Run workflow**.

### "Can Vercel itself update daily without a backend?"

Short answer: **yes, and this repo uses the cleanest version of it.** Your options, ranked:

| Approach | Backend? | Notes |
|---|---|---|
| **GitHub Actions cron → commit → Vercel Git deploy** (this repo) | None | Recommended. Data refresh runs in CI; Vercel just serves static files. Free, robust, full git history of every price change. |
| Vercel Cron Jobs → Serverless/Edge Function | A function | Vercel *can* run scheduled functions, but that *is* a (serverless) backend, and Hobby-plan cron is limited to once/day. Use if you want the refresh to live inside Vercel. |
| Next.js ISR (`revalidate`) | Framework runtime | Requires migrating to Next.js. Overkill for a single static page. |
| Client-side fetch on page load | None | The browser could fetch a live JSON each visit — but then every visitor pays the latency and you need a CORS-enabled live feed. Build-time refresh is better. |

The GitHub Actions path keeps the front end a dumb static bundle (fast, cacheable, cheap) while still giving you a fresh dataset daily and a clean audit trail.

## Data sources & honesty

The shipped dataset is **curated from public provider pricing pages and aggregators** (AWS/GCP/Azure/OCI docs, provider pricing pages, getdeploying, Vantage, Spheron, etc.). Prices are indicative public list & street rates and fluctuate constantly; entries marked `est` are estimates. **Verify with the provider before committing spend.**

`update-data.mjs` ships with a pluggable `SOURCES` array. To make the daily refresh pull *live* numbers, add a fetcher that returns `{ instanceName: { od, spot, res1 } }` and enable it — the merge step applies it and clears the `est` flag for any value it overwrites. Fetchers are best-effort: if a source is down or changes shape, the curated value is kept and the daily deploy still succeeds.

## Local development

```bash
npm run dev      # serves the folder at http://localhost:3000 (npx serve)
npm run update   # regenerate data.json + data.js locally
```

Opening `index.html` directly via `file://` also works, because `data.js` is loaded as a `<script>` (no fetch/CORS needed).

## Deploy

1. Push this repo to GitHub (e.g. the `videodb-social` org).
2. In Vercel: **Add New → Project → Import** the repo. Framework preset: **Other**. Root: repo root. No build command, output = repo root.
3. Deploy. Every future push (including the daily bot commit) redeploys automatically.

For the daily commit to redeploy, make sure the repo's default branch is connected to the Vercel project's production branch.
