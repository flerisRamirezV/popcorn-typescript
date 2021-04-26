import * as constant from "../constants/constants";
import RootReducer from "../reducers/index";
 
export type typeMovieReducer = ReturnType<typeof RootReducer>;
export type FormElemnt = React.ChangeEvent<HTMLInputElement>;

export interface Imovie {
  favorite: Array<any> | any;
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
  id?: number;
  backdrop_path: string;
  handleDetail?: any;
  adult?: boolean;
  genre_ids?: Array<number>;
  original_language: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  handleDelete?: any;
};

export type typeMovieFavorite = {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: Array<number>;
  id?: number | null;
  original_language: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  handleDelete?: any;
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

export interface IdeleteData {
  type: typeof constant.DELETE_MOVIE;
}

export interface IsaveFavorite {
  type: typeof constant.ADD_MOVIE_FAVORITE;
}

export interface IaddFavorite {
  type: typeof constant.ADD_MOVIE_FAVORITE;
}

export interface IfilterData{
  type: typeof constant.FAVORITE_MOVIE
}

export type MoviesTypes =
  | IListMovie
  | IGetmovies
  | IListMovieRatied
  | ISaveData
  | IdeleteData
  | IsaveFavorite
  | IaddFavorite
  |IfilterData
  ;

export interface TaskActionFavorite
  extends typeMovieReducer,
    typeMovieFavorite {
  type: MoviesTypes;
  data: typeMovieFavorite;
  id?: number;
}

export interface ISearchData {
  name?: string|any;
  data?: { name: string } | any;
}


export interface ActionSearch extends typeMovieReducer, ISearchData{
  type:MoviesTypes
}