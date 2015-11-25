//Js code	
$(document).ready(function() {
   // jQuery methods go here...
    $(".forCreate").hide();
    $(".forReset").hide();

    $("#createAccount").click(function() {
        $(".forLog").hide();
        $(".forCreate").show();
    });
    $("#ReturnLog").click(function() {
        $(".forCreate").hide();
        $(".forLog").show();
    });
    $("#resetPass").click(function() {
        $(".forLog").hide();
        $(".forReset").show();
    });
    $("#cancelReset").click(function() {
        $(".forReset").hide();
        $(".forLog").show();
    });
});

var ref = new Firebase("https://loginappfrist.firebaseio.com/");
ref.createUser({
  email    : "bobtony@firebase.com",
  password : "correcthorsebatterystaple"
}, function(error, userData) {
  if (error) {
    console.log("Error creating user:", error);
  } else {
    console.log("Successfully created user account with uid:", userData.uid);
  }
});