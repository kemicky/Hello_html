 function toggle(ele) {
      var imggif = document.getElementById('imggif');
          if (imggif.style.display == 'block') {
               imggif.style.display = 'none';
  
              document.getElementById(ele.id).value = 'Click Here';
          }
          else {
               imggif.style.display = 'block';
              document.getElementById(ele.id).value = 'Close X';
          }
}//end_function



