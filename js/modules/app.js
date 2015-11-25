//Angular Js code
var app=angular.module('myApp', ['']);
  app.controller('createAccount1', function($scope) {
    $scope.data=function () {
        // body...
        var Name=document.getElementById("txtName").value;
        var email=document.getElementById("txtEmail").value;
        var pass=document.getElementById("txtPass").value;
        var pass2=document.getElementById("txtPass2").value;
        console.log(Name, email, pass2, pass)
    };
  });
