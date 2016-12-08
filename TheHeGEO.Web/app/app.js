/// <reference path="/Content/client/libs/angular/angular.js" />
(function () {
    angular.module('thehegeo', ['thehegeo.common']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: "/home",
            templateUrl: "/app/components/home/homeView.html",
            controller: "homeController"
        });
        $urlRouterProvider.otherwise('/home');
    }
})();