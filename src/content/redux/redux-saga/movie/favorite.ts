import { put, takeLatest, all, select, call } from "redux-saga/effects";

import * as actionTypes from "../../constants/constants";
import {
  saveMovieFavorite,
  arrayFavorite,
} from "../../actions/favorite";
import {
  addMovieFavorite,
  deleteFavorite,
} from "../../../redux-toolkit/movieFavorite";
import {
  typeMovieFavorite,
  typeMovieReducer,
  TaskActionFavorite,
} from "../../interfaces/interfaces";

function* saveFavoriteMovie(data: typeMovieFavorite): Generator<any> {
  try {
    yield put(saveMovieFavorite(data));
  } catch (error) {
    console.log(error);
  }
}
function* deleteMovieFavorite(data: typeMovieFavorite): Generator<any> {
  try {
    yield put(deleteFavorite(data.id));
  } catch (error) {
    console.log(error);
  }
}

function* addMoviesFavorite(movie: typeMovieFavorite): Generator<any> {
  try {
    const favorite = (movies: typeMovieReducer) =>
      movies.movieFavorites.favorite;
    const items = yield select(favorite);
    const res = yield call(arrayFavorite, movie, items);
    if (!res) {
      yield put(addMovieFavorite(movie));
    }
  } catch (error) {
    console.log("ERROR", error);
  }
}

export function* movieFavoriteWatcher(): Generator<any> {
  yield all([
    yield takeLatest<TaskActionFavorite>(
      actionTypes.SAVE_FAVORITE_MOVIE,
      saveFavoriteMovie
    ),
    yield takeLatest<TaskActionFavorite>(actionTypes.DELETE_MOVIE, deleteMovieFavorite),
    yield takeLatest<TaskActionFavorite>(
      actionTypes.ADD_MOVIE_FAVORITE,
      addMoviesFavorite
    ),
  ]);
}
