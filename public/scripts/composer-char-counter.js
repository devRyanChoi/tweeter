$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    const maxCount = 140;
    const inputLength = $(this).val().length;
    $(this).nextAll(".counter").text(maxCount - inputLength);
    if (maxCount - inputLength < 0) {
      $(this).nextAll(".counter").css("color", "red");
    } else {
      $(this).nextAll(".counter").css("color", "black");
    }
  })
});



