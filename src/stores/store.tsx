// store.tsx
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import {useDispatch, useSelector, Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import rootReducer, {RootState} from './reducers';

const selectAuthState = (state: RootState) => state.auth;
const selectSignupState = (state: RootState) => state.signup;
const selectProfileState = (state: RootState) => state.profile;
const selectAddListingState = (state: RootState) => state.AddListing;
const selectUserState = (state: RootState) => state.userData;
const selectLoaderState = (state: RootState) => state.loading;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export {
  store,
  persistor,
  selectAuthState,
  selectSignupState,
  selectProfileState,
  selectAddListingState,
  selectUserState,
  selectLoaderState,
};
