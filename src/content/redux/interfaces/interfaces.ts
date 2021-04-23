import * as constant from "../constants/constants";
import RootReducer from "../reducers/index";

export type typeMovieReducer = ReturnType<typeof RootReducer>;
export type FormElemnt = React.ChangeEvent<HTMLInputElement>;

export interface Imovie {
  favorite: Array<any>;
  noFavorite: Array<any>;
  saveFavorite: null;
  modal: boolean;
  inputValue: string;
}

export interface IgetMovie {
  movies: Array<any>;
  moviesRated: Array<any>;
  filterMovie: Array<any>;
  filterByMovie: string;
  state: string;
}

export type AppProps = {
  backdrop_path: string;
  handleDetail?: any;
  poster_path: string;
};

export type typeMovieFavorite = {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: Array<number>;
  id?: number;
  original_language: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

export interface IListMovie {
  type: typeof constant.LIST_MOVIE;
}

export interface IGetmovies {
  type: typeof constant.GET_MOVIES;
}

export interface IListMovieRatied {
  type: typeof constant.LIST_MOVIE_RAITED;
}

export interface ISaveData {
  type: typeof constant.SAVE_DATA_FILTER_MOVIE;
}

export type MoviesTypes =
  | IListMovie
  | IGetmovies
  | IListMovieRatied
  | ISaveData;
