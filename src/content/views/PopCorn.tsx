import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovie } from "../redux/actions/getMovies";
import InputMovie from "../components/InputMovie";
import Movies from "../components/movies";
import { toogleModal } from "../helpers/events";
import { movieFavorite } from "../redux/actions/favorite";
import TitleMovies from "../components/TitleMovies";
import { typeMovieReducer } from '../redux/interfaces/interfaces';

export default function PopCorn() {
  const dispatch = useDispatch();
  const modal = useSelector((state: typeMovieReducer) => state.movieFavorites.modal);


  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);


  const movieList = useSelector((state: typeMovieReducer) => {
    return state.movieReducer.filterMovie;
  });

  const handleDetail = (mov: any) => {
    // dispatch(toogleModal(!modal:boolean));
    dispatch(movieFavorite(mov));
  };

  return (
    <main className="container">
      <section className="container__input-movie">
        <InputMovie />
      </section>
      <TitleMovies title="Popular Movies"/>
      <section className="container__overflow">
        {movieList.length > 0 &&
          movieList.map((movie: any): any => (
            <Movies
              key={movie.id}
              {...movie}
              handleDetail={() => handleDetail(movie)}
            />
          ))}
      </section>
    </main>
  );
}
