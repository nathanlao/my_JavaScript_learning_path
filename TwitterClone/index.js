import { tweetsData } from "./data.js"

const tweetBtn = document.getElementById("tweet-btn")
const tweetInput = document.getElementById("tweet-input")

tweetBtn.addEventListener('click', function() {
    console.log(tweetInput.value)
})

// Cover entire browser page
document.addEventListener('click', function(e) {
    // check if clicked element has the data attribute
    if (e.target.dataset.like) {
        handleLikeClick(e.target.dataset.like)
    }
})

function handleLikeClick(tweetId) {
    // Iterate the data and use uuid to identify the liked tweet object
    const targetTweetObj =  tweetsData.filter(function(tweet) { // -> shallow copy
        return tweet.uuid === tweetId
    })[0] // object at postion 0 to targetTweetObj

    if (targetTweetObj.isLiked === false) {
        targetTweetObj.likes++
    } else {
        targetTweetObj.likes--
    }
    // Flip the boolean to inverse state
    targetTweetObj.isLiked = !targetTweetObj.isLiked
    renderTweets()
}

function getFeedHtml() {
    let feedHtml = ``
    // forEach tweet object inside tweetsData Array
    tweetsData.forEach(function(tweet) { 
        feedHtml += `
            <div class="tweet">
                <div class="tweet-inner">
                    <img src="${tweet.profilePic}" class="profile-pic">
                    <div>
                        <p class="handle">${tweet.handle}</p>
                        <p class="tweet-text">${tweet.tweetText}</p>
                        <div class="tweet-details">
                            <span class="tweet-detail">
                                <i class="fa-regular fa-comment" 
                                data-reply="${tweet.uuid}"
                                ></i>
                                ${tweet.replies.length}
                            </span>
                            <span class="tweet-detail">
                                <i class="fa-solid fa-heart" 
                                data-like="${tweet.uuid}"
                                ></i>
                                ${tweet.likes}
                            </span>
                            <span class="tweet-detail">
                                <i class="fa-solid fa-retweet" 
                                data-retweet="${tweet.uuid}"
                                ></i>
                                ${tweet.retweets}
                            </span>
                        </div>   
                    </div>            
                </div>
            </div>
        `
    })
    return feedHtml
}

function renderTweets() {
    document.getElementById("feed").innerHTML = getFeedHtml()
}

renderTweets()