import * as actionType from "../constants/constants";

interface IinitialState {
  favorite: Array<any>,
  noFavorite:Array<any>,
  saveFavorite: null,
  modal:boolean,
  inputValue:string,
};

const initialState: IinitialState = {
  favorite:[],
  noFavorite:[],
  saveFavorite: null,
  modal:false,
  inputValue:"",
}

export const movieFavorites = (state:IinitialState=initialState, action:any):IinitialState => {
  switch (action.type) {
    case actionType.FAVORITE_MOVIE:
      console.log("ACYION_MOVIE", action.payload)
      return { ...state, favorite: [...state.favorite, action.payload] };
  
    case actionType.DELETE_FAVORITE:
      return {
        ...state,
        favorite: state.favorite.filter((fav) => fav.id !== action.payload),
      };

    case actionType.SAVE_MOVIE:
      
      return { ...state, saveFavorite: action.payload.mov };

    case actionType.TOGGLE_MODAL:
      return { ...state, modal: !state.modal };

    case actionType.SAVE_DATA_INPUT:
      console.log("INPUT_VALUE", action.payload)
      return{ ...state, inputValue:action.payload}
      
    default:
      return state;
    
  }
};