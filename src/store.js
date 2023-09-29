import {combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit'

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { todos } from './components/todo/reducers';
import cartSlice from './cart/cartSlice'
import productsSlice from './products/productsSlice';

const rootReducer = combineReducers({
    todos,
    cart: cartSlice.reducer,
    products: productsSlice.reducer 
});

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore(
    {reducer: persistedReducer}
);