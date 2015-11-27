//Angular Js code
var app=angular.module('myApp', ['ngRoute']);


app.controller('createAccount1', function($scope, $location) {

    var ref = new Firebase("https://loginappfrist.firebaseio.com/");

    $scope.login = function() {
        var emailCreate = $("#createEmail").val();
        var passwordCreate = $("#createPass").val();
        var failCreate = false;

        ref.createUser({
          email    : emailCreate,
          password : passwordCreate
        }, function(error, userData) {
          if (error) {
            $scope.failCreate = true;
            console.log("Error creating user:", error);
          } else {
            console.log("Successfully created user account with uid:", userData.uid);
            $scope.failCreate = false;
            alert("Se ha creado la cuenta")
            }
        });
    };
});

