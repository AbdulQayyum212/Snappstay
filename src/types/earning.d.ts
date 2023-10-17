import {Property} from './property';
import {User} from './user';

export interface Earning {
  id: number;
  property_id: number;
  guest_id: number;
  host_id: number;
  check_in: string;
  check_out: string;
  nights: string;
  room_charges: string;
  tax: string;
  service: string;
  total_amount: string;
  card_name: string;
  card_number: string;
  expiry_month: string;
  expiry_year: string;
  status: string;
  created_at: string;
  updated_at: string;
  guests: string;
  confirm_code: string;
  guest_details: User;
  property_details: Property[];
  host_details: User;
}
