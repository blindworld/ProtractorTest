angular.module('testApp')
    .controller('OneCtrl', function($scope, $location) {
        $scope.onClick = function() {
            $location.path('/two');
        };
    });
