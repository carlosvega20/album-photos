angular.module( 'albumPhotos.header', [
  'ui.state',
  'ui.bootstrap',
  'firebase'
])

.controller( 'HeaderCtrl', function HeaderCtrl( $scope, $rootScope) {

    var url = "https://populardestinations.firebaseio.com/comments";
    var ref = new Firebase(url);

    var auth = new FirebaseSimpleLogin(ref, function(error, user) {
      if (error) {
        // an error occurred while attempting login
      } else if (user) {
        // user authenticated with Firebase
        $rootScope.user = user;
        $rootScope.$apply();
      } else {
        // user is logged out
        $rootScope.user = null;
      }
    });

    $scope.login = function() {
      auth.login('facebook');
    };
    $scope.logout = function() {
      auth.logout();
    };
});
