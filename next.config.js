/** @type {import('next').NextConfig} */
const nextConfig = {
    image: {
        remotePatterns: [{hostname: 'raw.githubusercontent.com'}]
    }
}

module.exports = nextConfig
