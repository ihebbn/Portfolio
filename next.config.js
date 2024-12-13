const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  reactStrictMode: true,
  output: 'export', // Ensures static export for GitHub Pages
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true, // Required for Next.js export if you're using <Image>
  },
  eslint: {
    ignoreDuringBuilds: true, // Suppresses ESLint warnings/errors during builds
  },
};

