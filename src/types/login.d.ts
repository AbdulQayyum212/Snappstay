import {User} from './user';
export interface LoginResponse {
  message: string;
  token: string;
  user_type: string;
  user: User;
}
