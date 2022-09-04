import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import apiMiddleware from './store/apiMiddleware';
import rootReducer from './store/reducers/index';
import storage from '@react-native-community/async-storage';
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['authReducer', 'deviceRegistration'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// storage.clear();

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, apiMiddleware),
);
export const persistor = persistStore(store);
export default store;
