module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv'],
      [
        'module-resolver',
        {
          alias: {
            api: './src/api',
            components: './src/components',
            enums: './src/enums',
            hooks: './src/hooks',
            interfaces: './src/interfaces',
            screens: './src/screens',
            styles: './src/styles',
            types: './src/types',
            utils: './src/utils',
          },
        },
      ],
    ],
  };
};
