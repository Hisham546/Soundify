module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-env'],
  plugins:[
    'react-native-reanimated/plugin',
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-proposal-class-properties',

  ],
};
