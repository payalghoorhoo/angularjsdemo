var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider

    .state('home',{
        url: '/home',
        templateUrl:'./home/home.html'
    })

    .state('txt',{
        url: '/secondpage',
        templateUrl:'./secondpage/hometxt.html',
        controller: 'ctrl.js'
        },
    )

});
