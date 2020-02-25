module.exports = {
  // presets: ["@vue/cli-plugin-babel/preset"]，
  presets: [
    ['@vue/app', {
      polyfills: [
        'es6.promise',
        'es6.symbol'
      ]
    }]
  ]
};
