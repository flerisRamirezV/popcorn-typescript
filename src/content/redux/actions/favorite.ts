import * as actionTypes from "../constants/constants";
import {typeMovieFavorite, } from '../interfaces/interfaces'
export const addFavorite = (data:typeMovieFavorite) => {
  return {
    type: actionTypes.ADD_MOVIE_FAVORITE,
    data,
  };
};

export const addMovieFavorite = (data: any) => {
  return {
    type: actionTypes.FAVORITE_MOVIE,
    payload: data,
  };
};

export const arrayFavorite = (array: any, favorite:any):boolean => {
  for (const iterator of favorite) {
    if (iterator.id === array.data.id) {
      return true;
    }
  }
  return false;
};

export const deleteMovie = (id:any)  => {
  return{
    type: actionTypes.DELETE_FAVORITE,
    payload: id,
  };
};

export const deleteMovieFavorite = (id:any) => {
  return {
    type: actionTypes.DELETE_MOVIE,
    id,
  };
};

export const saveMovieFavorite = (movie: any) => {
 return {
    type: actionTypes.SAVE_MOVIE,
    payload: movie,
  };
};

export const movieFavorite = (mov:any) => {
  return {
    type: actionTypes.SAVE_FAVORITE_MOVIE,
    mov,
  };
};
