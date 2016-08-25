var appName = "SUW15dev";

(function(ng) {
  ng.module(appName, [
    'ngRoute',
    'ngResource',
    'ngTouch',
    'ui.bootstrap'
  ])

  .config([
    '$routeProvider',
    '$locationProvider',
    function(
      $routeProvider,
      $locationProvider
    ) {
      $routeProvider
        .otherwise({
          templateUrl: '/core.html',
          controller: 'coreCtrl'
        });

      $locationProvider.html5Mode(true);
    }
  ])
  .constant('settings', {});
})(angular);