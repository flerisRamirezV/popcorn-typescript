import React from "react";
import "../styles/movie.css";
import { useDispatch,useSelector } from "react-redux";
import { typeMovieReducer,FormElemnt } from '../redux/interfaces/interfaces';
import * as constant from '../redux/constants/constants';
import { getSaveDataInput } from '../redux-toolkit/movieFavorite';

export default function InputMovie() {
  const inputValue = useSelector((state:typeMovieReducer) => state.movieFavorites.inputValue)
  const dispatch = useDispatch();

  const filterByName = (e:FormElemnt):any => {
     dispatch(getSaveDataInput(e.target.value))
   
    setTimeout(()=>{
      
     dispatch({ type:constant.FILTER_MOVIE, data:e.target.value});
    },1000)
     
  };
  return (
    <div className="container__input">
      <input
        className="form__input"
          value={inputValue}
          onChange={filterByName}
      />
      <i className="fas fa-search form__icon"></i>
    </div>
  );
}
