import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class MovieRow extends React.Component {
    
    render(){
        return(
            <Link to={`/movies/${this.props.movie.id}`} className="linkEffects">
                <div key={this.props.movie.id} className="movieRow popular-movie">
                    <div className="popular-movie-title">
                        <h2>
                            <Link to={`/movies/${this.props.movie.id}`} className="linkEffects">
                            {this.props.movie.title}
                            </Link>
                        </h2>
                    </div>
                    <div className="card-adjustment">
                       <div className="flip-card-container">
                             <div className="flip-card">
                                <div className="flip-card-front popular-movie-poster">
                                    <Link to={`/movies/${this.props.movie.id}`} className="linkEffects">
                                        {
                                            this.props.movie.poster_path == null ? 
                                                <div className="unavailable-poster">
                                                    <img className="placeholder-poster" src="/assets/placeholder.png" alt="placeholder" width="250"/>
                                                </div>
                                            :
                                                <div className="available-poster">
                                                    <img src={this.props.movie.poster_src} width="250" alt={`${this.props.movie.title} movie poster`}/>
                                                </div>

                                        }
                                    </Link>
                                </div>
                                <div className="flip-card-back popular-movie-info">
                                    <Link to={`/movies/${this.props.movie.id}`} className="linkEffects">
                                        <p>
                                            <span>{this.props.movie.title}</span>
                                            <p>Rating: {this.props.movie.vote_average}/10</p>
                                            <p>{(this.props.movie.overview).substr(0, 150)}...</p>
                                            
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="movie-gap"></span>
               </div>
            </Link> 
         
        )
    }
}

export default MovieRow;