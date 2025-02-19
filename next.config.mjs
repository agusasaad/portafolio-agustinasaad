/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // Minimiza el código JS con SWC (más rápido que Terser)
  reactStrictMode: true, // Activar el modo estricto de React para detectar errores de manera temprana
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200], // Ajustar tamaños de imágenes para diferentes dispositivos
  },
  experimental: {
    optimizeFonts: true, // Optimización de fuentes para cargar solo las necesarias
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        default: false,
        vendors: false,
      };
    }
    return config;
  },
};

export default nextConfig;
