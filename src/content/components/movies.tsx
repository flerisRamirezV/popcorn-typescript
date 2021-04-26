import React from "react";
import {typeMovieFavorite } from '../redux/interfaces/interfaces';
export default function Movies({
  backdrop_path,
  handleDetail,
  poster_path,
}: typeMovieFavorite) {
  return (
    <div className="container__image">
      <img
        src={
          backdrop_path == null
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `https://image.tmdb.org/t/p/w500${backdrop_path}`
        }
        className="image"
        onClick={handleDetail}
        alt="movie"
      />
    </div>
  );
}
