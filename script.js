var password;
password="1234";

$(document).ready(function() {
    
    $('button').click (function() {
        var guess;
        guess=$("#pass").val();
        
        if (guess===password) {
            $("#results").append("CORRECT");
        } else if (guess>password) {
            
            $("#results").append("GREEDY GREEDY GREDY")
        }
    });
        
});