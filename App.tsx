/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
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
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import StackNavigation from '@navigation/StackNavigation';
import {createStoreHook, Provider} from 'react-redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import _combineReducers from '@stores/index';
import Toast, {ErrorToast} from 'react-native-toast-message';
const App = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };
  const persistReducers = persistReducer(persistConfig, _combineReducers);
  const store = createStore(persistReducers, applyMiddleware(thunk));
  const persistor = persistStore(store);
  const [condition, setCondition] = useState(true);
  setTimeout(() => {
    setCondition(false);
  }, 2000);
  return (
    // <SafeAreaView style={styles.container}>
    <>
      {condition ? (
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            resizeMode="contain"
            style={{width: 500, height: 500}}
            source={require('./src/assets/snappstaylogo.png')}
          />
        </View>
      ) : (
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
            </NavigationContainer>
          </PersistGate>
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
        </Provider>
      )}
    </>
    // </SafeAreaView>
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
