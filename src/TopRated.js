// React Imports
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

// Library Imports
import {Animated} from "react-animated-css";

// API Key:
// 2456b8aa966181b0d179e6737990be82

function TopRated() {

    useEffect(() =>{
        fetchMovies();
    }, [])

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovies = async () => {
        //Fetch 20 Popular Movies Data from the Movie DB 
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=2456b8aa966181b0d179e6737990be82&language=en-US&page=1');

        //Convert 20 Popular Movies Data to Json format
        const movies = await data.json();
        setMovies(movies.results);
        setLoading(false);
        
    }

    // Render below on page load (see above - loading state is true by default) 
    // until data is fetched successfully
    if (loading) return (
        <div id="popular" className="wrapper">
            <main className="loading">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </main>
        </div>
    );

  return (
    <div id="popular" className="wrapper">
        <Animated animationIn="fadeInUp" animationOut="fadeOutDown" animationInDuration={1500} animationOutDuration={1500} isVisible={true}>
            <h1>Top-Rated of All Time</h1>
        </Animated>
        <Animated animationIn="fadeIn" animationOut="fadeOutDown" animationInDuration={2500} animationOutDuration={2500} isVisible={true}>
            <div className="popular-movies">
                {movies.map(movie => (
                <Link to={`/movies/${movie.id}`} className="linkEffects"> 
                    <div className="popular-movie">
                        <div className="popular-movie-title">
                            <h2 key={movie.id}>
                                <Link to={`/movies/${movie.id}`} className="linkEffects">
                                {movie.title}
                                </Link>
                            </h2>
                        </div>
                    <div className="card-adjustment">
                        <div className="flip-card-container">
                            <div className="flip-card">
                                <div className="flip-card-front popular-movie-poster">
                                    <Link to={`/movies/${movie.id}`} className="linkEffects">
                                    {
                                        movie.poster_path == null ? 
                                            <div className="unavailable-poster">
                                                <img className="placeholder-poster" src="/assets/placeholder.png" alt="Placeholder poster" width="300"/>
                                            </div>
                                        :
                                            <div className="available-poster">
                                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width="300" alt={`${movie.title} movie poster`}/> 
                                            </div>

                                    }  
                                    </Link>
                                </div>
                                <div className="flip-card-back popular-movie-info">
                                    <Link to={`/movies/${movie.id}`} className="linkEffects">
                                    <p>
                                        <span>{movie.title}</span>
                                        <p>Rating: {movie.vote_average}/10</p>
                                        <p>{(movie.overview).substr(0, 150)}...</p>
                                        
                                    </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="movie-gap"></span>
                </div>
                 </Link>   
        ))}
           
        </div>
        </Animated>
    </div>
  );
}

export default TopRated;