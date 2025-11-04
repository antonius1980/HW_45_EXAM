module.exports = {
  plugins: [
    require('autoprefixer')({
      grid: 'autoplace',
      flexbox: 'no-2009',
    }),
    ...(process.env.NODE_ENV === 'production'
      ? [require('cssnano')({ preset: 'default' })]
      : []),
  ],
};

