import {Booking} from './booking';
import {Earning} from './earning';
import {Property} from './property';
import {Properties} from './properyListResponse';
import {UserFavourite} from './useFavourite';
import {User} from './user';

export interface UserProfileResponse {
  userData: UserData;
}

export interface UserData {
  properties: Property[];
  users: User;
  bookings: Booking[];
  user_earnings: Earning[];
  guest_bookings: any[];
  host_claims: any[];
  guest_claims: any[];
  userFavourites: UserFavourite[];
  user_notifications: any[];
  new_notification: any[];
  count_notificaion: number;
}
