import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../../constants/constants";
import {
  sendHttpRequest,
  fixedEncodeURIComponent,
} from "../../../helpers/requests";
import { saveDataFilter } from '../../actions/filterData'

function* searchMovies(name: any): Generator<any> {

  try {
    let query = "";
    if (name.name === "") {
      query = "?";
    } else {
      query = name.name;
    }
    let url = `${actionTypes.URL_SEARCH_MOVIE}=${fixedEncodeURIComponent(
      query
    )}&api_key=${actionTypes.API_KEY}`;
    const data = yield call(sendHttpRequest, url);
   
      yield put(saveDataFilter(name, data));
    
  } catch (error) {
    console.log("ERROR_BUSCAR", error);
  }
}


export function* searchMoviesWatcher():Generator<any> {
  yield takeLatest(actionTypes.FILTER_MOVIE, searchMovies);
}

