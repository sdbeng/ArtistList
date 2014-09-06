/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
	// .value('FIREBASE_URL', 'https://artistsfavelist.firebaseio.com/');

	.factory('FIREBASE_URL', function(){
		return 'https://artistsfavelist.firebaseio.com/'
			
	})
	// .factory('authService', ['', function(){
	// 	return {
	// 		login: function() {

	// 		}	
	// 	};
	// }])
	;
    ////////////////////
	//Note: You get to use either, value or factory (not both) and value is used when it's just to
	//replace a simple firebase url like in this app.
	//factory is the way to go when you have complex cases and need to define object with many calls inside.
	//I'm gonna use factory to get used to it.//////////

	

