
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Firebase v9+ uses .mjs and .cjs files.
config.resolver.sourceExts.push('mjs', 'cjs');

// To support Firebase Auth, we need to override the mainFields to include 'browser' and 'module'
// in addition to the default 'main'.
config.resolver.mainFields = ['browser', 'module', 'main'];

module.exports = config;
