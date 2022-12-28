import { combineReducers, configureStore } from '@reduxjs/toolkit';
import commonReducer from './slices/commonSlice';

const rootReducer = combineReducers({ commonReducer });

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
