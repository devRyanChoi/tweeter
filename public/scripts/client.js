/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$( document ).ready(function() {
  
const renderTweets = function(tweets) {
  const $container = $('#tweets-container')

  tweets.forEach(tweet => {
      const $tweet = createTweetElement(tweet);
      $container.prepend($tweet);
  });
}

const createTweetElement = function(tweet) {
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
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);
});




