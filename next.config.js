/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function getConfig(config) {
  return config
}

const nextConfig = getConfig({
  devIndicators: {
    buildActivityPosition: 'bottom-left',
  },
  images: {
    unoptimized: process.NEXT_PUBLIC_UNOPTIMIZE_IMAGE === 'false',
  },
  productionBrowserSourceMaps: true,
  publicRuntimeConfig: {
    NODE_ENV: process.NODE_ENV,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output:
    process.NEXT_PUBLIC_UNOPTIMIZE_IMAGE === 'false' ? 'export' : 'standalone',
})

module.exports = nextConfig
