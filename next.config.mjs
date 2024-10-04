/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    trailingSlash: true, 
    assetPrefix: isProduction ? process.env.NEXT_PUBLIC_WEBSITE_URL : '',
};



export default nextConfig;