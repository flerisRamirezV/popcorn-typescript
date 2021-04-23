import { createSlice } from "@reduxjs/toolkit";
import { IgetMovie } from '../redux/interfaces/interfaces';

const initialState: IgetMovie = {
  movies: [],
  moviesRated: [],
  filterMovie: [],
  filterByMovie: "",
  state: "",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getMovie: (state, action) => {
      state.movies = action.payload.results;
      state.filterMovie = action.payload.results;
      state.state = "RESULT";
    },
 
  }
});

// Action creators are generated for each case reducer function
export const { getMovie} = movieSlice.actions;

export default movieSlice.reducer;