document.write(
  [
    // libs
    '/libs/jquery.min.js',
    '/libs/angular.min.js',
    '/libs/angular-touch.min.js',
    '/libs/angular-route.min.js',
    '/libs/angular-resource.min.js',
    '/libs/ui-bootstrap-tpls.min.js',

    // our app
    '/app.js',
    '/ctrl/core.js'
  ].map(function(scriptSrc){
    return '<script src="' + scriptSrc + '"></script>';
  }).join('')
);