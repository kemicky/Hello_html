
function greetingMsg(){
     hideimg(); // hide at beginning

     $('#button-greet').on('click', function(){
           // show button on click
       $('#img-gif').css("display", "block");
     });
     

}//end_function

function hideimg() {
     $('#img-gif').css("display", "none");
}

