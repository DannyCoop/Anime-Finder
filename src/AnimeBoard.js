import React from 'react'
import Anime from './Anime'

function AnimeBoard(props){
    return(
        <div className='ui cards'>
            {/* {props.animes.anime.map(anime => {
                console.log("ab", anime)
            })} */}
            {console.log("ab", props.animes)}
        </div>
    )
}


export default AnimeBoard