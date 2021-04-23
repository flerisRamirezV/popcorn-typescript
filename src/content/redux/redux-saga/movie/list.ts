import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../../constants/constants";
import { sendHttpRequest } from "../../../helpers/requests";
import { delay } from "../../../helpers/events";
import {getMovie,getListData} from '../../../redux-toolkit/movieReducer'


function* tryMovieList():Generator<any> {
  try {
    yield call(delay, 2000);
    const data = yield call(sendHttpRequest, actionTypes.URL);
    yield put(getMovie(data));
  } catch (error) {
    console.log(error);
  }
}

function* tryMovieListRated():Generator<any> {
  try {
    yield call(delay, 2000);
    const data = yield call(sendHttpRequest, actionTypes.URL_API_RATED);

    yield put(getListData(data));
  } catch (error) {
    console.log(error);
  }
}

export function* moviesSagasWatcher():Generator<any> {
  all([
    yield takeLatest(actionTypes.GET_MOVIES, tryMovieList),
    yield takeLatest(actionTypes.GET_MOVIES_RATED, tryMovieListRated),
  ]);
}