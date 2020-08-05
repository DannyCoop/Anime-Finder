import React from 'react'
import Anime from './Anime'


function AnimeBoard(props){

    return(
        <div className='ui cards'>

            {props.animes.map(anime => {
                return (<div>
                    {<Anime/>}
                </div>)
            })}

       

        </div>
    )
}


export default AnimeBoard