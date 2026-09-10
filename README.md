# Hyperscale Prep

Public study site for operating **large-scale compute at hyperscale** — **100+ clusters / 10K+ nodes**, Kubernetes internals, cloud & cluster networking, security, and safe change systems (Terraform/Atlantis, Temporal/Argo).

**Live docs:** https://caretak3r.github.io/hyperscale-prep/

Built with [Nextra](https://nextra.site) (`nextra-theme-docs`) and static-exported to GitHub Pages.

---

## Purpose

- Build an interview-ready **mental model** for fleets (cells, blast radius, lifecycle automation).
- Go **operator-deep** on each JD topic: idiosyncrasies, real CLI/config, failure modes (symptom → root cause → fix).
- Keep a browsable docs site (plus an archived flat one-pager) you can skim the night before an interview.

This is prep material, not a product. Commands and configs are illustrative of production patterns; adapt them to your cloud and security posture.

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000/hyperscale-prep/](http://localhost:3000/hyperscale-prep/) (note the `basePath`).

Static export (same as Pages):

```bash
npm run build
# static files in out/
```

Requires Node 18+.

---

## Curriculum

| Theme | Status |
|---|---|
| Hyperscale fleet mental model (100+ clusters / 10K+ nodes) | [Lesson 1](https://caretak3r.github.io/hyperscale-prep/lessons/01-hyperscale-mental-model/) |
| Kubernetes control plane internals at scale | [Lesson 2](https://caretak3r.github.io/hyperscale-prep/lessons/02-k8s-control-plane/) |
| Cluster provisioning & lifecycle systems | Next (Lesson 3) |
| Borg/Mesos-like, cloud networking, Cilium/eBPF, mesh, security, Terraform/Atlantis, Temporal/Argo, design tradeoffs | Upcoming |

Metadata: [`curriculum.json`](./curriculum.json). Writing rules: [Conventions](https://caretak3r.github.io/hyperscale-prep/conventions/).

---

## Repo layout

```
.
├── README.md
├── package.json
├── next.config.js          # output:'export', basePath /hyperscale-prep
├── theme.config.tsx        # Nextra theme — "Hyperscale Prep"
├── pages/                  # MDX docs (Nextra pages router)
│   ├── index.mdx
│   ├── conventions.mdx
│   ├── lessons/
│   └── archive/
├── public/                 # PNGs, favicon
├── hyperscale-one-pager.md # flat archive (superseded by docs/lessons)
├── curriculum.json
└── .github/workflows/deploy.yml
```

---

## Deploy

Push to `main` runs [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml): `npm ci` → `npm run build` → upload `out/` → GitHub Pages.

Repo **Settings → Pages → Build and deployment → Source** should be **GitHub Actions** (the workflow sets this via API when possible).

---

## License / disclaimer

Study notes for personal interview prep. Third-party docs and papers remain under their own licenses; links are provided for learning, not as endorsements.
