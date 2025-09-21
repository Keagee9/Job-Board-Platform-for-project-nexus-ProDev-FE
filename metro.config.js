
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Workaround for a bug in Expo SDK 49 and Firebase JS SDK v9+
// See: https://github.com/expo/expo/issues/22641
config.resolver.sourceExts.push("mjs", "cjs");

module.exports = config;
