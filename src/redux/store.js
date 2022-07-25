import filterReducer from './contacts/reducer';
import { contactsApi } from './contacts/contactsApi';

import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';

import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './auth/authSliceNew';

const rootReducer = combineReducers({
  filter: filterReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: {
//     filter: filterReducer,
//     [contactsApi.reducerPath]: contactsApi.reducer,
//     auth: authReducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     contactsApi.middleware,
//   ],
// });

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,

  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
  }).concat(contactsApi.middleware),
  
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;


