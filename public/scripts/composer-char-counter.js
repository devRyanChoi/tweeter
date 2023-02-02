$(document).ready(function() {
    const maxChar = 140; 
  $('#tweet-text').on('input', function() {
    const countChar = $(this).val().length; 
    const tweetdiv = $(this).next();   
    const counter = tweetdiv.find('output')  
    $(counter).text(maxChar - countChar);
    if(maxChar - countChar < 0) {
      $(counter).addClass('counter-negative');
    } else {
      $(counter).removeClass('counter-negative')
    }
  })
});








