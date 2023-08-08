import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screen/AuthScreen/login';
import StartLogin from '../Screen/AuthScreen/StartLogin';
import StackNavigation from './StackNavigation';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="StartLogin"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="StartLogin" component={StartLogin} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="StackNavigation" component={StackNavigation} />
    </Stack.Navigator>
  );
};
export default AuthStack;
