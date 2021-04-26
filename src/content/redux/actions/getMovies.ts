import * as actionTypes from "../constants/constants";
import {typeMovieFavorite,Imovie} from '../interfaces/interfaces'

export const getMovie = () => {
  return {
    type: actionTypes.GET_MOVIES,
  };
};

export const getMovieRated = (payload:typeMovieFavorite) => {
  return {
    type: actionTypes.GET_MOVIES_RATED,
    payload,
  };
};

export const getListData = (action: string, data:Imovie) => {
  return {
    type: action,
    payload: data.results,
  };
};