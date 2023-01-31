$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    const amountChars = 140;
    const count =  $(this).val().length;  
    const tweetdiv = $(this).next(); 
    const counter = tweetdiv.find('output') 
    $(counter).text(amountChars - count);

    if (amountChars - count < 0) {
      $(counter).addClass('counter-negative');
    } else {
      $(counter).removeClass('counter-negative')
    }
  })
});




