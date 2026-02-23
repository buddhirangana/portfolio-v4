/** @type {import('next').NextConfig} */

/**
 * Next.js configuration for static export + GitHub Pages deployment.
 * - output: 'export' enables static HTML generation (no Node.js server required)
 * - basePath: leave empty for username.github.io, or set to '/repo-name' for project pages
 * - images.unoptimized: required for static export since Next.js image optimization needs a server
 */
const nextConfig = {
    output: 'export',
    // Change this to '/your-repo-name' if deploying to username.github.io/repo-name
    // Leave empty ('') if deploying to username.github.io (user/organization page)
    basePath: '',
    trailingSlash: true,
    images: {
        unoptimized: true, // Required for static export
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'opengraph.githubassets.com',
            },
        ],
    },
    // Compress output for better performance
    compress: true,
    // Generate source maps only in development
    productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
