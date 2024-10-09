import createNextIntlPlugin from "next-intl/plugin"

// Konfiguracja NextIntl
const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default withNextIntl(nextConfig)
