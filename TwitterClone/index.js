import { tweetsData } from "./data.js"

const tweetBtn = document.getElementById("tweet-btn")
const tweetInput = document.getElementById("tweet-input")

tweetBtn.addEventListener('click', function() {
    console.log(tweetInput.value)
})

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
                                <i class="fa-regular fa-comment"></i>
                                ${tweet.replies.length}
                            </span>
                            <span class="tweet-detail">
                                <i class="fa-solid fa-heart"></i>
                                ${tweet.likes}
                            </span>
                            <span class="tweet-detail">
                                <i class="fa-solid fa-retweet"></i>
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