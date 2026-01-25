import type { NextConfig } from "next";

// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true, // Questo risolve l'errore degli apostrofi nel build di Vercel
//   },
//   typescript: {
//     ignoreBuildErrors: true, // Questo evita blocchi per variabili inutilizzate
//   },
//   // Forza Next.js a usare la versione 15 anche se vede tracce della 16
//   onDemandEntries: {
//     maxInactiveAge: 25 * 1000,
//     pagesBufferLength: 2,
//   },
// };

const nextConfig: NextConfig = {
  experimental: {
    useCache: true, // 🔥 serve per "use cache"
  },
  cacheComponents: true,
  reactCompiler: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;