import {combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { todos } from './components/todo/reducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const rootReducer = combineReducers({
    todos,
});

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({reducer: persistedReducer});