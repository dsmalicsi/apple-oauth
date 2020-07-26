Package.describe({
  name: 'dsmalicsi:apple-oauth',
  version: '1.3.4',
  summary: 'Sign in with Apple OAuth flow - fork from bigowl an quavedev',
  git: 'https://github.com/dsmalicsi/apple-oauth',
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.1')
  api.use('ecmascript');
  api.use('accounts-base', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use(['service-configuration'], ['client', 'server']);
  api.use(['random'], 'client');

  api.addFiles('apple_server.js', 'server');
  api.addFiles('apple_client.js', 'client');

  api.mainModule('namespace.js');

  api.export('Apple');
});

Npm.depends({
  'jsonwebtoken': '8.5.1',
  'jwks-rsa': '1.6.0',
});

Cordova.depends({
  'cordova-plugin-sign-in-with-apple': '0.1.1',
  'cordova-plugin-device': '2.0.3'
});
