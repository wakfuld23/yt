const apiKey = "";
const search = 'c tangana'

const videoId = []

async function getVideosId(){
    await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=${apiKey}`)
        .then(response => response.json())
        .then(responseJson => responseJson.items.map(item=> {
            if(item){
                videoId.push(item.id.videoId)
            }
}))
    videoId.map(link => {
        let div = document.createElement('div')
        div.innerText = `https://www.youtube.com/watch?v=${link}`
        document.getElementById('container').appendChild(div)
    })
}

getVideosId()
                                                                   




