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
