Package.describe({
  name: 'sylido:autoform-summernote',
  summary: 'Summernote editor for aldeed:autoform',
  version: '0.4.5',
  git: 'https://github.com/sylido/meteor-autoform-summernote'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'templating',
    'underscore',
    'reactive-var',
    'aldeed:autoform',
    'summernote:standalone'
  ], 'client');

  api.addFiles([
    'lib/client/templates.html',
    'lib/client/templates.js',
    'lib/client/autoform-summernote.js'
  ], 'client');
});
