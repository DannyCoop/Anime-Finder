import React from 'react'
import Anime from './Anime'


function AnimeBoard(props){
    console.log(props)

    return(
        <div className='ui cards'>

            {props.animes.map(anime => {
                return (<div>
                    {<Anime anime={anime}/>}
                </div>)
            })}

       

        </div>
    )
}


export default AnimeBoard