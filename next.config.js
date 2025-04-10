/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
  },
  // Désactiver ESLint pendant le build pour le déploiement
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Désactiver la vérification des types pendant le build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optimisations pour Vercel
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Configuration d'environnement de production
  env: {
    // Variables d'environnement publiques ici
    NEXT_PUBLIC_APP_URL:
      process.env.NEXT_PUBLIC_APP_URL || "https://www.enigmsolution.com",
  },
  experimental: {
    // Optimisations expérimentales pour Next.js 15+
    optimizeCss: true,
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

// Ajout de l'analyseur de bundle en mode analyse
const withBundleAnalyzer =
  process.env.ANALYZE === "true"
    ? require("@next/bundle-analyzer")({ enabled: true })
    : (config) => config;

module.exports = withBundleAnalyzer(nextConfig);
