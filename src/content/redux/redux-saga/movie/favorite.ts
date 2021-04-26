import { put, takeLatest, all, select,call } from "redux-saga/effects";

import * as actionTypes from "../../constants/constants";
import {
  saveMovieFavorite,
  // deleteMovie,
  // addMovieFavorite,
  arrayFavorite,
} from "../../actions/favorite";
import { addMovieFavorite, deleteFavorite } from '../../../redux-toolkit/movieFavorite';
import {typeMovieFavorite,typeMovieReducer,AppProps,TaskAction} from '../../interfaces/interfaces'
function* saveFavoriteMovie(data: any): Generator<any> {
 
  try {
    yield put(saveMovieFavorite(data));
  } catch (error) {
    console.log(error);
  }
}
function* deleteMovieFavorite(data:any): Generator<any> {
  console.log("DELETE_REDUCE", data)
  try {
    yield put(deleteFavorite(data.id));
  } catch (error) {
    console.log(error);
  }
}

function* addMoviesFavorite(movie:typeMovieFavorite): Generator<any> {
  console.log("DATA_SAVE",movie)
  try {
    const favorite = (movies:typeMovieReducer) => movies.movieFavorites.favorite;
    const items = yield select(favorite);
    const res = yield call(arrayFavorite,movie, items);
    if (!res) {
      yield put(addMovieFavorite(movie));
    }
  } catch (error) {
    console.log("ERROR", error)
  }
}

export function* movieFavoriteWatcher():Generator<any> {
  yield all([
    yield takeLatest(actionTypes.SAVE_FAVORITE_MOVIE, saveFavoriteMovie),
     yield takeLatest(actionTypes.DELETE_MOVIE, deleteMovieFavorite),
    yield takeLatest<TaskAction>(actionTypes.ADD_MOVIE_FAVORITE, addMoviesFavorite),
  ]);
}