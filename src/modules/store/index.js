import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, createStore, compose } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RootReducer from '../reducers/RootReducer';

const enhancers = [
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      collapsed: true,
      predicate: () => __DEV__,
    }),
  ),
];

const enhancer = compose(...enhancers);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer', ],
};

const persistedReducer = persistReducer(persistConfig,RootReducer);
//@ts-ignore
export const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);