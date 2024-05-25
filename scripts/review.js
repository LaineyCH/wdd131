/* Manage Number Of Reviews */

const reviewCount = document.querySelector("#review-count");
let reviewCounter = GetReviewCount();

function GetReviewCount() {
    return JSON.parse(this.localStorage.getItem("reviewCount"))
}

function SetReviewCount() {
    this.localStorage.setItem("reviewCount", JSON.stringify(reviewCounter))
};

function DisplayReviewCount() {
    reviewCount.innerHTML = reviewCounter;
};

if (document.getElementById('review-submitted')) {
    document.addEventListener('DOMContentLoaded', function() {
        reviewCounter++
        SetReviewCount();
        DisplayReviewCount();
    }, false);
};