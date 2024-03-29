import {Review} from './review.d';
import {Earning} from './earning.d';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Property} from './property';
import {Booking} from './booking';

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeTabParamList>;
  PostDetails: {id: string};
  NotFound: undefined;
  MyTabs: NavigatorScreenParams<MyTabParamList>;
  Property: undefined;
  MapScreen: undefined;
  PrivatePlace: undefined;
  SharePlace: undefined;
  GuestPlaceOffer: undefined;
  AddHouse: undefined;
  AddHouseTitle: undefined;
  Describe: undefined;
  CreateDescription: undefined;
  ChooseReservation: undefined;
  CreatePrice: undefined;
  ReviewListing: undefined;
  LastStep: undefined;
  Care: undefined;
  HouseRules: undefined;
  Calender: undefined;
  Policy: undefined;
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  ConfirmNumber: undefined;
  Notifi: undefined;
  Map: undefined;
  WhereTo: undefined;
  SnappCover: {property: Property};
  ConfirmPay: {property: Property};
  Guest: undefined;
  DateEdit: undefined;
  ConfirmPaystep2: undefined;
  TripDetail: {Booking: Booking};
  ProfileStep2: undefined;
  PersonalInfo: undefined;
  EditPayment: undefined;
  PrivacyAndSharing: undefined;
  StartEarning: {property: Property};
  Reviews: undefined;
  Done: undefined;
  Translation: undefined;
  Notifications: undefined;
  HelpCenter: undefined;
  Addlisting: undefined;
  Verify: undefined;
  UserListing: undefined;
  EarningListing: undefined;
  stripe: undefined;
  EarningDetails: {Earning: Earning};
  ReviewsDetails: {Review: Review};
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeTabParamList = {
  Popular: undefined;
  Latest: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
export type MyTabParamList = {
  Trips: undefined;
  Explore: undefined;
  Wishlists: undefined;
  inbox: undefined;
  'Log In': undefined;
};

export type MyTabScreenProps<T extends keyof MyTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MyTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
