angular.module('myApp.controllers', [])
.controller('LandingPageCtrl', function(){
	
})
.controller('ArtistsPageCtrl', ['$scope','$firebase', 'FIREBASE_URL', function($scope,$firebase,FIREBASE_URL){
	
//Production code ////
	var artistRef = new Firebase(FIREBASE_URL +'artists');

	$scope.artists = $firebase(artistRef);

	$scope.artist = {name:'', movie:'', city:'', favorite:false};

	$scope.saveArtist = function() {
		$scope.artists.$add($scope.artist);
		//reset form fields
		$scope.artist = {name:'', movie:'', city:'', favorite:false};
	};	

/////////////// Testing code stuff //////////
// $scope.testVar = 'Sup Serg!!!'
	// $scope.artists = [];

	// $scope.artist = {name:'', movie:'', city:''};
	// $scope.saveArtist = function() {
	// 	//push the artist object into the artists array
	// 	$scope.artists.push($scope.artist);
	// 	$scope.artist = {name:'', movie:'', city:''};
	// };
}])
.controller('AuthPageCtrl', ['$scope','$firebaseSimpleLogin','$location','FIREBASE_URL', function($scope,$firebaseSimpleLogin,$location,FIREBASE_URL){
	var authRef = new Firebase(FIREBASE_URL);
	var auth = $firebaseSimpleLogin(authRef);

	$scope.user = {email:'', password:''};

	$scope.register = function() {
		auth.$createUser($scope.user.email, $scope.user.password).then(function(data){
			console.log(data);
			$scope.login();//call login func instead of the direct call to the $login firebase api
		});
	};

	$scope.login = function() {
		auth.$login('password', $scope.user).then(function(data){
			console.log(data);
			//Redirect users to the /artists page, with the help of the $location service
			$location.path('/artists');
		});
	};

	$scope.logout = function() {
		auth.$logout();
		//Redirect users to the landing page /.
		$location.path('/');
	};
	
}]);





