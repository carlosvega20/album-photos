angular.module( 'plusOne', [] )
.directive('ngBlur', function() {
  return function( scope, elem, attrs ) {
    elem.bind('blur', function() {
      scope.$apply(attrs.ngBlur);
    });
  };
})
.directive('ngFocus', function( $timeout ) {
  return function( scope, elem, attrs ) {

    scope.$watch(attrs.ngFocus, function( newval ) {
      if ( newval ) {
        $timeout(function() {
          elem[0].focus();
        }, 100, false);
      }
    });
  };
})
.directive('wysiwyg', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        item:'=',
        disabled: '@'
      },
      controller: function($scope) {


        $scope.editedItem = null;

        $scope.startEditing = function(item){
          if ($scope.disabled === undefined) {
            $scope.editedItem = item;
          } else if (!$scope.disabled || $scope.disabled != 'true') {
            $scope.editedItem = item;
          }
        };

        $scope.doneEditing = function(){
            $scope.editedItem = null;
        };

      },
      template:
        '<span ng-dblclick="startEditing(item);">' +
          '<span ng-hide="editedItem" ng-style="myStyle" ng-mouseover="myStyle={border:\'1px solid #eee\'}"  ng-mouseleave="myStyle={border:\'none\'}">{{item}}</span>' +
          '<form style="display:inline" ng-submit="doneEditing(item)" ng-show="editedItem">' +
              '<input ng-model="item" ng-blur="doneEditing(item)" ng-focus="item == editedItem">' +
          '</form>' +
        '</span>'
    };
  });
