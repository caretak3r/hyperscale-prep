const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: false,
  defaultShowCopyCode: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hyperscale-prep',
  assetPrefix: '/hyperscale-prep',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = withNextra(nextConfig)
