angular.module( 'albumPhotos.about', [
  'ui.state',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/about',
    views: {
      "header": {
	controller: 'HeaderCtrl',
        templateUrl: 'layout/header.tpl.html'
      },
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'about/about.tpl.html'
      },
      "footer": {
        templateUrl: 'layout/footer.tpl.html'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'AboutCtrl', function AboutCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
