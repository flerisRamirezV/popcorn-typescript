import * as actionType from "../constants/constants";

interface IinitialState {
  movies: Array<any>;
  moviesRated: Array<any>;
  filterMovie: Array<any>;
  filterByMovie: string;
  state: string;
}
const initialState: IinitialState = {
  movies: [],
  moviesRated: [],
  filterMovie: [],
  filterByMovie: "",
  state: "",
};

export const movieReducer = (
  state: IinitialState = initialState,
  action: any
): IinitialState => {
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
