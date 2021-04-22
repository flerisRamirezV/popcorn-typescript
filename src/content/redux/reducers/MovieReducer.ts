import * as actionType from "../constants/constants";
import {IgetMovie, MoviesTypes} from '../interfaces/interfaces'

const initialState: IgetMovie = {
  movies: [],
  moviesRated: [],
  filterMovie: [],
  filterByMovie: "",
  state: "",
};

export const movieReducer = ( state: IgetMovie = initialState, action:any): IgetMovie => {
  switch (action.type) {
    case actionType.LIST_MOVIE: {
      return {
        ...state,
        movies: action.payload,
        filterMovie: action.payload,
        state: "RESULT",
      };
    }
    case actionType.GET_MOVIES: {
      return { ...state, state: "PENDING" };
    }
    case actionType.LIST_MOVIE_RAITED:
      return { ...state, moviesRated: action.payload };

    case actionType.SAVE_DATA_FILTER_MOVIE: {
      let list = state.movies;
      let listFiltered;
      if (action.payload.name.name !== "") {
        listFiltered = [
          ...action.payload.data.filter((movie: any) =>
            movie.title
              .toLowerCase()
              .includes(action.payload.name.name.toLowerCase())
          ),
        ];
      } else {
        listFiltered = [...list];
      }
      return { ...state, filterMovie: listFiltered, movies: list };
    }

    default:
      return state;
  }
};
