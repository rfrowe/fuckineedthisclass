var app = angular.module("loginApp", ["firebase"]);
app.controller("LoginCtrl", function($scope, $firebaseAuth) {
    var ref = new Firebase("https://fuckineedthisclass.firebaseio.com");
    // create an instance of the authentication service
    var auth = $firebaseAuth(ref);
    // login with email and password
    
    $scope.login = function() {
        $scope.authData = null;
        $scope.error = null;
        
        auth.$authWithPassword({
            email: $scope.inputEmail,
            password: $scope.inputPassword
        }).then(function(authData) {
            $scope.authData = authData;
            console.log("Logged in as:", authData.uid);
        }).catch(function(error) {
            $scope.error = error;
            console.log("Authentication failed:", error);
        });
    }
});
