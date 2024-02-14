import {Property} from './property';
import {User} from './user';

export interface Review {
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
  created_at: Date;
  updated_at: Date;
  guests: null;
  confirm_code: null;
  payment_intent: null;
  payment_response: null;
  checkout: string;
  review_status: string;
  host_details: User;
  property_details: Property[];
}
