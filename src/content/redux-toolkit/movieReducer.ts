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
    getListData: (state, action) => {
      state.moviesRated= action.payload.results;
    },
    filterData: (state, action) => {
      let list = state.movies;
      let listFiltered:Array<any>;
      if (action.payload.name !== "") {
        listFiltered = [
          ...action.payload.data.results.filter((movie:any) =>
          movie.title
            .toLowerCase()
            .includes(action.payload.name.toLowerCase())
        ),        
        ]
      } else {
        listFiltered = [...list];
      }
      state.filterMovie = listFiltered;
      state.movies=list
    },
   
  }
});

// Action creators are generated for each case reducer function
export const { getMovie,getListData, filterData } = movieSlice.actions;

export default movieSlice.reducer;