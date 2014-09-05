angular.module('myApp.controllers', [])
.controller('LandingPageCtrl', ['', function(){
	
}])
.controller('ArtistsPageCtrl', ['$scope','$firebase', function($scope,$firebase){
	
//Production code ////
	var artistRef = new Firebase('https://artistsfavelist.firebaseio.com/artists');

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
}]);