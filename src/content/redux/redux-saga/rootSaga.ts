import { all } from 'redux-saga/effects'
import {moviesSagasWatcher} from './movie/list';
import {searchMoviesWatcher} from './movie/filterMovies';
import {movieFavoriteWatcher} from './movie/favorite';

export default function* rootSaga(){
    yield all([
        moviesSagasWatcher(),
        searchMoviesWatcher(),
        movieFavoriteWatcher(),  
    ])
}
