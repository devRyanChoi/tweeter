$(document).ready(function() {
    const maxChar = 140; 
  $('#tweet-text').on('input', function() {
    const countChar = $(this).val().length; 
    const tweetdiv = $(this).next();   
    const counter = tweetdiv.find('output')  
    const restChar = maxChar - countChar;
    $(counter).text(restChar);
    if(restChar < 0) {
      $(counter).addClass('counter-negative');
    } else {
      $(counter).removeClass('counter-negative')
    }
  })
});








