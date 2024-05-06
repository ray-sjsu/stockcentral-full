/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
    output: 'standalone',
    env: {
        FLASK_API_URL: process.env.FLASK_API_URL
    }
};

export default nextConfig;
