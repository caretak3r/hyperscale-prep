# Hyperscale Prep

Public study repo for operating **large-scale compute at hyperscale** — the kind of role that asks for **100+ clusters / 10K+ nodes**, deep Kubernetes internals, cloud & cluster networking, security, and safe change systems (Terraform/Atlantis, Temporal/Argo).

Maintained as a **living one-pager** plus diagrams: one dense lesson per day, written like an engineer who ran this in production — not a certification cram sheet.

**Living doc:** [`hyperscale-one-pager.md`](./hyperscale-one-pager.md)

---

## Purpose

- Build an interview-ready **mental model** for fleets (cells, blast radius, lifecycle automation).
- Go **operator-deep** on each JD topic: idiosyncrasies, real CLI/config, failure modes (symptom → root cause → fix).
- Keep a single artifact you can skim the night before an interview instead of scattered notes.

This is prep material, not a product. Commands and configs are illustrative of production patterns; adapt them to your cloud and security posture.

---

## JD coverage

| Theme | Status in one-pager |
|---|---|
| Hyperscale fleet mental model (100+ clusters / 10K+ nodes) | Lesson 1 |
| Kubernetes control plane internals at scale | Lesson 2 |
| Cluster provisioning & lifecycle systems | Next (Lesson 3) |
| Borg/Mesos-like orchestration patterns | Upcoming |
| Cloud networking (VPC, peering, Shared VPC, TGW) | Upcoming |
| Interconnect / Direct Connect, Cloud NAT, BGP | Upcoming |
| Edge LB & DDoS | Upcoming |
| Cluster networking: CNI, Cilium, eBPF | Upcoming |
| NetworkPolicy, multi-NIC, sFlow | Upcoming |
| Service mesh (Istio/Envoy/Linkerd) & mTLS | Upcoming |
| Cluster security: PSS, admission, RBAC, IAM | Upcoming |
| Node/container hardening & supply chain | Upcoming |
| IaC: Terraform + Atlantis at fleet scale | Upcoming |
| Workflow orchestration: Temporal & Argo | Upcoming |
| Systems design tradeoffs for evolving platforms | Upcoming |

Curriculum metadata lives in [`curriculum.json`](./curriculum.json) (`next_lesson`, completed dates, `refreshedAt`).

---

## How daily lessons work

1. **One lesson per day** on a JD-aligned topic.
2. Each lesson targets production depth:
   - Diagram (PNG in this repo)
   - Concrete commands / config
   - **Failures & fixes** (symptoms → causes → mitigations)
   - Real reference URLs
   - Interview soundbites
   - Self-check prompt
3. Lessons are **appended** to the living one-pager (older lessons stay; refreshed lessons get a `refreshed` date).
4. Diagrams stay stable filenames so links don’t rot (`hyperscale-fleet-topology.png`, `k8s-control-plane-at-scale.png`, …).

---

## How to read the one-pager

1. Open [`hyperscale-one-pager.md`](./hyperscale-one-pager.md).
2. **Interview crunch:** read the newest lessons first; use soundbites + Failures & fixes tables as flashcards.
3. **Deep prep:** read Lesson 1 → 2 → … in order — later lessons assume the cell/fleet vocabulary.
4. Open the linked PNGs while reading; each lesson tells you how to read the diagram top-down.
5. Do the **Quick self-check** out loud before the next lesson.

---

## Repo layout

```
.
├── README.md
├── curriculum.json          # progress + next lesson
├── hyperscale-one-pager.md  # living study doc
├── hyperscale-fleet-topology.png
├── k8s-control-plane-at-scale.png
└── .gitignore
```

---

## Contributing / local use

- Edit only under this tree; keep secrets out (see `.gitignore` for `.env`, etc.).
- Prefer updating the living one-pager over creating parallel notes files.
- When refreshing a lesson, keep the original date and add `refreshed YYYY-MM-DD`.

---

## License / disclaimer

Study notes for personal interview prep. Third-party docs and papers remain under their own licenses; links are provided for learning, not as endorsements.
