import * as actionTypes from "../constants/constants";

export const addFavorite = (data: any) => {
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

export const arrayFavorite = (array: any, favorite: Array<any>): boolean => {
  for (const iterator of favorite) {
    if (iterator.id === array.data.id) {
      return true;
    }
  }
  return false;
};

export const deleteMovie = (id: number) => (dispatch: any) => {
  dispatch({
    type: actionTypes.DELETE_FAVORITE,
    payload: id,
  });
};

export const deleteMovieFavorite = (id: number) => {
  return {
    type: actionTypes.DELETE_MOVIE,
    id,
  };
};

export const saveMovieFavorite = (movie: any) => (dispatch: any) => {
  dispatch({
    type: actionTypes.SAVE_MOVIE,
    payload: movie,
  });
};

export const movieFavorite = (mov: object) => {
  return {
    type: actionTypes.SAVE_FAVORITE_MOVIE,
    mov,
  };
};
