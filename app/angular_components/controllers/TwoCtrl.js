angular.module('testApp')
    .controller('TwoCtrl', function($scope, $location) {
        $scope.onClick = function() {
            $location.path('/one');
        };
    });
