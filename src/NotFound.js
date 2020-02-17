// React Imports
import React from 'react';
import {Link} from 'react-router-dom';

// Library Imports
import {Animated} from "react-animated-css";

function NotFound() {
  return (
    <div className="page-404 wrapper">
            <Animated animationIn="fadeInUp" animationOut="fadeOutDown" animationInDuration={1500} animationOutDuration={2500} isVisible={true}>
              <h1 className="error">404</h1>
            </Animated>
            <Animated animationIn="fadeIn" animationOut="fadeOutDown" animationInDuration={2000} animationOutDuration={2500} isVisible={true}>
              <div className="poster-box">
                <h1>Oops... Page Not Found!</h1>
                <p>
                  Check that you typed the address correctly. Go back to your previous page or try using the 
                  <Link className="nav-link" to="/" exact>
                    &nbsp;movie search &#128269; &nbsp; 
                  </Link> 
                  to look for something more specific.
                </p>
              </div>
            </Animated>
    </div>
  );
}

export default NotFound;