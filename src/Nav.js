import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  let watchList = JSON.parse(localStorage.getItem("watchList"));
  console.log(watchList);

  

  return (
    <nav>
        <Link className="nav-link" to="/">
          <h3>moviehub.</h3>
        </Link>
        <ul className="nav-links">
          <Link className="nav-link" to="/">
            <li className="nav-link-text">Search</li>
            <li><img src="/assets/magnifier.svg" alt="Search"/></li>
          </Link>
          <Link className="nav-link" to="/trending">
            <li className="nav-link-text">Trending</li>
            <li><img src="/assets/popular.svg" alt="Popular"/></li>
          </Link>
          <Link className="nav-link" to="/toprated">
            <li className="nav-link-text">Top Rated</li>
            <li><img src="/assets/thumb.svg" alt="Top Rated" width="28"/></li>
          </Link>
          <Link className="nav-link" to="/about">
            <li className="nav-link-text">About</li>
            <li><img src="/assets/about.svg" alt="About"/></li>
          </Link>
          <Link className="nav-link" to="/watchlist">
            <li className="nav-link-text">My Watch List
                  {/* {watchList ?
                    `My Watch List (${watchList.length})` 
                    :
                    "My Watch List (0)"
                  } */}
              </li>
            <li><img src="/assets/heart.svg" alt="Favourites"/></li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;