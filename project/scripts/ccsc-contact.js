
const messageCount = document.querySelector("#message-count");
let messageCounter = GetMessageCount();

function GetMessageCount() {
    return JSON.parse(this.localStorage.getItem("messageCount"))
}

function SetMessageCount() {
    this.localStorage.setItem("messageCount", JSON.stringify(messageCounter))
};

function DisplayMessageCount() {
    messageCount.innerHTML = messageCounter;
};

if (document.getElementById('message-submitted')) {
    document.addEventListener('DOMContentLoaded', function() {
        messageCounter++
        SetMessageCount();
        DisplayMessageCount();
    }, false);
};