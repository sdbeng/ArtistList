angular.module('myApp', [
'ng-Route'

]).
config(['routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl:'index.html',
		controller:'LandingPageCtrl'
	});
	$routeProvider.otherwise({redirectTo: '/'});

}]);