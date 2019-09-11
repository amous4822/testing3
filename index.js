$('.error-page').hide(0);

$('.login-button , .no-access').click(function(){
    document.location.href="main.html";
});

$('.try-again').click(function(){
  $('.error-page').hide(0);
  $('.login').slideDown(1000);
});
