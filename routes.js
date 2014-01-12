var demoApp = angular.module('demoApp', []);

demoApp.config(function ($routeProvider){
	$routeProvider
	 .when("/", {
	 	controller : 'SimpleController',
	 	templateUrl : 'Partials/View1.html'
	 })
	 .when("/partial2", {
	 	controller : 'SimpleController',
	 	templateUrl : 'Partials/View2.html'
	 })
	 .otherwise({redirectTo: "/"});
});