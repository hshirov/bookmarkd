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
            enums: './src/enums',
            interfaces: './src/interfaces',
            screens: './src/screens',
            types: './src/types',
          },
        },
      ],
    ],
  };
};
