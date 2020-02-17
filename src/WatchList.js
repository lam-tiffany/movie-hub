// React Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Library Imports
import {Animated} from "react-animated-css";

function WatchList() {

  let watchList = JSON.parse(localStorage.getItem("watchList"));

  const clearStorage = () => {
    if(window.confirm('All your saved movie(s) will be removed. Are you sure?')){
    localStorage.clear();
    window.location.reload();
    }
  }

  return (
    <div className="page-watch-list wrapper">
           
            {(watchList === '[]' || watchList === '' || watchList === null ) ?
                <div>
                   <Animated animationIn="fadeInUp" animationOut="fadeOutDown" animationInDuration={1500} animationOutDuration={2500} isVisible={true}>
                    <h1 className="error">Oops! </h1>
                    </Animated>
                  <h1>Looks like your list is empty. </h1>
                  <p>Add movies to your Watch List by clicking the '&#128140;' button on any movie page.</p>
                </div>
              :
              <span>
                 <Animated animationIn="fadeInUp" animationOut="fadeOutDown" animationInDuration={1500} animationOutDuration={2500} isVisible={true}>
                    <h1>My Watch List</h1>
                </Animated>
                <Animated animationIn="fadeInUp" animationOut="fadeOutDown" animationInDuration={1500} animationOutDuration={2500} isVisible={true}>
                  <p>
                    <button onClick={clearStorage} className="purple-btn">Clear All &#128075;</button>
                  </p>
                    {watchList.map(laterMovie => (
                      <div className="laterMovie">
                        <img src={`https://image.tmdb.org/t/p/w154${laterMovie.movie.poster_path}`} alt={laterMovie.movie.title} width="92"/>
                        <div className="laterTitle">
                          <p key={laterMovie.movie.id}>{laterMovie.movie.title}</p>
                        </div>
                        <Link to={`/movies/${laterMovie.movie.id}`}>
                          <button className="list-btn">View</button>
                        </Link>
                      </div>
                    ))}
                 </Animated>
              </span> 
            }
    </div>
  );
}

export default WatchList;