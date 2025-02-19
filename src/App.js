// React Imports
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Style Imports
import './App.css';

// Component Imports
import Nav from './Nav';
import SearchPage from './SearchPage';
import Trending from './Trending';
import TopRated from './TopRated';
import About from './About';
import WatchList from './WatchList';
import Footer from './Footer';
import MovieDetails from './MovieDetails';
import NotFound from './NotFound';


function App() {
  return (
    <Router basename={'/moviehub'}>
      <div className="App">
        <Nav />
            <Switch>
              <Route path="/" exact component={SearchPage}/>
              <Route path="/trending" component={Trending}/>
              <Route path="/toprated" component={TopRated}/>
              <Route path="/about" component={About}/>
              <Route path="/watchlist" component={WatchList}/>
              <Route path="/movies/:id" component={MovieDetails}/>
              <Route path="/*" component={NotFound}/>
            </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
