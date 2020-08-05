import React, { Component } from 'react';
import './App.css';
import Filter from './Filter';
import AnimeBoard from './AnimeBoard'

const URL = 'https://api.jikan.moe/v3/genre/anime/1'

class App extends Component {
  fetchAnimes(){
    fetch(URL)
    .then(res => res.json())
    .then(animes => {
      this.setState({
        animes: animes
      })
    });
  }
  constructor(){
    super()
    this.state={
      animes: [],
      filter: {
        type: 'action'
      }
    }
  }

  changeFilter = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }


  componentDidMount(){
    const that=this
    fetch(URL)
    .then(res => res.json())
    .then(animes => {
      that.setState({ 
        animes: animes
      })
    })
  }
render(){
  console.log("this is:",this.state.animes.anime)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">
            Anime Finder!!
          </h1>
        </header>
        
        <div className="ui container">
          <div className="ui grid">
            <div className="column">
              <Filter changeFilter={this.changeFilter}/>
            </div>

            <div className="column">
              List of anime
              <AnimeBoard animes={this.state.animes}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
