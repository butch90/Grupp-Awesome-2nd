document.write(
  [
    // libs
    '/libs/jquery.min.js',
    '/libs/bootstrap.min.js'
  ].map(function(scriptSrc){
    return '<script src="' + scriptSrc + '"></script>';
  }).join('')
);