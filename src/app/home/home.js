/**
 * Home module
 */
angular.module( 'albumPhotos.home', [
  'ui.state',
  'plusOne',
  'firebase',
  'ngAnimate'
])

/**
 * Each section or module of the site can also have its own routes
 */
.config(function config( $stateProvider) {
  $stateProvider.state( 'home/:projectId', {
    url: '/home/:projectId',
    views: {
      "header": {
        controller: 'HeaderCtrl',
        templateUrl: 'layout/header.tpl.html'
      },
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      },
      "footer": {
        templateUrl: 'layout/footer.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * Home Controller
 */
.controller( 'HomeCtrl', function HomeController( $scope, angularFire, $state, $rootScope ) {
  //FireBase initialization
  var ref = new Firebase("https://album-photos.firebaseio.com");
  currentId = $state.params.projectId;
  var loc = window.location.pathname;

  $scope.Math = window.Math;
  //Posible animations by random method
  var animations = ["flash", "bounce", "shake", " tada", "swing", "wobble", "pulse", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "lightSpeedIn", "rollIn"];
  $scope.animation = animations[Math.floor(animations.length * Math.random())];

  //setup the current url folder to get the image assets
  $scope.WinUrl = loc.substring(0, loc.lastIndexOf('/'));

  //Promise to evaluate the angularFire success call
  $scope.promise = angularFire(ref, $scope, "album");
  $scope.promise.then (function () {
      //Set the first photo to shown
      $scope.setCurrentPhoto($scope.album.photos[currentId]);
  });

  $scope.setCurrentPhoto = function (photo) {

      //thumbnails photos selected behavior
      angular.forEach($scope.album.photos, function(photo) {
        photo.selected = false;
      });
      photo.selected = true;

      //Set the currentphoto to shown
      $scope.currentPhoto = photo;
      currentId = photo.id;

      if (currentId <= 0) {
        $scope.prev = false;
        $scope.next = true;
      } else if (currentId >= $scope.album.photos.length-1) {
        $scope.prev = true;
        $scope.next = false;
      } else {
        $scope.prev = true;
        $scope.next = true;
      }
  };

});
