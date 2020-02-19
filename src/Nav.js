// React Imports
import React from 'react';
import {Link} from 'react-router-dom';

// Image Imports
import magnifier from './images/magnifier.svg';
import popular from './images/popular.svg';
import thumb from './images/thumb.svg';
import about from './images/about.svg';
import heart from './images/heart.svg';

function Nav() {
  return (
    <div>
      <nav>
          <Link className="nav-link" to="/">
            <h3>moviehub.</h3>
          </Link>
          <ul className="nav-links">
            <Link className="nav-link" to="/">
              <li className="nav-link-text">Search</li>
              <li><img src={magnifier} alt="Search"/></li>
            </Link>
            <Link className="nav-link" to="/trending">
              <li className="nav-link-text">Trending</li>
              <li><img src={popular} alt="Trending"/></li>
            </Link>
            <Link className="nav-link" to="/toprated">
              <li className="nav-link-text">Top Rated</li>
              <li><img src={thumb} alt="Top Rated" width="28"/></li>
            </Link>
            <Link className="nav-link" to="/about">
              <li className="nav-link-text">About</li>
              <li><img src={about} alt="About"/></li>
            </Link>
            <Link className="nav-link" to="/watchlist">
              <li className="nav-link-text">My Watch List</li>
              <li><img src={heart} alt="Favourites"/></li>
            </Link>
          </ul>
      </nav>
    </div>
  );
}

export default Nav;