import { createSlice } from "@reduxjs/toolkit";
import { Imovie } from "../redux/interfaces/interfaces";

const initialState: Imovie = {
  favorite: [],
  noFavorite: [],
  saveFavorite: null,
  modal: false,
  inputValue: "",
};

export const movieFavoriteSlice = createSlice({
  name: "movie",
  initialState,
  
  reducers: {
   
    getSaveDataInput: (state, action) => {
      state.inputValue = action.payload;
    },
    saveMovieFavorite: (state, action) => {
      state.saveFavorite = action.payload;
    },
    toogleModal: (state) => {
      state.modal = !state.modal;
    },
    addMovieFavorite: (state, action) => {
     
      state.favorite = [...state.favorite, action.payload];
    },
    deleteFavorite: (state, action) => {
      state.favorite= state.favorite.filter(item=>item.id!== action.payload)
    },
    satte:(state, actions)=> {
      console.log("ACTIONS", actions)
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  getSaveDataInput,
  saveMovieFavorite,
  toogleModal,
  addMovieFavorite,
  deleteFavorite,
} = movieFavoriteSlice.actions;

export default movieFavoriteSlice.reducer;
