// script.js

    // create the module and name it scotchApp
    var wealthwayApp = angular.module('wealthwayApp', ['ngRoute']);
    
    wealthwayApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/login.html',
                controller  : 'mainController'
            })
            
            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })
            
            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })
            
            .when('/login', {
                templateUrl : 'pages/home.html',
                controller  : 'loginController'
            });
    });

    // create the controller and inject Angular's $scope
    wealthwayApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    wealthwayApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    wealthwayApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
    
    wealthwayApp.controller('loginController', function($scope) {
        $scope.message = 'This is a login page.';
    });
