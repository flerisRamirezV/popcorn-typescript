import * as actionTypes from "../constants/constants";


export const saveDataInput = (data:any) => (dispatch:any) => {
  dispatch({
    type: actionTypes.SAVE_DATA_INPUT,
    payload: data,
  });
};

export const filterMovieData = (name:string) => {
  return {
    type: actionTypes.FILTER_MOVIE,
    name,
  };
};

export const saveDataFilter=(name:string, data:any)=>{
  return{
    type:actionTypes.SAVE_DATA_FILTER_MOVIE,
    payload: { data: data.results, name: name }
  }
}