import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootSaga from "./content/redux/redux-saga/rootSaga";
import createSagaMiddleware from "redux-saga";
import movieSlice from "./content/redux-toolkit/movieReducer";
import movieFavoriteSlice from './content/redux-toolkit/movieFavorite';
const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
export const store = configureStore({
  reducer: {
    movieReducer: movieSlice,
    movieFavorites:movieFavoriteSlice,
  },
  middleware,
});


export type RootState = ReturnType<typeof store.getState>;
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
