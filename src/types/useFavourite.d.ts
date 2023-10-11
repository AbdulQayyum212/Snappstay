import {Property} from './property';

export interface UserFavourite {
  id: number;
  property_id: number;
  user_id: number;
  created_at: Date;
  updated_at: Date;
  property: Property;
}
