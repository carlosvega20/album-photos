angular.module( 'albumPhotos.header', [
  'ui.state',
  'ui.bootstrap',
  'firebase'
])

.controller( 'HeaderCtrl', function HeaderCtrl( $scope) {

    var url = "https://populardestinations.firebaseio.com/comments";
    var ref = new Firebase(url);
    /*
    var auth = new FirebaseSimpleLogin(ref, function(error, user) {
      if (error) {
        // an error occurred while attempting login
        console.log(error);
      } else if (user) {
        // user authenticated with Firebase
        $scope.user = user;
        $scope.$apply();
      } else {
        // user is logged out
        $scope.user = null;
      }
    });

    $scope.login = function() {
      auth.login('facebook');
    };
    $scope.logout = function() {
      auth.logout();
    };
    */
});
