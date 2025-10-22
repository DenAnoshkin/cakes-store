import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cakesReducer from "./slices/cakesSlice"
import { logger } from "./middleware/logger";

const rootReducer = combineReducers({
    cakes: cakesReducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;