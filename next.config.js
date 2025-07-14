module.exports = {
  async rewrites() {
    return [
      {
        source: '/proj-pca/:path*',
        destination: 'https://v0-modern-ui-design-requirements-hsmh7qklj.vercel.app/:path*',
      },
    ];
  },
};
