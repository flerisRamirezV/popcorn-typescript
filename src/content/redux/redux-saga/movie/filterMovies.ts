import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../../constants/constants";
import {
  sendHttpRequest,
  fixedEncodeURIComponent,
} from "../../../helpers/requests";

import { filterData } from '../../../redux-toolkit/movieReducer';
import { AppProps, ISearchData,ActionSearch } from '../../interfaces/interfaces'

function* searchMovies(name: ISearchData): Generator<any> {
  try {
    let query = "";
    if (name.data === "") {
      query = "?";
    } else {
      query = name.data;
     }
  
    let url = `${actionTypes.URL_SEARCH_MOVIE}=${fixedEncodeURIComponent(
      query
    )}&api_key=${actionTypes.API_KEY}`;
    const data = yield call(sendHttpRequest, url);
     
     yield put(filterData({ data: data, name: name.data }));
    
  } catch (error) {
    console.log("ERROR_BUSCAR", error);
  }
}


export function* searchMoviesWatcher():Generator<any> {
  yield takeLatest<ActionSearch>(actionTypes.FILTER_MOVIE, searchMovies);
}

