import React from 'react';
import './App.css';
import MovieRow from './MovieRow';
import $ from 'jquery';
import {Animated} from "react-animated-css";

// import {Link} from 'react-router-dom';

// API rquest
// https://api.themoviedb.org/3/search/movie?query=marvel&api_key=2456b8aa966181b0d179e6737990be82

class SearchPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
    this.performSearch("a");
  }

  performSearch(searchTerm) {
    
    console.log('perform search from movie db');
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=2456b8aa966181b0d179e6737990be82&query=" + searchTerm;
    // const urlString = "https://api.themoviedb.org/3/discover/movie?api_key=2456b8aa966181b0d179e6737990be82&with_keywords=" + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        const results = searchResults.results;
        
        console.log(results);

        let movieRows = [];

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
          // console.log(movie.title);
          const movieRow = <MovieRow key={movie.id} movie={movie}/>;
          movieRows.push(movieRow);
        })

        this.setState({rows: movieRows});
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
      
    })
  }



  searchChangeHandler(event){
    console.log(event.target.value);
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  }

  

  render() {

    

  return (
    <div className="search-page" id="top">
      
        <div className="search-bar">
          <input onChange={this.searchChangeHandler.bind(this)} placeholder="Search for any movie..."></input>
        </div>
  
        <Animated animationIn="fadeIn" animationOut="fadeOutDown" animationInDuration={2500} animationOutDuration={2500} isVisible={true}>
        <div className="popular-movies search-movies">
          {this.state.rows}
        </div>
        </Animated>
    </div>
  );
}
}
export default SearchPage;