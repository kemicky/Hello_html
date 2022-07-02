
function greetingMsg(){
    
     $(document).ready(function () {
          $('#img-gif').hide();
          $('#button-hide-greet').attr('disabled', true);
           $('#button-hide-greet').click(function () {
           $('#img-gif').hide();
           $('#button-hide-greet').attr('disabled', true);
           $('#button-greet').attr('disabled', false);

      });

          $('#button-greet').click(function () {
              $('#img-gif').show();
              $('#button-hide-greet').attr('disabled', false);
              $('#button-greet').attr('disabled', true);
          });
     }); 

}//end_function

/*
function hidegreetingMsg(){
   $(document).ready(function () {
         $('#img-gif').hide();
              $('#button-hide-greet').attr('disabled', true);
               $('#button-hide-greet').click(function () {
               $('#img-gif').hide();
               $('#button-hide-greet').attr('disabled', true);
               $('#button-greet').attr('disabled', false);

          });
     });

}//end_function
*/
