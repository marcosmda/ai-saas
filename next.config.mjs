/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "oaidalleapiprodscus.blob.core.windows.net"
            },
            {
                hostname: "replicate.delivery"
            }
        ]
    }
};

export default nextConfig;
