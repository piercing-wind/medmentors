/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    trailingSlash: true, 
    assetPrefix: isProduction ? 'https://piercing-wind.github.io/medmentors/' : '',
};



export default nextConfig;