import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '@screens/AuthScreen/login';
import StartLogin from '@screens/AuthScreen/StartLogin';
import StackNavigation from '@navigation/StackNavigation';

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
