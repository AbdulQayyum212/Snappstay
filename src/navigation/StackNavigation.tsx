import {createStackNavigator} from '@react-navigation/stack';
import AddHouse from '@screens/AddHouse';
import AddHouseTitle from '@screens/AddHouseTitle';
import ConfirmNumber from '@screens/AuthScreen/ConfirmNumber';
import Notifi from '@screens/AuthScreen/Notifi';
import Login from '@screens/AuthScreen/login';
import Calender from '@screens/Calender';
import Care from '@screens/Care';
import ChooseReservation from '@screens/ChooseReservation';
import CreateDescription from '@screens/CreateDescription';
import CreatePrice from '@screens/CreatePrice';
import Describe from '@screens/Describe';
import GuestPlaceholder from '@screens/GuestPlaceOffer';
import HouseRules from '@screens/HouseRules';
import LastStep from '@screens/LastStep';
import MapScreen from '@screens/MapScreen';
import Policy from '@screens/Policy';
import PrivatePlace from '@screens/PrivatePlace';
import Property from '@screens/Property';
import ReviewListing from '@screens/ReviewListing';
import SharePlace from '@screens/SharePlace';
import SnappCover from '@screens/SnappCover';
import AddListing from '@screens/Ui/AddListing';
import ConfirmPay from '@screens/Ui/ConfirmPay';
import ConfirmPaystep2 from '@screens/Ui/ConfirmPaystep2';
import DateEdit from '@screens/Ui/DateEdit';
import Done from '@screens/Ui/Done';
import EditPayment from '@screens/Ui/EditPayment';
import Guest from '@screens/Ui/Guest';
import HelpCenter from '@screens/Ui/HelpCenter';
import Map from '@screens/Ui/Map';
import Notifications from '@screens/Ui/Notifications';
import PersonalInfo from '@screens/Ui/PersonalInfo';
import PrivacyAndSharing from '@screens/Ui/PrivacyAndSharing';
import ProfileStep2 from '@screens/Ui/ProfileStep2';
import Reviews from '@screens/Ui/Reviews';
import StartEarning from '@screens/Ui/StartEarning';
import Translation from '@screens/Ui/Translation';
import TripDetail from '@screens/Ui/TripDetail';
import WhereTo from '@screens/Ui/WhereTo';
import Welcome from '@screens/Welcom';
import React, {useEffect} from 'react';
import MyTabs from './BottomNavigation';
import {RootStackParamList} from '@type/navigation';
import SignupScreen from '@screens/SignupScreen';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectAddListingState,
  persistor,
  selectAuthState,
  selectUserState,
  store,
} from '@stores/store';
import SplashScreen from 'react-native-splash-screen';
import {getUserData} from '@stores/actions/userActions';
import VerifyScreen from '@screens/VerifyScreen';
const Stack = createStackNavigator<RootStackParamList>();
const StackNavigation = () => {
  const {isAuthenticated, user, isLoggingIn} = useSelector(selectAuthState);
  const {isLoadingUser, userData, error} = useSelector(selectUserState);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    if (isAuthenticated) {
      if (user) dispatch(getUserData(user));
      if (isLoadingUser) SplashScreen.show();
      if (error) SplashScreen.hide();
      if (!isLoadingUser && userData) SplashScreen.hide();
      if (!isLoadingUser && !userData) SplashScreen.hide();
      if (isLoggingIn) SplashScreen.show();
      if (!isLoggingIn) SplashScreen.hide();
      if (isLoggingIn && !isLoadingUser) SplashScreen.hide();
      if (isLoggingIn && isLoadingUser) SplashScreen.show();
      if (isLoggingIn && error) SplashScreen.hide();
      if (!isLoggingIn && !isLoadingUser && !error) SplashScreen.hide();
      if (!isLoggingIn && isLoadingUser && !error) SplashScreen.show();
      if (!isLoggingIn && isLoadingUser && error) SplashScreen.hide();
      if (!isLoggingIn && !isLoadingUser && error) SplashScreen.hide();
      if (!isLoggingIn && !isLoadingUser && !error) SplashScreen.hide();
      if (!isLoggingIn && !isLoadingUser && !error) SplashScreen.hide();
    } else {
      SplashScreen.hide();
    }
  }, [isAuthenticated]);

  console.log(userData);
  const {id, step} = useSelector(selectAddListingState);
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
      <Stack.Screen name="GuestPlaceOffer" component={GuestPlaceholder} />
      <Stack.Screen name="AddHouse" component={AddHouse} />
      <Stack.Screen name="AddHouseTitle" component={AddHouseTitle} />
      <Stack.Screen name="Describe" component={Describe} />
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

      <Stack.Screen name="ConfirmNumber" component={ConfirmNumber} />
      <Stack.Screen name="Notifi" component={Notifi} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="WhereTo" component={WhereTo} />
      <Stack.Screen name="SnappCover" component={SnappCover} />
      <Stack.Screen name="ConfirmPay" component={ConfirmPay} />
      <Stack.Screen name="Guest" component={Guest} />
      <Stack.Screen name="DateEdit" component={DateEdit} />
      <Stack.Screen name="ConfirmPaystep2" component={ConfirmPaystep2} />
      <Stack.Screen name="TripDetail" component={TripDetail} />
      <Stack.Screen name="ProfileStep2" component={ProfileStep2} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="EditPayment" component={EditPayment} />
      <Stack.Screen name="PrivacyAndSharing" component={PrivacyAndSharing} />
      <Stack.Screen name="StartEarning" component={StartEarning} />
      <Stack.Screen name="Reviews" component={Reviews} />
      <Stack.Screen name="Done" component={Done} />
      <Stack.Screen name="Translation" component={Translation} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="HelpCenter" component={HelpCenter} />
      <Stack.Screen name="Verify" component={VerifyScreen} />
      {step === '18' || (
        <Stack.Screen name="Addlisting" component={AddListing} />
      )}
    </Stack.Navigator>
  );
};
export default StackNavigation;
