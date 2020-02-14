import React from 'react';
import {Link} from 'react-router-dom';
import {Animated} from "react-animated-css";

function About() {
  return (
    <div>
    <div className="page-about wrapper">
           <div className="poster-box">
              <div className="poster-small">
               <img src="/assets/maytheforce.svg" width="320" alt="may the force"/>
              </div>
              <div className="poster-large">
                <img src="/assets/maytheforce.svg" width="600" alt="may the force"/>
              </div>
           </div>
           <div className="details-box">
              <Animated animationIn="fadeInUp" animationOut="fadeOutDown" animationInDuration={1500} animationOutDuration={2500} isVisible={true}>
                <header>
                  <h3>Don't know what to watch next?</h3> 
                  <h1>You are in the right place.</h1>
                </header>
              </Animated>
              <Animated animationIn="fadeIn" animationOut="fadeOutDown" animationInDuration={2500} animationOutDuration={2500} isVisible={true}>
                <p><strong>moviehub.</strong> is an up-to-date movie database app that offers you multiple ways to find your next movie: </p>
                <Link className="nav-link" to="/">
                  <p>&#10004; Search by keywords and see what movies pop up</p>
                </Link>
                <Link className="nav-link" to="/trending">
                  <p>&#10004; See what's hot recently</p>
                </Link>
                <Link className="nav-link" to="/trending">
                  <p>&#10004; See what's considered "the best ever" in national and international surveys of critics and the public</p>
                </Link>
                <p>Found something you like? Add them to your 
                  <Link className="watch-list-link" to="/watchlist"> Watch List </Link>
                  and remove any item anytime.</p>
              </Animated>
            </div>
            
    </div>
    <div className="sub-footer">
      <p><strong>disclaimer.</strong> This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
      <img src="/assets/moviedb-logo.svg" alt="Movie DB Logo" width="150"/>
    </div>
    </div>
  );
}

export default About;