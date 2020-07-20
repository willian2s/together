module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        target: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@models': './src/modules',
        '@controllers': './src/core',
        '@view': './src/shared',
        '@config': './src/config',
      },
    }],
  ],
  ignore: [
    '**/*.spec.ts',
  ],
};
