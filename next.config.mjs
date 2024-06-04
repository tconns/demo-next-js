/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async() => {
    return [
      {
        destination: '/detail/:slug',
        source: '/chi-tiet/:slug'
      },
      {
        source: '/abc',
        destination: '/haha'
      }
    ]
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_CLIENT_WEB: process.env.NEXT_PUBLIC_CLIENT_WEB,
  }
};
 
export default nextConfig;