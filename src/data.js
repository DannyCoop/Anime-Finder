
const URL = 'https://api.jikan.moe/v3/genre/anime/1'


let allAnime = []

let results = []

    fetch(URL)
    .then(resp => resp.json())
    .then(animes => {
        let result = animes.anime.map(anime => {
            // console.log(anime)
            // allAnime.push(anime)
            return anime
        })
        allAnime.push(result)
    })

allAnime.forEach(stuff => {
    results.push(stuff)
})


export default results