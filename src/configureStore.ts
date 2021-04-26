import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootSaga from "./content/redux/redux-saga/rootSaga";
import createSagaMiddleware from "redux-saga";
import movieSlice from "./content/redux-toolkit/movieReducer";
import movieFavoriteSlice from "./content/redux-toolkit/movieFavorite";

import {
  loadState,
  saveState,
} from "./content/redux-toolkit/actions/localStoraje";
import throttle from "lodash/throttle";
const sagaMiddleware = createSagaMiddleware();

 const persistedState = loadState();



const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    serializableCheck: false,
    persistedState,
  }),
  sagaMiddleware,
];

export const store = configureStore({
  reducer: {
    movieReducer: movieSlice,
    movieFavorites: movieFavoriteSlice,
  },
  middleware,
});



store.subscribe(
  throttle(() => saveState(store.getState().movieFavorites.favorite ), 1000)
);

export type RootState = ReturnType<typeof store.getState>;
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
