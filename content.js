chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const videoURL = document.getElementsByTagName("video")[0]["src"]
    sendResponse({url: videoURL})
})