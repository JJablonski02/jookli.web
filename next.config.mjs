import createNextIntlPlugin from "next-intl/plugin"

// Konfiguracja NextIntl
const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

export default withNextIntl(nextConfig)
