$(document).ready(function () {
    $('#example').DataTable();
});
const toggleBtn = document.querySelector('#toggleBtn');
const divList = document.querySelector('.row');
toggleBtn.addEventListener('click', () => {
    if (divList.style.display === 'none') {
      divList.style.display = 'block';
      toggleBtn.innerHTML = 'Hide Row';
    } else {
      divList.style.display = 'none';
      toggleBtn.innerHTML = 'Show Row';
    }
  });

  $('button').click(function(){
    $('.alert').removeClass("hide");
    $('.alert').addClass("showAlert");
  });
  
  $('.close-btn').click(function(){
    $('.alert').addClass("hide");
    $('.alert').removeClass("show");
  });


