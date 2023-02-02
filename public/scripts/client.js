/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$( document ).ready(function() {
  console.log( "ready!" );

  $('form').on('submit',function(event) {
    event.preventDefault();
  });  
  const tweetText = $(this).serialize();
  
  const renderTweets = function(tweets) {
    const $container = $('#tweets-container')

    tweets.forEach(tweet => {
        const $tweet = createTweetElement(tweet);
        $container.prepend($tweet);
    });
  };


  const createTweetElement = function (data) {
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
        
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

    return $tweet;
  }

});
