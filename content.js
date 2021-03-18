chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const isErrOccur = false
    try {
        const videoURL = document.getElementsByTagName("video")[0]["src"]
        let titleLecture = document.getElementsByClassName("page-title")[0].outerText
        let titleCourse = document.getElementsByClassName('media-body')[0].getElementsByTagName('a')[0].outerText
        const videoTitle = titleCourse + ' ' + titleLecture
        sendResponse({url: videoURL, title: videoTitle})
    } catch (error) {
        console.log(error)
    }
})