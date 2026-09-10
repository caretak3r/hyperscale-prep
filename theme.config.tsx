import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
      Hyperscale Prep
    </span>
  ),
  project: {
    link: 'https://github.com/caretak3r/hyperscale-prep',
  },
  docsRepositoryBase: 'https://github.com/caretak3r/hyperscale-prep/tree/main',
  footer: {
    text: (
      <span>
        Hyperscale Prep — interview study notes for operating fleets at scale.
        Not affiliated with any employer.
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Operator-deep interview prep for hyperscale compute: 100+ clusters, 10K+ nodes, Kubernetes internals, networking, security, and safe change."
      />
      <meta property="og:title" content="Hyperscale Prep" />
      <meta
        property="og:description"
        content="Daily operator-deep lessons for large-scale compute interviews."
      />
      <link rel="icon" href="/hyperscale-prep/favicon.svg" type="image/svg+xml" />
    </>
  ),
  primaryHue: { dark: 200, light: 212 },
  primarySaturation: { dark: 70, light: 80 },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    float: true,
    title: 'On this page',
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: null,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Hyperscale Prep',
    }
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
}

export default config
