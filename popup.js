document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('catch').addEventListener('click', onclick, false)
    function onclick() {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, 'Video', getUrl)
        })
        document.getElementById('catch').disabled = "disabled"
        document.getElementById('new_tab').style = "visibility: visible;"
    }

    let videoUrl = null
    let videoTitle = null

    document.getElementById('new_tab').addEventListener('click', function () {
        chrome.downloads.download({
            url: videoUrl,
            filename: videoTitle
        })
    }, false)

    function getUrl(res) {
        videoUrl = res.url
        videoTitle = res.title
        console.log(videoUrl)
    }
}, false)

