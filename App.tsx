/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import StackNavigation from './src/StackNavigation/StackNavigation';
import StartLogin from './src/Screen/AuthScreen/StartLogin';
import AuthStack from './src/StackNavigation/AuthStack';
import {createStoreHook, Provider} from 'react-redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import _combineReducers from './src/Redux';
import Toast, {ErrorToast} from 'react-native-toast-message';
const App = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };
  const persistReducers = persistReducer(persistConfig, _combineReducers);
  const store = createStore(persistReducers, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            {Platform.OS == 'ios' ? (
              <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
                <StackNavigation />
              </KeyboardAvoidingView>
            ) : (
              <StackNavigation />
            )}
            {/* <AuthStack /> */}
          </NavigationContainer>
        </PersistGate>
      </Provider>
      <Toast
        config={{
          error: props => (
            <ErrorToast
              {...props}
              text1NumberOfLines={2}
              text2NumberOfLines={2}
            />
          ),
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
