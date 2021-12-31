module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          screens: './src/screens',
          components: './src/components',
          navigation: './src/navigation',
          api: './src/api',
        },
      },
    ],
  ],
};
