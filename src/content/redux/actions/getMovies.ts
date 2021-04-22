import * as actionTypes from "../constants/constants";


export const getMovie = () => {
  return {
    type: actionTypes.GET_MOVIES,
  };
};

export const getMovieRated = (payload:any) => {
  return {
    type: actionTypes.GET_MOVIES_RATED,
    payload,
  };
};

export const getListData = (action:string,data:any) => {
  return {
    type: action,
    payload: data.results,
  };
};