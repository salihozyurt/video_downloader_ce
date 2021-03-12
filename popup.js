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

    document.getElementById('new_tab').addEventListener('click', function () {
        const dwjs = new
        console.log(videoUrl)
        //window.location.assign(videoUrl)
        //download(videoUrl,"elek","video/mp4")
    }, false)

    function getUrl(res) {
        videoUrl = res.url
        /*const div = document.createElement('div')
        try {
            //div.textContent = `${res.url}`
            div.innerHTML = `<button id="new_tab()">New Tab</button>`
        } catch (error) {
            div.textContent = 'Video cannot found!!!'
        }
        const script = document.createElement('script')
        script.innerHTML = `<script>
                                function new_tab() {
                                    window.location.assign('${res.url}')
                                }
                            </script>`
        document.body.appendChild(div)
        document.body.appendChild(script)*/
    }
}, false)

