import * as actionType from "../constants/constants";
import {Imovie, typeMovieFavorite} from '../interfaces/interfaces'

const initialState: Imovie = {
  favorite:[],
  noFavorite:[],
  saveFavorite: null,
  modal:false,
  inputValue:"",
}

export const movieFavorites = (state:Imovie=initialState, action:any):Imovie => {
  switch (action.type) {
    case actionType.FAVORITE_MOVIE:
      console.log("ACYION_MOVIE", action.payload)
      return { ...state, favorite: [...state.favorite, action.payload] };
  
    // case actionType.DELETE_FAVORITE:
    //   return {
    //     ...state,
    //     favorite: state.favorite.filter((fav:typeMovieFavorite) => fav.id !== action.payload),
    //   };

    case actionType.SAVE_MOVIE:
      
      return { ...state, saveFavorite: action.payload.mov };

    case actionType.TOGGLE_MODAL:
      return { ...state, modal: !state.modal };

    case actionType.SAVE_DATA_INPUT:
    
      return{ ...state, inputValue:action.payload}
      
    default:
      return state;
    
  }
};