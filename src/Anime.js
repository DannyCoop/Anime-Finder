import React from 'react'

function Anime(props){

    let info = (props.anime)
    return(

        // <div>Hello it's me</div>
        <div className='card'>
            <div className='content'>
                <a className='header'>
                    <span>{info.title}</span>
                </a>

                <div className="image">
                    <img className='image src' src={info.image_url}/>
                </div>

                <div className='episodes'>
                    Episodes: {info.episodes}
                </div>

                <div className='description'>
                    {info.synopsis}
                </div>
            </div>
        </div>
    )
}


export default Anime