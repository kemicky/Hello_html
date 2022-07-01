
function greetingMsg(){
     hideimg(); // hide at beginning

     $('#button-greet').click(function(){
           // show button on click
       $('#img-gif').css("display", "block");
     });
     

     function hideimg() {
          $('#img-gif').css("display", "none");
     }
}//end_function


