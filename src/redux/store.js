import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import carsReducer from "./cars/carsSlice";
import filtersReducer from "./filters/filtersSlice";
import favoritesReducer from "./favorites/favoritesSlice";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

const persistedFavoritesReducer = persistReducer(favoritesPersistConfig, favoritesReducer);

  export const store = configureStore({
    reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favorites: persistedFavoritesReducer, 
  },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  export const persistor = persistStore(store);