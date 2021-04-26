import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { typeMovieReducer,typeMovieFavorite } from "../redux/interfaces/interfaces";
import "../styles/favorite.css";
import Favorite from "./favorite";

export default function MyFavoriteMovie(props: any) {
 
  const favorite = useSelector(
    (state: typeMovieReducer) => state.movieFavorites.favorite
  );

  //  useEffect(() => {
  //   localStorage.setItem("favorites", JSON.stringify(favorite));
    
  // }, [favorite])
  const dispatch = useDispatch();
  return (
    <div className="favorite">
      <h2 className="favorite__title">My favorites</ h2>
      <hr />
      {favorite.length === 0 && (
        <p className="favorite__p">You haven´t favorired any movies yet</p>
      )}
      <section className="container__movie">
        {favorite.map((fav:typeMovieFavorite):JSX.Element => (
          <Favorite
            key={fav.id}
            {...fav}
            handleDelete={() => props.handleDelete(fav.id)}
          />
        ))}
      </section>
    </div>
  );
}
