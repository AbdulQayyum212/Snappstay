import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyTabs from '../BottomNavigation/BottomNavigation';
import Property from '../Screen/Property';
import MapScreen from '../Screen/MapScreen';
import PrivatePlace from '../Screen/PrivatePlace';
import SharePlace from '../Screen/SharePlace';
import GuestPlaceoffer from '../Screen/GuestPlaceoffer';
import AddHouse from '../Screen/AddHouse';
import AddHouseTitle from '../Screen/AddHouseTitle';
import Desribe from '../Screen/Desribe';
import CreateDescription from '../Screen/CreateDescription';
import ChooseReservation from '../Screen/ChooseReservation';
import CreatePrice from '../Screen/CreatePrice';
import LastStep from '../Screen/LastStep';
import ReviewListing from '../Screen/ReviewListing';
import Care from '../Screen/Care';
import HouseRules from '../Screen/HouseRules';
import Calender from '../Screen/Calender';
import Policy from '../Screen/Policy';
import Welcome from '../Screen/Welcom';
import Login from '../Screen/AuthScreen/login';
import ConfirmNumber from '../Screen/AuthScreen/ConfirmNumber';
import Notifi from '../Screen/AuthScreen/Notifi';
import Map from '../Screen/Ui/Map';
import WhereTo from '../Screen/Ui/WhereTo';
import SnappCover from '../Screen/SnappCover';
import ConfirmPay from '../Screen/Ui/ConfirmPay';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Property" component={Property} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="PrivatePlace" component={PrivatePlace} />
      <Stack.Screen name="SharePlace" component={SharePlace} />
      <Stack.Screen name="GuestPlaceoffer" component={GuestPlaceoffer} />
      <Stack.Screen name="AddHouse" component={AddHouse} />
      <Stack.Screen name="AddHouseTitle" component={AddHouseTitle} />
      <Stack.Screen name="Desribe" component={Desribe} />
      <Stack.Screen name="CreateDescription" component={CreateDescription} />
      <Stack.Screen name="ChooseReservation" component={ChooseReservation} />
      <Stack.Screen name="CreatePrice" component={CreatePrice} />
      <Stack.Screen name="ReviewListing" component={ReviewListing} />
      <Stack.Screen name="LastStep" component={LastStep} />
      <Stack.Screen name="Care" component={Care} />
      <Stack.Screen name="HouseRules" component={HouseRules} />
      <Stack.Screen name="Calender" component={Calender} />
      <Stack.Screen name="Policy" component={Policy} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ConfirmNumber" component={ConfirmNumber} />
      <Stack.Screen name="Notifi" component={Notifi} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="WhereTo" component={WhereTo} />
      <Stack.Screen name="SnappCover" component={SnappCover} />
      <Stack.Screen name="ConfirmPay" component={ConfirmPay} />
    </Stack.Navigator>
  );
};
export default StackNavigation;
