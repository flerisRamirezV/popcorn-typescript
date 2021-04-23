import { put, takeLatest, all, select,call } from "redux-saga/effects";

import * as actionTypes from "../../constants/constants";
import {
  saveMovieFavorite,
  deleteMovie,
  // addMovieFavorite,
  arrayFavorite,
} from "../../actions/favorite";
import { addMovieFavorite } from '../../../redux-toolkit/movieFavorite';

function* saveFavoriteMovie(data:any):Generator<any> {
  try {
    yield put(saveMovieFavorite(data));
  } catch (error) {
    console.log(error);
  }
}
function* deleteMovieFavorite(data:any):Generator<any> {
  try {
    yield put(deleteMovie(data.id));
  } catch (error) {
    console.log(error);
  }
}

function* addMoviesFavorite(movie:any):Generator<any> {
  try {
    const favorite = (movies:any) => movies.movieFavorites.favorite;
    const items = yield select(favorite);
    const res = yield call(arrayFavorite,movie, items);
    if (!res) {
      yield put(addMovieFavorite(movie.data));
    }
  } catch (error) {
    console.log("ERROR", error)
  }
}

export function* movieFavoriteWatcher():Generator<any> {
  yield all([
    yield takeLatest(actionTypes.SAVE_FAVORITE_MOVIE, saveFavoriteMovie),
     yield takeLatest(actionTypes.DELETE_MOVIE, deleteMovieFavorite),
    yield takeLatest(actionTypes.ADD_MOVIE_FAVORITE, addMoviesFavorite),
  ]);
}