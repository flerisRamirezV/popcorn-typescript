import React from "react";
import "../styles/modal.css";
import { useSelector } from "react-redux";
import { typeMovieReducer } from "../redux/interfaces/interfaces";

type AppProps = {
  handleDetail?: any;
};

export default function Detail({ handleDetail }: AppProps) {
  const detailMovie = useSelector(
    (state: any) => state.movieFavorites.saveFavorite
  );
  console.log("DETAIL", detailMovie)
  return (
    <div className="content_modal">
      <div className="modal__movie">
        <div className="card card__content">
          <div className="d-flex justify-content-end">
            <button className="button" onClick={handleDetail}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="card-body">
            <img
              className="img__modal"
              src={
                detailMovie.backdrop_path == null
                  ? `https://image.tmdb.org/t/p/w500${detailMovie.poster_path}`
                  : `https://image.tmdb.org/t/p/w500/${detailMovie.backdrop_path}`
              }
              alt="movie"
            />
            <p>
              <b>Titulo:</b> <span>{detailMovie.original_title}</span>
            </p>
            <p>
              <b>Lenguaje:</b> {detailMovie.original_language.toUpperCase()}
            </p>
            <p>
              <b>Información:</b>
              {detailMovie.overview.slice(0, 100)}
            </p>
          </div>
          <div className="d-flex justify-content-end">
            <button
              className="button"
              // onClick={() => props.addMovieFavorite(detailMovie)}
            >
              <i className="fas fa-heart favorite__icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
