angular.module( 'albumPhotos', [
  'templates-app',
  'templates-common',
  'albumPhotos.header',
  'albumPhotos.home',
  'albumPhotos.about',
  'ui.state',
  'ui.route',
  'ngAnimate'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home/0' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | albumPhotos' ;
    }
  });
})

;

