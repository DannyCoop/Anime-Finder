import React from 'react'

function Filter(props) {
    return(
        <div className='ui form'>
            <h3>
                Anime genres 
            </h3>

            <div className="field">
                <select name="type" id="type" onChange={(e) => props.changeFilter(e.target.value)}>
                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="dementia">Dementia</option>
                    <option value="demons">Demons</option>
                    <option value="mystery">Mystery</option>
                    <option value="drama">Drama</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="game">Game</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="magic">Magic</option>
                    <option value="mecha">Mecha</option>
                    <option value="samurai">Samurai</option>
                    <option value="romance">Romance</option>
                    <option value="school">School</option>

                </select>
            </div>

        </div>
    )
}

export default Filter