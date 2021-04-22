import { combineReducers } from 'redux';
import {movieReducer} from './MovieReducer';
import {movieFavorites} from './MovieFavoriteReducer'


export default combineReducers({
  movieReducer,
  movieFavorites,
})