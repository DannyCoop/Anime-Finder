import React, { Component } from 'react';
import './App.css';
import Filter from './Filter';
import AnimeBoard from './AnimeBoard'


const URL = 'https://api.jikan.moe/v3/genre/anime/1'

class App extends Component {
  constructor(){
    super()
    this.state={
      animes: [],
      filter: {
        type: 'action'
      }
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(animes => {
  
      this.setState({ 
        animes: animes.anime
      })
    })
  }

  changeFilter = (type) => {
    let resultArray = []
    let Array = this.state.animes.map( anime => {
      let newArray = anime.genres.map(genre => {
        if (type === genre.name.toLowerCase()){
          resultArray.push(anime)
          this.setState({
            animes: resultArray,
            filter: {
              type: type
            }
          })
        }
      })
    })

    console.log(this.state.animes)

    // this.setState({
    //   filters: {
    //     type: type
    //   }
    // })
  }

render(){
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">
            Anime Finder
          </h1>
        </header>
        
        <div className="ui container">
          <div className="ui grid">
            <div className="column">
              <Filter changeFilter={this.changeFilter}/>
            </div>

            <div className="column">
              <AnimeBoard animes={this.state.animes}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
