module.exports = {
  async redirects() {
    return [
      {
        source: '/step',
        destination: '/step/1',
        permanent: true,
      },
    ];
  },
};
