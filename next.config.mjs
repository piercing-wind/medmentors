/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
   basePath: '/medmentors', // Replace with your repository name
   assetPrefix: '/medmentors/', // Replace with your repository name
   images: {
     unoptimized: true,
   },
};



export default nextConfig;