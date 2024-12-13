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
  basePath: process.env.GITHUB_ACTIONS
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`
  : '',
  eslint: {
    ignoreDuringBuilds: true, // Suppresses ESLint warnings/errors during builds
  },
};

