import React from "react";
import "../styles/movie.css";
import { useDispatch,useSelector } from "react-redux";
import { saveDataInput, filterMovieData } from '../redux/actions/filterData';
import { typeMovieReducer,FormElemnt } from '../redux/interfaces/interfaces';


export default function InputMovie() {
  const inputValue = useSelector((state:typeMovieReducer) => state.movieFavorites.inputValue)
  const dispatch = useDispatch();

  const filterByName = (e:FormElemnt):any => {
    dispatch(saveDataInput(e.target.value))
   
    setTimeout(()=>{
      
      dispatch(filterMovieData(e.target.value));
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
