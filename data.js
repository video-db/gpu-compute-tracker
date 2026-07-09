/* AUTO-GENERATED from data.json by scripts/update-data.mjs — do not edit by hand */
window.GPU_DATA = {
  "meta": {
    "name": "GPU Compute Tracker",
    "version": "1.0.0",
    "updated": "2026-07-09",
    "updatedAt": "2026-07-09T07:07:15.825Z",
    "note": "Indicative public list & street pricing, normalized $/GPU/hr. Auto-refreshed daily via GitHub Actions. Verify with provider before committing.",
    "source": "curated from public provider pricing pages + aggregators"
  },
  "gpus": {
    "gb200": {
      "name": "NVIDIA GB200 (Grace Blackwell)",
      "arch": "Blackwell",
      "year": 2025,
      "vram": 192,
      "mem": "HBM3e",
      "bw": 8000,
      "perf": 2250,
      "tier": "flagship",
      "nvlink": "NVLink 5 (1.8 TB/s)",
      "note": "Grace CPU + 2 Blackwell GPUs per superchip; NVL72 rack-scale"
    },
    "b200": {
      "name": "NVIDIA B200",
      "arch": "Blackwell",
      "year": 2025,
      "vram": 180,
      "mem": "HBM3e",
      "bw": 8000,
      "perf": 2250,
      "tier": "flagship",
      "nvlink": "NVLink 5 (1.8 TB/s)",
      "note": "Flagship training/inference GPU"
    },
    "h200": {
      "name": "NVIDIA H200",
      "arch": "Hopper",
      "year": 2024,
      "vram": 141,
      "mem": "HBM3e",
      "bw": 4800,
      "perf": 990,
      "tier": "training",
      "nvlink": "NVLink 4 (900 GB/s)",
      "note": "H100 compute + 1.7x memory & bandwidth"
    },
    "h100": {
      "name": "NVIDIA H100 SXM",
      "arch": "Hopper",
      "year": 2023,
      "vram": 80,
      "mem": "HBM3",
      "bw": 3350,
      "perf": 990,
      "tier": "training",
      "nvlink": "NVLink 4 (900 GB/s)",
      "note": "Workhorse training GPU"
    },
    "h100pcie": {
      "name": "NVIDIA H100 PCIe / NVL",
      "arch": "Hopper",
      "year": 2023,
      "vram": 94,
      "mem": "HBM3",
      "bw": 3900,
      "perf": 835,
      "tier": "training",
      "nvlink": "NVLink bridge (600 GB/s)",
      "note": "PCIe / NVL form factor, lower power"
    },
    "gh200": {
      "name": "NVIDIA GH200 (Grace Hopper)",
      "arch": "Hopper",
      "year": 2024,
      "vram": 96,
      "mem": "HBM3",
      "bw": 4000,
      "perf": 990,
      "tier": "training",
      "nvlink": "NVLink-C2C (900 GB/s)",
      "note": "Grace CPU + H100; 96GB or 144GB variants"
    },
    "a100_80": {
      "name": "NVIDIA A100 80GB SXM",
      "arch": "Ampere",
      "year": 2020,
      "vram": 80,
      "mem": "HBM2e",
      "bw": 2039,
      "perf": 312,
      "tier": "training-prev",
      "nvlink": "NVLink 3 (600 GB/s)",
      "note": "Previous-gen training standard"
    },
    "a100_40": {
      "name": "NVIDIA A100 40GB SXM",
      "arch": "Ampere",
      "year": 2020,
      "vram": 40,
      "mem": "HBM2e",
      "bw": 1555,
      "perf": 312,
      "tier": "training-prev",
      "nvlink": "NVLink 3 (600 GB/s)",
      "note": "Previous-gen training"
    },
    "mi300x": {
      "name": "AMD Instinct MI300X",
      "arch": "CDNA 3",
      "year": 2024,
      "vram": 192,
      "mem": "HBM3",
      "bw": 5300,
      "perf": 1307,
      "tier": "training",
      "nvlink": "Infinity Fabric (896 GB/s)",
      "note": "Largest VRAM/GPU; strong for large-model inference"
    },
    "l40s": {
      "name": "NVIDIA L40S",
      "arch": "Ada Lovelace",
      "year": 2023,
      "vram": 48,
      "mem": "GDDR6",
      "bw": 864,
      "perf": 362,
      "tier": "inference-high",
      "nvlink": "PCIe (no NVLink)",
      "note": "Inference + graphics + light training"
    },
    "l4": {
      "name": "NVIDIA L4",
      "arch": "Ada Lovelace",
      "year": 2023,
      "vram": 24,
      "mem": "GDDR6",
      "bw": 300,
      "perf": 121,
      "tier": "inference-mid",
      "nvlink": "PCIe (no NVLink)",
      "note": "Efficient inference / video / small models"
    },
    "a10": {
      "name": "NVIDIA A10 / A10G",
      "arch": "Ampere",
      "year": 2021,
      "vram": 24,
      "mem": "GDDR6",
      "bw": 600,
      "perf": 125,
      "tier": "inference-mid",
      "nvlink": "PCIe (no NVLink)",
      "note": "Graphics + mid inference"
    },
    "v100": {
      "name": "NVIDIA V100",
      "arch": "Volta",
      "year": 2017,
      "vram": 32,
      "mem": "HBM2",
      "bw": 900,
      "perf": 125,
      "tier": "training-prev",
      "nvlink": "NVLink 2 (300 GB/s)",
      "note": "Legacy training"
    },
    "t4": {
      "name": "NVIDIA T4",
      "arch": "Turing",
      "year": 2018,
      "vram": 16,
      "mem": "GDDR6",
      "bw": 320,
      "perf": 65,
      "tier": "inference-entry",
      "nvlink": "PCIe (no NVLink)",
      "note": "Entry inference / cost-optimized"
    },
    "rtx4090": {
      "name": "NVIDIA RTX 4090",
      "arch": "Ada Lovelace",
      "year": 2022,
      "vram": 24,
      "mem": "GDDR6X",
      "bw": 1008,
      "perf": 330,
      "tier": "inference-high",
      "nvlink": "PCIe (no NVLink)",
      "note": "Prosumer; cheap dev/inference on marketplaces"
    }
  },
  "providers": {
    "aws": {
      "n": "AWS",
      "t": "hyperscaler",
      "c": "#ff9900"
    },
    "gcp": {
      "n": "Google Cloud",
      "t": "hyperscaler",
      "c": "#4285f4"
    },
    "azure": {
      "n": "Azure",
      "t": "hyperscaler",
      "c": "#0a84ff"
    },
    "oci": {
      "n": "Oracle OCI",
      "t": "hyperscaler",
      "c": "#f80000"
    },
    "coreweave": {
      "n": "CoreWeave",
      "t": "neocloud",
      "c": "#00d4aa"
    },
    "lambda": {
      "n": "Lambda",
      "t": "neocloud",
      "c": "#7c5cff"
    },
    "crusoe": {
      "n": "Crusoe",
      "t": "neocloud",
      "c": "#ff6b35"
    },
    "nebius": {
      "n": "Nebius",
      "t": "neocloud",
      "c": "#1ed760"
    },
    "runpod": {
      "n": "RunPod",
      "t": "neocloud",
      "c": "#673de6"
    },
    "vast": {
      "n": "Vast.ai",
      "t": "neocloud",
      "c": "#ffb400"
    },
    "together": {
      "n": "Together AI",
      "t": "neocloud",
      "c": "#0ea5e9"
    },
    "fluidstack": {
      "n": "Fluidstack",
      "t": "neocloud",
      "c": "#22c55e"
    },
    "scaleway": {
      "n": "Scaleway",
      "t": "regional",
      "c": "#4f0599"
    },
    "ovh": {
      "n": "OVHcloud",
      "t": "regional",
      "c": "#123f6d"
    },
    "alibaba": {
      "n": "Alibaba Cloud",
      "t": "regional",
      "c": "#ff6a00"
    },
    "tencent": {
      "n": "Tencent Cloud",
      "t": "regional",
      "c": "#0052d9"
    },
    "e2e": {
      "n": "E2E Networks",
      "t": "regional",
      "c": "#00a3e0"
    },
    "yotta": {
      "n": "Yotta (India)",
      "t": "regional",
      "c": "#e4002b"
    }
  },
  "instances": [
    {
      "provider": "aws",
      "name": "p6e-gb200 UltraServer (per GPU)",
      "gpu": "gb200",
      "n": 1,
      "vcpu": 28,
      "ram": 960,
      "od": 12,
      "spot": null,
      "res1": 7.8,
      "r": [
        [
          "us-east-1",
          "limited"
        ],
        [
          "us-west-2",
          "waitlist"
        ]
      ],
      "est": true,
      "note": "GB200 NVL72 rack; sold as UltraServers / Capacity Blocks"
    },
    {
      "provider": "aws",
      "name": "p6-b200.48xlarge",
      "gpu": "b200",
      "n": 8,
      "vcpu": 192,
      "ram": 2048,
      "od": 98.32,
      "spot": null,
      "res1": 62,
      "r": [
        [
          "us-east-1",
          "limited"
        ],
        [
          "us-west-2",
          "limited"
        ]
      ],
      "est": true,
      "note": "8x B200, Emerald Rapids; EFAv3 3.2 Tbps"
    },
    {
      "provider": "aws",
      "name": "p5en.48xlarge",
      "gpu": "h200",
      "n": 8,
      "vcpu": 192,
      "ram": 2048,
      "od": 63.3,
      "spot": 32.8,
      "res1": 38.5,
      "r": [
        [
          "us-east-2",
          "ga"
        ],
        [
          "us-west-2",
          "ga"
        ],
        [
          "ap-southeast",
          "limited"
        ]
      ],
      "note": "8x H200; Sapphire Rapids, Gen5 PCIe, EFAv3"
    },
    {
      "provider": "aws",
      "name": "p5e.48xlarge",
      "gpu": "h200",
      "n": 8,
      "vcpu": 192,
      "ram": 2048,
      "od": 60.48,
      "spot": 30.2,
      "res1": 37,
      "r": [
        [
          "us-east-1",
          "limited"
        ],
        [
          "us-west-2",
          "limited"
        ]
      ],
      "est": true,
      "note": "8x H200"
    },
    {
      "provider": "aws",
      "name": "p5.48xlarge",
      "gpu": "h100",
      "n": 8,
      "vcpu": 192,
      "ram": 2048,
      "od": 55.04,
      "spot": 22,
      "res1": 32.8,
      "r": [
        [
          "us-east-1",
          "blocks"
        ],
        [
          "us-east-2",
          "ga"
        ],
        [
          "us-west-2",
          "ga"
        ],
        [
          "eu-north-1",
          "limited"
        ]
      ],
      "note": "8x H100; 3.2 Tbps EFA. Single-GPU p5.4xlarge also GA"
    },
    {
      "provider": "aws",
      "name": "p4de.24xlarge",
      "gpu": "a100_80",
      "n": 8,
      "vcpu": 96,
      "ram": 1152,
      "od": 40.96,
      "spot": 12.3,
      "res1": 24,
      "r": [
        [
          "us-east-1",
          "ga"
        ],
        [
          "us-west-2",
          "ga"
        ]
      ],
      "est": true,
      "note": "8x A100 80GB"
    },
    {
      "provider": "aws",
      "name": "p4d.24xlarge",
      "gpu": "a100_40",
      "n": 8,
      "vcpu": 96,
      "ram": 1152,
      "od": 32.77,
      "spot": 9.8,
      "res1": 19.2,
      "r": [
        [
          "us-east-1",
          "ga"
        ],
        [
          "us-west-2",
          "ga"
        ],
        [
          "eu-west-1",
          "ga"
        ],
        [
          "ap-northeast-1",
          "ga"
        ]
      ],
      "note": "8x A100 40GB; 400 Gbps EFA"
    },
    {
      "provider": "aws",
      "name": "g6e.48xlarge",
      "gpu": "l40s",
      "n": 8,
      "vcpu": 192,
      "ram": 1536,
      "od": 30.13,
      "spot": 12.1,
      "res1": 18,
      "r": [
        [
          "us-east-1",
          "ga"
        ],
        [
          "us-west-2",
          "ga"
        ],
        [
          "eu-west-1",
          "ga"
        ]
      ],
      "note": "8x L40S, AMD EPYC"
    },
    {
      "provider": "aws",
      "name": "g5.48xlarge",
      "gpu": "a10",
      "n": 8,
      "vcpu": 192,
      "ram": 768,
      "od": 16.29,
      "spot": 5.8,
      "res1": 9.8,
      "r": [
        [
          "us-east-1",
          "ga"
        ],
        [
          "us-west-2",
          "ga"
        ],
        [
          "eu-west-1",
          "ga"
        ],
        [
          "ap-south-1",
          "ga"
        ]
      ],
      "note": "8x A10G"
    },
    {
      "provider": "aws",
      "name": "g6.48xlarge",
      "gpu": "l4",
      "n": 8,
      "vcpu": 192,
      "ram": 768,
      "od": 13.35,
      "spot": 4.8,
      "res1": 8,
      "r": [
        [
          "us-east-1",
          "ga"
        ],
        [
          "us-west-2",
          "ga"
        ],
        [
          "eu-central-1",
          "ga"
        ]
      ],
      "note": "8x L4"
    },
    {
      "provider": "aws",
      "name": "p3.16xlarge",
      "gpu": "v100",
      "n": 8,
      "vcpu": 64,
      "ram": 488,
      "od": 24.48,
      "spot": 7.3,
      "res1": 14.7,
      "r": [
        [
          "us-east-1",
          "ga"
        ],
        [
          "us-west-2",
          "ga"
        ],
        [
          "eu-west-1",
          "ga"
        ]
      ],
      "note": "8x V100 (legacy)"
    },
    {
      "provider": "aws",
      "name": "g4dn.metal",
      "gpu": "t4",
      "n": 8,
      "vcpu": 96,
      "ram": 384,
      "od": 7.82,
      "spot": 2.4,
      "res1": 4.7,
      "r": [
        [
          "us-east-1",
          "ga"
        ],
        [
          "us-west-2",
          "ga"
        ],
        [
          "eu-west-1",
          "ga"
        ]
      ],
      "note": "8x T4"
    },
    {
      "provider": "gcp",
      "name": "a4-highgpu-8g",
      "gpu": "b200",
      "n": 8,
      "vcpu": 224,
      "ram": 3968,
      "od": 110,
      "spot": null,
      "res1": 71,
      "r": [
        [
          "us-central1",
          "limited"
        ],
        [
          "europe-west4",
          "waitlist"
        ]
      ],
      "est": true,
      "note": "8x B200"
    },
    {
      "provider": "gcp",
      "name": "a3-ultragpu-8g",
      "gpu": "h200",
      "n": 8,
      "vcpu": 224,
      "ram": 2952,
      "od": 92,
      "spot": null,
      "res1": 56,
      "r": [
        [
          "us-central1",
          "limited"
        ],
        [
          "us-east5",
          "limited"
        ],
        [
          "europe-west1",
          "waitlist"
        ]
      ],
      "est": true,
      "note": "8x H200"
    },
    {
      "provider": "gcp",
      "name": "a3-megagpu-8g",
      "gpu": "h100",
      "n": 8,
      "vcpu": 208,
      "ram": 1872,
      "od": 88.49,
      "spot": 26.5,
      "res1": 52,
      "r": [
        [
          "us-central1",
          "limited"
        ],
        [
          "us-east5",
          "ga"
        ],
        [
          "europe-west4",
          "limited"
        ],
        [
          "asia-northeast1",
          "limited"
        ]
      ],
      "note": "8x H100; contact account team for capacity"
    },
    {
      "provider": "gcp",
      "name": "a2-ultragpu-8g",
      "gpu": "a100_80",
      "n": 8,
      "vcpu": 96,
      "ram": 1360,
      "od": 40.55,
      "spot": 12.2,
      "res1": 24.3,
      "r": [
        [
          "us-central1",
          "ga"
        ],
        [
          "europe-west4",
          "ga"
        ],
        [
          "asia-southeast1",
          "ga"
        ]
      ],
      "note": "8x A100 80GB"
    },
    {
      "provider": "gcp",
      "name": "a2-highgpu-8g",
      "gpu": "a100_40",
      "n": 8,
      "vcpu": 96,
      "ram": 680,
      "od": 29.39,
      "spot": 8.8,
      "res1": 17.6,
      "r": [
        [
          "us-central1",
          "ga"
        ],
        [
          "us-east1",
          "ga"
        ],
        [
          "europe-west4",
          "ga"
        ],
        [
          "asia-east1",
          "ga"
        ]
      ],
      "note": "8x A100 40GB"
    },
    {
      "provider": "gcp",
      "name": "g2-standard-96",
      "gpu": "l4",
      "n": 8,
      "vcpu": 96,
      "ram": 432,
      "od": 7.72,
      "spot": 2.3,
      "res1": 4.6,
      "r": [
        [
          "us-central1",
          "ga"
        ],
        [
          "us-east4",
          "ga"
        ],
        [
          "europe-west4",
          "ga"
        ],
        [
          "asia-south1",
          "ga"
        ]
      ],
      "note": "8x L4"
    },
    {
      "provider": "azure",
      "name": "ND GB200 v6",
      "gpu": "gb200",
      "n": 4,
      "vcpu": 112,
      "ram": 1900,
      "od": 48,
      "spot": null,
      "res1": 31,
      "r": [
        [
          "eastus2",
          "waitlist"
        ],
        [
          "southcentralus",
          "waitlist"
        ]
      ],
      "est": true,
      "note": "GB200 NVL; preview/limited"
    },
    {
      "provider": "azure",
      "name": "ND H200 v5 (ND96isr)",
      "gpu": "h200",
      "n": 8,
      "vcpu": 96,
      "ram": 1900,
      "od": 100,
      "spot": 22,
      "res1": 60,
      "r": [
        [
          "eastus2",
          "limited"
        ],
        [
          "southcentralus",
          "limited"
        ],
        [
          "westeurope",
          "waitlist"
        ]
      ],
      "est": true,
      "note": "8x H200; 3.2 Tbps InfiniBand"
    },
    {
      "provider": "azure",
      "name": "ND H100 v5 (ND96isr)",
      "gpu": "h100",
      "n": 8,
      "vcpu": 96,
      "ram": 1900,
      "od": 98.32,
      "spot": 18.17,
      "res1": 55,
      "r": [
        [
          "eastus2",
          "ga"
        ],
        [
          "southcentralus",
          "limited"
        ],
        [
          "westeurope",
          "limited"
        ],
        [
          "uksouth",
          "limited"
        ]
      ],
      "note": "8x H100; NVLink 4, 3.2 Tbps IB. Spot ~$18/hr"
    },
    {
      "provider": "azure",
      "name": "NDm A100 v4",
      "gpu": "a100_80",
      "n": 8,
      "vcpu": 96,
      "ram": 1900,
      "od": 32.77,
      "spot": 9.8,
      "res1": 19.7,
      "r": [
        [
          "eastus",
          "ga"
        ],
        [
          "westeurope",
          "ga"
        ],
        [
          "southcentralus",
          "ga"
        ]
      ],
      "note": "8x A100 80GB; 1.6 Tbps IB"
    },
    {
      "provider": "azure",
      "name": "NC A100 v4 (x4)",
      "gpu": "a100_80",
      "n": 4,
      "vcpu": 96,
      "ram": 880,
      "od": 14.69,
      "spot": 4.4,
      "res1": 8.8,
      "r": [
        [
          "eastus",
          "ga"
        ],
        [
          "westeurope",
          "ga"
        ]
      ],
      "est": true,
      "note": "Up to 4x A100 80GB PCIe"
    },
    {
      "provider": "azure",
      "name": "NCads H100 v5",
      "gpu": "h100pcie",
      "n": 2,
      "vcpu": 80,
      "ram": 640,
      "od": 13.96,
      "spot": 4.2,
      "res1": 8.4,
      "r": [
        [
          "eastus2",
          "ga"
        ],
        [
          "westeurope",
          "ga"
        ],
        [
          "swedencentral",
          "ga"
        ]
      ],
      "note": "1-2x H100 NVL 94GB PCIe"
    },
    {
      "provider": "oci",
      "name": "BM.GPU.B200.8",
      "gpu": "b200",
      "n": 8,
      "vcpu": 128,
      "ram": 3072,
      "od": 64,
      "spot": null,
      "res1": 44,
      "r": [
        [
          "us-chicago-1",
          "limited"
        ],
        [
          "eu-frankfurt-1",
          "waitlist"
        ]
      ],
      "est": true,
      "note": "8x B200 bare metal"
    },
    {
      "provider": "oci",
      "name": "BM.GPU.H200.8",
      "gpu": "h200",
      "n": 8,
      "vcpu": 112,
      "ram": 3072,
      "od": 80,
      "spot": null,
      "res1": 52,
      "r": [
        [
          "us-chicago-1",
          "ga"
        ],
        [
          "us-ashburn-1",
          "limited"
        ],
        [
          "eu-frankfurt-1",
          "limited"
        ],
        [
          "ap-osaka-1",
          "limited"
        ]
      ],
      "note": "8x H200 @ ~$10/GPU/hr; 3.2 Tbps RDMA"
    },
    {
      "provider": "oci",
      "name": "BM.GPU.H100.8",
      "gpu": "h100",
      "n": 8,
      "vcpu": 112,
      "ram": 2048,
      "od": 80,
      "spot": null,
      "res1": 50,
      "r": [
        [
          "us-chicago-1",
          "ga"
        ],
        [
          "us-ashburn-1",
          "ga"
        ],
        [
          "eu-frankfurt-1",
          "ga"
        ],
        [
          "uk-london-1",
          "limited"
        ],
        [
          "ap-tokyo-1",
          "limited"
        ]
      ],
      "note": "8x H100 @ ~$10/GPU/hr; cluster networking"
    },
    {
      "provider": "oci",
      "name": "BM.GPU.MI300X.8",
      "gpu": "mi300x",
      "n": 8,
      "vcpu": 112,
      "ram": 2048,
      "od": 48,
      "spot": null,
      "res1": 32,
      "r": [
        [
          "us-chicago-1",
          "ga"
        ],
        [
          "eu-frankfurt-1",
          "limited"
        ]
      ],
      "note": "8x MI300X @ ~$6/GPU/hr; 192GB each"
    },
    {
      "provider": "oci",
      "name": "BM.GPU4.8 (A100)",
      "gpu": "a100_40",
      "n": 8,
      "vcpu": 64,
      "ram": 2048,
      "od": 24.4,
      "spot": null,
      "res1": 15.6,
      "r": [
        [
          "us-ashburn-1",
          "ga"
        ],
        [
          "eu-frankfurt-1",
          "ga"
        ],
        [
          "ap-mumbai-1",
          "ga"
        ]
      ],
      "est": true,
      "note": "8x A100 40GB"
    },
    {
      "provider": "oci",
      "name": "BM.GPU.L40S.4",
      "gpu": "l40s",
      "n": 4,
      "vcpu": 112,
      "ram": 1024,
      "od": 14,
      "spot": null,
      "res1": 9.2,
      "r": [
        [
          "us-ashburn-1",
          "ga"
        ],
        [
          "eu-frankfurt-1",
          "ga"
        ]
      ],
      "est": true,
      "note": "4x L40S"
    },
    {
      "provider": "coreweave",
      "name": "8x HGX B200",
      "gpu": "b200",
      "n": 8,
      "vcpu": 128,
      "ram": 2048,
      "od": 68.8,
      "spot": null,
      "res1": 44,
      "r": [
        [
          "US-EAST",
          "ga"
        ],
        [
          "US-WEST",
          "ga"
        ],
        [
          "EU",
          "limited"
        ]
      ],
      "note": "$8.60/GPU/hr; also single B200 NVL $10.50"
    },
    {
      "provider": "coreweave",
      "name": "8x HGX H200",
      "gpu": "h200",
      "n": 8,
      "vcpu": 112,
      "ram": 2048,
      "od": 50.5,
      "spot": null,
      "res1": 33,
      "r": [
        [
          "US-EAST",
          "ga"
        ],
        [
          "US-WEST",
          "ga"
        ],
        [
          "EU",
          "ga"
        ]
      ],
      "est": true,
      "note": "~$6.31/GPU/hr"
    },
    {
      "provider": "coreweave",
      "name": "8x HGX H100",
      "gpu": "h100",
      "n": 8,
      "vcpu": 112,
      "ram": 2048,
      "od": 49.24,
      "spot": null,
      "res1": 30,
      "r": [
        [
          "US-EAST",
          "ga"
        ],
        [
          "US-WEST",
          "ga"
        ],
        [
          "US-CENTRAL",
          "ga"
        ],
        [
          "EU",
          "ga"
        ]
      ],
      "note": "~$6.16/GPU/hr"
    },
    {
      "provider": "coreweave",
      "name": "8x A100 80GB SXM",
      "gpu": "a100_80",
      "n": 8,
      "vcpu": 96,
      "ram": 1024,
      "od": 17.68,
      "spot": null,
      "res1": 11,
      "r": [
        [
          "US-EAST",
          "ga"
        ],
        [
          "US-WEST",
          "ga"
        ]
      ],
      "est": true,
      "note": "~$2.21/GPU/hr"
    },
    {
      "provider": "coreweave",
      "name": "8x L40",
      "gpu": "l40s",
      "n": 8,
      "vcpu": 96,
      "ram": 512,
      "od": 10,
      "spot": null,
      "res1": 6.5,
      "r": [
        [
          "US-EAST",
          "ga"
        ],
        [
          "US-WEST",
          "ga"
        ]
      ],
      "note": "$1.25/GPU/hr (L40)"
    },
    {
      "provider": "lambda",
      "name": "8x B200 SXM",
      "gpu": "b200",
      "n": 8,
      "vcpu": 224,
      "ram": 2048,
      "od": 39.92,
      "spot": null,
      "res1": 29,
      "r": [
        [
          "us-west",
          "limited"
        ],
        [
          "us-east",
          "ga"
        ]
      ],
      "est": true,
      "note": "~$4.99/GPU/hr"
    },
    {
      "provider": "lambda",
      "name": "8x H200 SXM",
      "gpu": "h200",
      "n": 8,
      "vcpu": 208,
      "ram": 1800,
      "od": 27.92,
      "spot": null,
      "res1": 19,
      "r": [
        [
          "us-west",
          "ga"
        ],
        [
          "us-east",
          "ga"
        ]
      ],
      "est": true,
      "note": "~$3.49/GPU/hr"
    },
    {
      "provider": "lambda",
      "name": "8x H100 SXM",
      "gpu": "h100",
      "n": 8,
      "vcpu": 208,
      "ram": 1800,
      "od": 23.92,
      "spot": null,
      "res1": 18,
      "r": [
        [
          "us-west",
          "ga"
        ],
        [
          "us-east",
          "ga"
        ],
        [
          "us-south",
          "ga"
        ]
      ],
      "note": "$2.99/GPU/hr on-demand"
    },
    {
      "provider": "lambda",
      "name": "8x A100 80GB SXM",
      "gpu": "a100_80",
      "n": 8,
      "vcpu": 124,
      "ram": 1800,
      "od": 14.32,
      "spot": null,
      "res1": 9.5,
      "r": [
        [
          "us-west",
          "ga"
        ],
        [
          "us-east",
          "ga"
        ]
      ],
      "est": true,
      "note": "~$1.79/GPU/hr"
    },
    {
      "provider": "lambda",
      "name": "1x GH200",
      "gpu": "gh200",
      "n": 1,
      "vcpu": 64,
      "ram": 432,
      "od": 1.49,
      "spot": null,
      "res1": 1.1,
      "r": [
        [
          "us-east",
          "ga"
        ]
      ],
      "note": "Grace Hopper; promo pricing"
    },
    {
      "provider": "crusoe",
      "name": "8x B200",
      "gpu": "b200",
      "n": 8,
      "vcpu": 176,
      "ram": 2048,
      "od": 34.32,
      "spot": null,
      "res1": 24,
      "r": [
        [
          "us-east",
          "limited"
        ],
        [
          "us-central",
          "ga"
        ]
      ],
      "est": true,
      "note": "~$4.29/GPU/hr; powered by stranded/renewable energy"
    },
    {
      "provider": "crusoe",
      "name": "8x H200",
      "gpu": "h200",
      "n": 8,
      "vcpu": 176,
      "ram": 1800,
      "od": 28,
      "spot": null,
      "res1": 19,
      "r": [
        [
          "us-central",
          "ga"
        ],
        [
          "us-east",
          "ga"
        ]
      ],
      "est": true,
      "note": "~$3.50/GPU/hr"
    },
    {
      "provider": "crusoe",
      "name": "8x H100 SXM",
      "gpu": "h100",
      "n": 8,
      "vcpu": 176,
      "ram": 1800,
      "od": 19.6,
      "spot": null,
      "res1": 14,
      "r": [
        [
          "us-central",
          "ga"
        ],
        [
          "us-east",
          "ga"
        ]
      ],
      "est": true,
      "note": "~$2.45/GPU/hr"
    },
    {
      "provider": "crusoe",
      "name": "8x A100 80GB",
      "gpu": "a100_80",
      "n": 8,
      "vcpu": 124,
      "ram": 1024,
      "od": 13.2,
      "spot": null,
      "res1": 9,
      "r": [
        [
          "us-central",
          "ga"
        ]
      ],
      "est": true,
      "note": "~$1.65/GPU/hr"
    },
    {
      "provider": "nebius",
      "name": "8x B200",
      "gpu": "b200",
      "n": 8,
      "vcpu": 224,
      "ram": 2048,
      "od": 28,
      "spot": null,
      "res1": 18.2,
      "r": [
        [
          "eu-north1",
          "ga"
        ],
        [
          "us-central1",
          "limited"
        ]
      ],
      "est": true,
      "note": "~$3.50/GPU/hr; EU sovereign capacity"
    },
    {
      "provider": "nebius",
      "name": "8x H200",
      "gpu": "h200",
      "n": 8,
      "vcpu": 208,
      "ram": 1800,
      "od": 18.4,
      "spot": null,
      "res1": 12,
      "r": [
        [
          "eu-north1",
          "ga"
        ],
        [
          "us-central1",
          "ga"
        ]
      ],
      "est": true,
      "note": "~$2.30/GPU/hr"
    },
    {
      "provider": "nebius",
      "name": "8x H100 SXM",
      "gpu": "h100",
      "n": 8,
      "vcpu": 208,
      "ram": 1600,
      "od": 16,
      "spot": null,
      "res1": 10.4,
      "r": [
        [
          "eu-north1",
          "ga"
        ],
        [
          "us-central1",
          "ga"
        ]
      ],
      "est": true,
      "note": "~$2.00/GPU/hr; up to 35% off with commit"
    },
    {
      "provider": "runpod",
      "name": "1x B200",
      "gpu": "b200",
      "n": 1,
      "vcpu": 28,
      "ram": 283,
      "od": 5.89,
      "spot": null,
      "res1": 4.5,
      "r": [
        [
          "US",
          "ga"
        ],
        [
          "EU",
          "limited"
        ]
      ],
      "note": "On-demand per-GPU"
    },
    {
      "provider": "runpod",
      "name": "1x H200",
      "gpu": "h200",
      "n": 1,
      "vcpu": 24,
      "ram": 251,
      "od": 4.39,
      "spot": null,
      "res1": 3.4,
      "r": [
        [
          "US",
          "ga"
        ],
        [
          "EU",
          "ga"
        ]
      ],
      "note": "On-demand per-GPU"
    },
    {
      "provider": "runpod",
      "name": "1x H100 SXM",
      "gpu": "h100",
      "n": 1,
      "vcpu": 20,
      "ram": 251,
      "od": 2.99,
      "spot": 1.99,
      "res1": 2.2,
      "r": [
        [
          "US",
          "ga"
        ],
        [
          "EU",
          "ga"
        ],
        [
          "CA",
          "ga"
        ]
      ],
      "note": "On-demand $2.99 / Community $1.99"
    },
    {
      "provider": "runpod",
      "name": "1x A100 80GB SXM",
      "gpu": "a100_80",
      "n": 1,
      "vcpu": 16,
      "ram": 125,
      "od": 1.19,
      "spot": 0.79,
      "res1": 0.9,
      "r": [
        [
          "US",
          "ga"
        ],
        [
          "EU",
          "ga"
        ]
      ],
      "note": "Per-GPU; per-second billing"
    },
    {
      "provider": "runpod",
      "name": "1x L40S",
      "gpu": "l40s",
      "n": 1,
      "vcpu": 16,
      "ram": 94,
      "od": 0.86,
      "spot": 0.79,
      "res1": 0.7,
      "r": [
        [
          "US",
          "ga"
        ],
        [
          "EU",
          "ga"
        ]
      ],
      "note": "Per-GPU"
    },
    {
      "provider": "runpod",
      "name": "1x RTX 4090",
      "gpu": "rtx4090",
      "n": 1,
      "vcpu": 12,
      "ram": 62,
      "od": 0.69,
      "spot": 0.34,
      "res1": 0.5,
      "r": [
        [
          "US",
          "ga"
        ],
        [
          "EU",
          "ga"
        ]
      ],
      "note": "Community Cloud cheap dev"
    },
    {
      "provider": "vast",
      "name": "1x H200 (marketplace)",
      "gpu": "h200",
      "n": 1,
      "vcpu": 24,
      "ram": 200,
      "od": 1.87,
      "spot": null,
      "res1": null,
      "r": [
        [
          "GLOBAL",
          "ga"
        ]
      ],
      "note": "Marketplace median; varies by host"
    },
    {
      "provider": "vast",
      "name": "1x H100 SXM (marketplace)",
      "gpu": "h100",
      "n": 1,
      "vcpu": 20,
      "ram": 200,
      "od": 1.55,
      "spot": null,
      "res1": null,
      "r": [
        [
          "GLOBAL",
          "ga"
        ]
      ],
      "note": "Marketplace median bid price"
    },
    {
      "provider": "vast",
      "name": "1x A100 80GB (marketplace)",
      "gpu": "a100_80",
      "n": 1,
      "vcpu": 16,
      "ram": 120,
      "od": 0.67,
      "spot": null,
      "res1": null,
      "r": [
        [
          "GLOBAL",
          "ga"
        ]
      ],
      "note": "Lowest-cost marketplace"
    },
    {
      "provider": "vast",
      "name": "1x RTX 4090 (marketplace)",
      "gpu": "rtx4090",
      "n": 1,
      "vcpu": 12,
      "ram": 62,
      "od": 0.25,
      "spot": null,
      "res1": null,
      "r": [
        [
          "GLOBAL",
          "ga"
        ]
      ],
      "note": "Cheapest dev/inference"
    },
    {
      "provider": "together",
      "name": "8x B200",
      "gpu": "b200",
      "n": 8,
      "vcpu": 224,
      "ram": 2048,
      "od": 47.92,
      "spot": null,
      "res1": 30,
      "r": [
        [
          "US",
          "limited"
        ]
      ],
      "est": true,
      "note": "~$5.99/GPU; instant clusters"
    },
    {
      "provider": "together",
      "name": "8x H200",
      "gpu": "h200",
      "n": 8,
      "vcpu": 208,
      "ram": 1800,
      "od": 25.2,
      "spot": null,
      "res1": 17,
      "r": [
        [
          "US",
          "ga"
        ]
      ],
      "est": true,
      "note": "~$3.15/GPU/hr"
    },
    {
      "provider": "together",
      "name": "8x H100 SXM",
      "gpu": "h100",
      "n": 8,
      "vcpu": 208,
      "ram": 1600,
      "od": 19.12,
      "spot": null,
      "res1": 14,
      "r": [
        [
          "US",
          "ga"
        ],
        [
          "EU",
          "limited"
        ]
      ],
      "note": "$2.39/GPU on-demand; $1.75 reserved"
    },
    {
      "provider": "fluidstack",
      "name": "GB200 NVL72 (per GPU)",
      "gpu": "gb200",
      "n": 1,
      "vcpu": 28,
      "ram": 480,
      "od": 5.5,
      "spot": null,
      "res1": 3.9,
      "r": [
        [
          "US",
          "waitlist"
        ],
        [
          "EU",
          "waitlist"
        ]
      ],
      "est": true,
      "note": "Reserved clusters"
    },
    {
      "provider": "fluidstack",
      "name": "8x B200",
      "gpu": "b200",
      "n": 8,
      "vcpu": 200,
      "ram": 2048,
      "od": 39.92,
      "spot": null,
      "res1": 26,
      "r": [
        [
          "US",
          "limited"
        ],
        [
          "EU",
          "limited"
        ]
      ],
      "est": true,
      "note": "~$4.99/GPU/hr"
    },
    {
      "provider": "fluidstack",
      "name": "8x H200",
      "gpu": "h200",
      "n": 8,
      "vcpu": 200,
      "ram": 1800,
      "od": 19.92,
      "spot": null,
      "res1": 13,
      "r": [
        [
          "US",
          "ga"
        ],
        [
          "EU",
          "ga"
        ]
      ],
      "est": true,
      "note": "~$2.49/GPU/hr"
    },
    {
      "provider": "fluidstack",
      "name": "8x H100 SXM",
      "gpu": "h100",
      "n": 8,
      "vcpu": 200,
      "ram": 1600,
      "od": 15.12,
      "spot": null,
      "res1": 10,
      "r": [
        [
          "US",
          "ga"
        ],
        [
          "EU",
          "ga"
        ],
        [
          "APAC",
          "limited"
        ]
      ],
      "note": "~$1.89/GPU/hr"
    },
    {
      "provider": "scaleway",
      "name": "H100-1-80G (per GPU)",
      "gpu": "h100",
      "n": 1,
      "vcpu": 24,
      "ram": 240,
      "od": 2.95,
      "spot": null,
      "res1": 2.2,
      "r": [
        [
          "fr-par-2",
          "ga"
        ],
        [
          "nl-ams",
          "limited"
        ]
      ],
      "note": "€2.73/hr; renewable-powered EU DCs"
    },
    {
      "provider": "scaleway",
      "name": "H100-SXM-8 (8x)",
      "gpu": "h100",
      "n": 8,
      "vcpu": 160,
      "ram": 1920,
      "od": 23.6,
      "spot": null,
      "res1": 17,
      "r": [
        [
          "fr-par-2",
          "limited"
        ]
      ],
      "est": true,
      "note": "8x H100 SXM cluster"
    },
    {
      "provider": "scaleway",
      "name": "L40S-1 (per GPU)",
      "gpu": "l40s",
      "n": 1,
      "vcpu": 8,
      "ram": 96,
      "od": 1.5,
      "spot": null,
      "res1": 1.1,
      "r": [
        [
          "fr-par-2",
          "ga"
        ],
        [
          "pl-waw",
          "ga"
        ]
      ],
      "est": true,
      "note": "€1.4/hr"
    },
    {
      "provider": "scaleway",
      "name": "L4-1 (per GPU)",
      "gpu": "l4",
      "n": 1,
      "vcpu": 8,
      "ram": 48,
      "od": 0.82,
      "spot": null,
      "res1": 0.6,
      "r": [
        [
          "fr-par-1",
          "ga"
        ],
        [
          "fr-par-2",
          "ga"
        ]
      ],
      "est": true,
      "note": "€0.75/hr"
    },
    {
      "provider": "ovh",
      "name": "H100 (per GPU)",
      "gpu": "h100",
      "n": 1,
      "vcpu": 30,
      "ram": 360,
      "od": 2.99,
      "spot": null,
      "res1": 2.3,
      "r": [
        [
          "GRA (FR)",
          "ga"
        ],
        [
          "BHS (CA)",
          "limited"
        ]
      ],
      "est": true,
      "note": "GDPR/ISO/HDS certified EU cloud"
    },
    {
      "provider": "ovh",
      "name": "A100 (per GPU)",
      "gpu": "a100_80",
      "n": 1,
      "vcpu": 15,
      "ram": 180,
      "od": 2.75,
      "spot": null,
      "res1": 2.1,
      "r": [
        [
          "GRA (FR)",
          "ga"
        ],
        [
          "BHS (CA)",
          "ga"
        ]
      ],
      "est": true,
      "note": "Per-GPU"
    },
    {
      "provider": "ovh",
      "name": "L40S (per GPU)",
      "gpu": "l40s",
      "n": 1,
      "vcpu": 15,
      "ram": 180,
      "od": 1.6,
      "spot": null,
      "res1": 1.2,
      "r": [
        [
          "GRA (FR)",
          "ga"
        ]
      ],
      "est": true,
      "note": "Per-GPU"
    },
    {
      "provider": "ovh",
      "name": "L4 (per GPU)",
      "gpu": "l4",
      "n": 1,
      "vcpu": 15,
      "ram": 90,
      "od": 0.88,
      "spot": null,
      "res1": 0.7,
      "r": [
        [
          "GRA (FR)",
          "ga"
        ],
        [
          "BHS (CA)",
          "ga"
        ]
      ],
      "est": true,
      "note": "Per-GPU"
    },
    {
      "provider": "alibaba",
      "name": "ecs.ebmgn (A100 80GB)",
      "gpu": "a100_80",
      "n": 8,
      "vcpu": 96,
      "ram": 1024,
      "od": 28,
      "spot": null,
      "res1": 16,
      "r": [
        [
          "cn-hangzhou",
          "ga"
        ],
        [
          "cn-beijing",
          "ga"
        ],
        [
          "ap-southeast-1",
          "limited"
        ]
      ],
      "est": true,
      "note": "China-mainland + Singapore; A100/H800 SKUs"
    },
    {
      "provider": "tencent",
      "name": "GT4 (A100 80GB)",
      "gpu": "a100_80",
      "n": 8,
      "vcpu": 96,
      "ram": 1024,
      "od": 27,
      "spot": null,
      "res1": 15.5,
      "r": [
        [
          "ap-guangzhou",
          "ga"
        ],
        [
          "ap-singapore",
          "limited"
        ]
      ],
      "est": true,
      "note": "A100/H800 in mainland China"
    },
    {
      "provider": "e2e",
      "name": "8x H100 HGX",
      "gpu": "h100",
      "n": 8,
      "vcpu": 200,
      "ram": 1800,
      "od": 18.4,
      "spot": null,
      "res1": 12,
      "r": [
        [
          "in-delhi",
          "ga"
        ],
        [
          "in-mumbai",
          "ga"
        ]
      ],
      "est": true,
      "note": "~$2.30/GPU; INR billing"
    },
    {
      "provider": "e2e",
      "name": "8x A100 80GB",
      "gpu": "a100_80",
      "n": 8,
      "vcpu": 128,
      "ram": 1024,
      "od": 12,
      "spot": null,
      "res1": 8,
      "r": [
        [
          "in-delhi",
          "ga"
        ],
        [
          "in-mumbai",
          "ga"
        ]
      ],
      "est": true,
      "note": "~$1.50/GPU/hr"
    },
    {
      "provider": "yotta",
      "name": "Shakti H100 (8x)",
      "gpu": "h100",
      "n": 8,
      "vcpu": 200,
      "ram": 1800,
      "od": 22.4,
      "spot": null,
      "res1": 15,
      "r": [
        [
          "in-gj (Yotta NM1)",
          "ga"
        ]
      ],
      "est": true,
      "note": "~$2.80/GPU; sovereign India cloud"
    }
  ]
};
