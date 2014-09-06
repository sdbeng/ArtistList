angular.module('myApp', [
'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'firebase'

]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl:'partials/landingpage.html',
		controller:'LandingPageCtrl'
	});
	$routeProvider.when('/artists', {
		templateUrl:'partials/artistspage.html',
		controller:'ArtistsPageCtrl'
	});
	$routeProvider.when('/register', {
		templateUrl:'partials/register.html',
		controller:'AuthPageCtrl'
	});
	$routeProvider.when('/login', {
		templateUrl:'partials/login.html',
		controller:'AuthPageCtrl'
	});
	$routeProvider.otherwise({redirectTo: '/'});

}]);