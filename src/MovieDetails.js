import React, {useState, useEffect} from 'react';
import './App.css';
import {Animated} from "react-animated-css";

// API Key:
// 2456b8aa966181b0d179e6737990be82

function MovieDetails(props) {

    const [movie, setMovie] = useState(null);
    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fav, setFav] = useState(false);
    const [favIndex, setFavIndex] = useState(-1);

    // console.log(props.match)

    const findFav = (title) => {
        let favs = localStorage.getItem('watchList');
        if(favs === null || favs === '' || favs === '[]'){
          return false;
        }
        favs = JSON.parse(favs);
        const index = favs.findIndex((favMovie) => {
          return favMovie.movie.title === title;
        });

        if(index === -1){
          return false;
        }else {
          setFavIndex(index);
          return true;
        }
      }
    
    useEffect(() => {

        const fetchMovie = async () => {
            // const fetchMovie = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=2456b8aa966181b0d179e6737990be82&language=en-US`);
            const fetchMovie = await fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=2456b8aa966181b0d179e6737990be82&append_to_response=movies,credits`);
            const movie = await fetchMovie.json();
            setMovie(movie);
            
            // console.log(movie);
           
            
            let tempActors = [];
            movie.credits.cast.forEach(castObj => {
                tempActors.push(castObj.name);
            });
           
            setActors(tempActors);   
            setLoading(false);
            setFav(findFav(`${movie.title}`));
        }
        
        fetchMovie();
        

    }, [])
    
    if (loading) return (
        <div className="page-loading wrapper">
            <main className="loading">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </main>
        </div>
    );
    
    const makeActors = (actors) => {   
        return actors.slice(0,6).map((actor, i) => {
            return (
                (actor.profile_path == null ? 
                            <img className="placeholder-poster" src="/assets/placeholder.png" alt="No image available" width="92"/>
                    :
                            <img key={i} src={`https://image.tmdb.org/t/p/w154/${actor.profile_path}`} alt={actor.name} width="92"/>
                )   
                    // <img key={i} src={`https://image.tmdb.org/t/p/w92/${actor.profile_path}`} alt={actor.name}/>
            )
        });
    }


    const makeActorsName = (actorsname) => {   
        const anList =  actorsname.slice(0,6).join(', '); 
        // console.log(anList);
        return anList; 
    }

    // Create an array of "Watch Later" movies
    
    // const handleWatchLater = (e) => {   
    //     e.preventDefault();

    //     let movieLater = {
    //         id: `${movie.id}`,
    //         title: `${movie.title}`,
    //         poster_path: `${movie.poster_path}`
    //     }
      
    //     if(localStorage.getItem("watchList") === null){
    //         let watchList = [];
    //         watchList.push(movieLater);
    //         localStorage.setItem("watchList", JSON.stringify(watchList));
    //     }else{
    //        const watchList = JSON.parse(localStorage.getItem("watchList"));
    //        watchList.push(movieLater);
    //         localStorage.setItem("watchList", JSON.stringify(watchList));

    //     }
        
        
    // }

    const addToStorage = () => {
        let existEntries = JSON.parse(localStorage.getItem("watchList"));
        if(existEntries == null) existEntries = [];
        existEntries.push({movie});
        localStorage.setItem("watchList", JSON.stringify(existEntries));
        window.location.reload();
        }


    const removeToStorage = () => {
        let updateEntries = JSON.parse(localStorage.getItem("watchList"));
        if(updateEntries != null)
        updateEntries.splice(favIndex, 1); 
        localStorage.setItem("watchList", JSON.stringify(updateEntries));
        window.location.reload();
      }

  return (
   <div className="page-movie wrapper">
        <main>
            { movie !== null && 
            <div className="desktop">
                <Animated animationIn="fadeIn" animationOut="fadeOutDown" animationInDuration={2000} animationOutDuration={2500} isVisible={true}>
                    <div className="poster-box">
                        
                        {
                            movie.poster_path == null ? 
                                <div className="unavailable-poster">
                                    <img className="placeholder-poster poster-small" src="/assets/placeholder.png" alt="Placeholder poster" width="250"/>
                                    <img className="placeholder-poster poster-large" src="/assets/placeholder.png" alt="Placeholder poster"/>
                                </div>
                            :
                                <div className="available-poster">
                                <img className="poster-small" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width="250" alt={`${movie.title} movie poster`}/>
                                <img className="poster-large" src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} width="500" alt={`${movie.title} movie poster`}/> 
                                </div>

                        }
                        
                        
                    </div>
                </Animated>
                <Animated animationIn="fadeInUp" animationOut="fadeOutDown" animationInDuration={1500} animationOutDuration={1500} isVisible={true}>
                    
                    {fav === true ? <button onClick= {removeToStorage} className="purple-btn">Remove from Watch List</button> : <button onClick={addToStorage} className="purple-btn">Add to Watch List +</button>}

                    <div className="details-box">
                        <h1>{movie.title}</h1>
                        {movie.tagline == ""?
                            ""
                        :
                            <h3>"{movie.tagline}"</h3>
                        }
                        <div className="details-info">
                            <p><strong>Genres:</strong>
                            {movie.genres.length === 0  ?
                                " N/A"
                                :
                                <span>
                                    {movie.genres.map(genre => (
                                        <span key={genre.id} className="blue-tag"><strong> {genre.name}</strong></span>
                                    ))}
                                </span> 
                            }
                            </p>
                            <p><strong>Length:</strong> 
                                {movie.runtime === null ?
                                " N/A"
                                :
                                ` ${movie.runtime} mins`
                                }
                            </p>
                            <p><strong>Released on:</strong> 
                                {movie.release_date === null ?
                                    " N/A"
                                    :
                                    ` ${movie.release_date}`
                                }
                            </p>
                        </div>
                        <p className="details-overview">
                            {movie.overview === null ?
                                    " N/A"
                                    :
                                    ` ${movie.overview}`
                            }
                        </p>
                            {movie.credits.cast.length === 0 ? <span></span> : makeActors(movie.credits.cast)}
                            <br/>
                            {/* <div className="details-info">
                                    {movie.credits.cast.length === 0 ? <span></span> : <p><strong>Main Cast (from left to right):</strong><br/> {makeActorsName(movie.credits.cast)}</p>}
                                </div> */}
                        <div className="details-info">
                            {movie.credits.cast.length === 0 ? <span></span> : <p><strong>Main Cast (from left to right):</strong><br/> {makeActorsName(actors)}</p>}
                        </div>

                    </div>
                </Animated>
            </div>
            }
        </main>
    </div>
  );

  
}

export default MovieDetails;