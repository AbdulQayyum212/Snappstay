/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {applyMiddleware, createStore} from 'redux';

import StackNavigation from '@navigation/StackNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import Toast, {ErrorToast} from 'react-native-toast-message';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import {persistor, selectLoaderState, store} from '@stores/store';
const App = () => {
  return (
    // <SafeAreaView style={styles.container}>
    <>
      {/* {condition ? (
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
      ) : ( */}
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
      {/* )} */}
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
