chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const isErrOccur = false
    try {
        const videoURL = document.getElementsByTagName("video")[0]["src"]
        let titleLecture = document.getElementsByClassName("page-title")[0].outerText
        let tempCourse = document.getElementsByClassName("media-body")[0].outerText
        let titleCourse = course = tempCourse.substring(0,tempCourse.indexOf(' '))
        const videoTitle = titleCourse + ' ' + titleLecture
        sendResponse({url: videoURL, title: videoTitle})
    } catch (error) {
        console.log(error)
    }
})