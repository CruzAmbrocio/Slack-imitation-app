//Angular Js code
var app=angular.module('myApp', ['ngRoute']);

var ref = new Firebase("https://applog.firebaseio.com/");

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
    // body...
        templateUrl: '',
        controller: 'createAccount1'
      })
        .when('/chat', {
    // body...
        templateUrl: 'chat.html',
        controller: 'ChatController'
      });
  });


app.controller('createAccount1', function($scope, $location) {
    $scope.formData = {};
    $scope.submitForm = function (formData) {
      alert('Form submitted with' + JSON.stringify(formData));
    };
    $scope.typeError = "";

    //THIS FUNCTION IS FOR CREATE A NEW ACCOUNT 
    $scope.create = function() {
        var emailCreate = $("#createEmail").val();
        var passwordCreate = $("#createPass").val(); 

        ref.createUser({
          email    : emailCreate,
          password : passwordCreate
        }, function(error, userData) {
          if (error) {
            $scope.typeError = error.code;
            console.log("Error creating user:", error.code)
          } else {
            console.log("Successfully created user account with uid:", userData.uid);
            $location.path('/chat');
            alert("Se ha creado la cuenta")
            }
        });
    };

    //THIS FUNCTION ID FOR LOGIN AT THE EXSTENT ACCOUNT
    $scope.login = function() {
        var emailLog = $("#txtEmail").val();
        var passLog = $("#txtPass ").val();

        ref.authWithPassword({
          "email": emailLog,
          "password": passLog
        }, function(error, authData) {
          if (error) {
            $scope.typeErrorLog = error.code;
            console.log("Login Failed!", error);
          } else{
            console.log("Authenticated successfully with payload:", authData);
            $location.path('/chat');
          }
        });
    };

    //THIS FUCTION IS FOR RESET PASSWORD-- SEND NEW PASSWORD AT EMAIL
    $scope.resetPass= function(){
        var emailReset = $("#resetTxtEmail").val();

        ref.resetPassword({
          email : emailReset
        }, function(error) {
          if (error === null) {
            $scope.sendSucc = true;
            console.log("Password reset email sent successfully");
          } else {
            console.log("Error sending password reset email:", error);
          }
        });
    };
});

app.controller('ChatController', function($scope, $firebase) {
  console.log("este es el chat")
    $scope.chat= function(){
    ref.authWithOAuthPopup("twitter", function(error, authData) {
      if (error) {
        console.log(error);
      }
    });
  };

  ref.onAuth(function(authData) {
    // Once authenticated, instantiate Firechat with our user id and user name
    if (authData) {
      initChat(authData);
    }
  });
  $scope.initChat= function(authData){

    var chat = new FirechatUI(ref, document.getElementById('#firechat-wrapper'));
    chat.setUser(authData.uid, authData[authData.provider].displayName);
  };
});

