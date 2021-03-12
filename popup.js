document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('catch').addEventListener('click', onclick, false)
    function onclick() {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, 'Video', getUrl)
        })
    }

    function getUrl(res) {
        const div = document.createElement('div')
        div.textContent = `${res.url}`
        document.body.appendChild(div)
    }
}, false)