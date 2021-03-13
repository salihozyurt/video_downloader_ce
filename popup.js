document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('catch-video').addEventListener('click', onclick, false)
    function onclick() {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, 'Video', getUrl)
        })
        
    }

    let videoUrl = null
    let videoTitle = null

    document.getElementById('download-button').addEventListener('click', function () {
        try {
            chrome.downloads.download({
                url: videoUrl,
                filename: videoTitle
            })
        } catch (error) {
            console.log(error)
        }
    }, false)

    function getUrl(res) {
        if(res == undefined) {
            document.getElementById('intro-p').innerHTML = "Video cannot found!"
        } else {
            videoUrl = res.url
            videoTitle = res.title
            document.getElementById('video-title').innerHTML = videoTitle
            document.getElementById('intro').style = "display: none;"
            document.getElementById('video-div').style = "display: inline-flex;"
        }
    }
}, false)

