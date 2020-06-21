import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

function Movie({title, year, summary, poster, genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
           <h3 className="movi__title">{title}</h3>
           <h5 className="movi__year">{year}</h5>
           <ul className="movie__genres">
               {genres.map((genre, index) =>{
                   return <li key={index} className="Movie__genre">{genre}</li>
               }

               )
               }
           </ul>
           <p className="movi__summary">{summary.slice(0,180)}...</p>
             </div>
        </div>
   
    );

}

Movie.propTypes = {
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}


export default Movie;