// Creación del módulo
var angularRoutingApp = angular.module('yeison', ['ui.router', 'ngAnimate', 'ngSanitize','ui.swiper','ngMap', 'ngScrollable','yeison.utilidades','yeison.validaciones','yeison.CustomDirective']);

//trigger al cambiar de vista para validar loggin

// Configuración de las rutas
angularRoutingApp.config(function($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise("/home");
$stateProvider
    .state('home', {
      url: "/home",
      templateUrl: 'templates/home.html',
      controller: 'homeController'
    })
});







