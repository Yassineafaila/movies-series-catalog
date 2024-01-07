import React from 'react'
import { Link } from 'react-router-dom'
import { IMG_URL } from '../constants'
import { SIZE_IMG } from '../constants'
import "./MovieDetails.scss"
function MovieDetails({ movie }) {
  return (
    <Link className="hero_container" to={`/movie/${movie.id}`}>
      <div className="image_container">
        <img
          className="hero_image"
          src={`${IMG_URL}/${SIZE_IMG.backdrop.larger}${movie.backdrop_path}`}
        />
      </div>
      <div className="hero_content">
        <h2>{movie.name ? movie.name : movie.title}</h2>
        <p>Type: {movie.media_type}</p>
        <p>
          {movie.first_air_date ? movie.first_air_date : movie.release_date}
        </p>
      </div>
    </Link>
  );
}

export default MovieDetails