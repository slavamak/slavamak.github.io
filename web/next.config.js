module.exports = {
  env: {
    SANITY_PROJECT_DATASET: process.env.SANITY_PROJECT_DATASET,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
}
