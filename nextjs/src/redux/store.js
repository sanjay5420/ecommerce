import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './reducerSlices/cartSlice'
import  userSlice  from './reducerSlices/userSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  cart : cartSlice,
  user : userSlice
}));

export const store =  configureStore({
  reducer:persistedReducer,
})

export const persistor = persistStore(store);