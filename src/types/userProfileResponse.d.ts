import {Property} from './property';
import {UserFavourite} from './useFavourite';
import {User} from './user';

export interface UserProfileResponse {
  userData: UserData;
}

export interface UserData {
  properties: any[];
  users: User;
  bookings: any[];
  user_earnings: any[];
  guest_bookings: any[];
  host_claims: any[];
  guest_claims: any[];
  userFavourites: UserFavourite[];
  user_notifications: any[];
  new_notification: any[];
  count_notificaion: number;
}
