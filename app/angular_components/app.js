angular.module('testApp', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/one', {
                    templateUrl: 'angular_components/templates/one.html',
                    controller: 'OneCtrl'
                }).
                when('/two', {
                    templateUrl: 'angular_components/templates/two.html',
                    controller: 'TwoCtrl'
                }).
                otherwise({
                    redirectTo: '/one'
                });
        }]);
