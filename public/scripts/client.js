/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$( document ).ready(function() {
  console.log( "ready!" );

  $('form').on('submit',function(event) {
  event.preventDefault();

  const newTweetText = $('#tweet-text').val();
  const tweetText = $(this).serialize();

    if (newTweetText.length > 0 && newTweetText.length <= 140) {
      $.post("/tweets", tweetText)
        .done(function() {
          // Reset form and counter on successful post
          $('#tweet-text').val('');
          $('.counter').val(140);

          // Clear any error messages
          $('#error-container')
            .removeClass('unhide')
            .slideUp('slow');

          // Refresh the tweet container
          $('#tweets-container').empty();
          loadTweets();
        });
      }
    });

    function loadTweets() {

      $.get("/tweets")
        .then(data => {
          renderTweets(data)
        })
      $.ajax('/tweets', { method: 'GET' })
      .then(function (moreTweets) {
        renderTweets(moreTweets);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  
    loadTweets();

const renderTweets = function(tweets) {
  const $container = $('#tweets-container')

  tweets.forEach(tweet => {
      const $tweet = createTweetElement(tweet);
      $container.prepend($tweet);
  });
};


const createTweetElement = function (data) {

  const escape = function (str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };
  const $tweet = `
  <article>
      <div class="tweetpost">
        <ul>
         <img src="${data.user.avatars}">
         <h4>${data.user.name}</h4>
        </ul> 
        <h5>${data.user.handle}</h5>
      </div>
      
        <div class="postedtweet">
        <p class="tweet-text">${escape(data.content.text)}</p>
        </div>
        <div class="timeicon">
        <p class="time">${timeago.format(data.created_at)}</p>
          <div class="icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i> 
          <i class="fa-solid fa-heart"></i>
          </div>
        </div>  
    </article> `

    return $tweet;
}

});