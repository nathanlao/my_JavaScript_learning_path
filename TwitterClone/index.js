import { tweetsData } from "./data.js"
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

let tweetsArray = tweetsData

// Parse Tweets from LS and render them
let tweetsFromLocalStorage = JSON.parse(localStorage.getItem("myTweets"))
if (tweetsFromLocalStorage) {
    tweetsArray = tweetsFromLocalStorage
    renderTweets()
}
// localStorage.clear()

// Cover entire browser page and identify which icon is cliced
document.addEventListener('click', function(e) {
    // check if clicked element has the data attribute
    if (e.target.dataset.like) {
        handleLikeClick(e.target.dataset.like)
    } else if (e.target.dataset.retweet) {
        handleRetweetClick(e.target.dataset.retweet)
    } else if (e.target.dataset.viewreply) {
        handleReplyClick(e.target.dataset.viewreply)
    } else if (e.target.dataset.delete) {
        handleDeleteClick(e.target.dataset.delete)
    } else if (e.target.id ==='switch') {
        handleSwitchBtn()
    } else if (e.target.id === 'tweet-btn') {
        handleTweetBtnClick()
    }
})

function handleLikeClick(tweetId) {
    // Iterate the data and use uuid to identify the liked tweet object
    const targetTweetObj = tweetsArray.filter(function(tweet) { // -> shallow copy
        return tweet.uuid === tweetId
    })[0] // object at postion 0 to targetTweetObj

    if (targetTweetObj.isLiked === false) {
        targetTweetObj.likes++
    } else {
        targetTweetObj.likes--
    }
    // Flip the boolean to inverse state
    targetTweetObj.isLiked = !targetTweetObj.isLiked
    saveToLocalStorage()
    renderTweets()
}

function handleRetweetClick(tweetId) {
    const targetTweetObj = tweetsArray.filter(function(tweet) {
        return tweet.uuid === tweetId
    })[0]
    if (targetTweetObj.isRetweeted) {
        targetTweetObj.retweets--
    } else {
        targetTweetObj.retweets++
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
    saveToLocalStorage()
    renderTweets()
}

function handleReplyClick(replyId) {
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}

function handleTweetBtnClick(){

    const tweetInput = document.getElementById("tweet-input")

    if (tweetInput.value) {
        // Build a new tweet object
        const newTweet = {
            handle: `@Nathan`,
            profilePic: `images/mario-logo.jpg`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        }
        tweetsArray.unshift(newTweet)
    }
    tweetInput.value = ''
    saveToLocalStorage()
    renderTweets()
}

function handleDeleteClick(tweetId) {
    const targetTweetObj = tweetsArray.filter(function(tweet) {
        return tweet.uuid === tweetId
    })[0]
    const targetTweetIndex = tweetsArray.indexOf(targetTweetObj)

    // Remove the object from array by its index
    tweetsArray.splice(targetTweetIndex, 1)

    saveToLocalStorage()
    renderTweets()
}

function handleSwitchBtn() {
    document.body.classList.toggle('dark-mode')
}

function getFeedHtml() {

    let feedHtml = ``
    // forEach tweet object inside tweetsData Array
    tweetsArray.forEach(function(tweet) { 

        let likeIconClass = ''
        let retweetIconClass = ''

        if (tweet.isLiked) {
            likeIconClass = 'liked'
        }

        if (tweet.isRetweeted) {
            retweetIconClass = 'retweeted'
        }

        let repliesHTML = ''

        if (tweet.replies.length > 0) {
            tweet.replies.forEach(function(reply) {

                repliesHTML += `
                    <div class="tweet-reply">
                        <div class="tweet-inner">
                            <img src="${reply.profilePic}" class="profile-pic">
                            <div>
                                <p class="handle">${reply.handle}</p>
                                <p class="tweet-text">${reply.tweetText}</p>
                            </div>
                        </div>
                    </div>
                `
            })
        }

        feedHtml += `
            <div class="tweet">
                <div class="tweet-inner">
                    <img src="${tweet.profilePic}" class="profile-pic">
                    <div class="view-reply" id="view-reply" data-viewreply="${tweet.uuid}">
                        <p class="handle" data-viewreply="${tweet.uuid}" >${tweet.handle}</p>
                        <p class="tweet-text" data-viewreply="${tweet.uuid}" >${tweet.tweetText}</p>
                        <div class="tweet-details">
                            <span class="tweet-detail">
                                <i class="fa-regular fa-comment" 
                                data-reply="${tweet.uuid}"
                                ></i>
                                ${tweet.replies.length}
                            </span>
                            <span class="tweet-detail">
                                <i class="fa-solid fa-heart ${likeIconClass}" 
                                data-like="${tweet.uuid}"
                                ></i>
                                ${tweet.likes}
                            </span>
                            <span class="tweet-detail">
                                <i class="fa-solid fa-retweet ${retweetIconClass}" 
                                data-retweet="${tweet.uuid}"
                                ></i>
                                ${tweet.retweets}
                            </span>
                        </div>  
                    </div>
                    <div>
                        <i class="fa-solid fa-trash-can" data-delete="${tweet.uuid}"></i>
                    </div>             
                </div>
                <div class="hidden" id="replies-${tweet.uuid}">
                    ${repliesHTML}
                </div>
            </div>
        `
    })
    return feedHtml
}

function saveToLocalStorage() {
    // convert the array to string and save it in LS
    localStorage.setItem("myTweets", JSON.stringify(tweetsArray))
}

function renderTweets() {
    document.getElementById("feed").innerHTML = getFeedHtml()
}

renderTweets()