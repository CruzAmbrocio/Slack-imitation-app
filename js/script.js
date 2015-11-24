//Js code	
$(document).ready(function(){
   // jQuery methods go here...
    $(".forCreate").hide();
    $("#createAccount").click(function(){
        $(".forLog").hide();
        $(".forCreate").show();
    });
    $("#ReturnLog").click(function() {
        $(".forCreate").hide();
        $(".forLog").show();
    })
});