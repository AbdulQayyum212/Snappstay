export interface PropertiesType {
  properties: Property[];
}

export interface Property {
  id: number;
  user_id: number;
  property_type: string;
  address: string;
  place_type: PlaceType;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  pets: AdditionalRules;
  amenities: string;
  standout_amenities: string;
  safety_items: string;
  photos: AdditionalRules;
  house_title: string;
  barn: string;
  description: string;
  guest_type: GuestType;
  price: number;
  book_faster: AdditionalRules;
  security_camera: AdditionalRules;
  weapon: AdditionalRules;
  animals: AdditionalRules;
  events: AdditionalRules;
  smoking: AdditionalRules;
  commercial_photography: AdditionalRules;
  quiet_hours: AdditionalRules;
  checkin_time: CheckinTime;
  checkout_time: CheckoutTime;
  additional_rules: AdditionalRules;
  created_at: Date;
  updated_at: Date;
  min_stay: null | string;
  max_stay: null | string;
  far_booking: null | string;
  book_checkin_time: null | string;
  specific_date: null;
  cancelation_policy: null | string;
  long_term_cancelation_policy: null | string;
  status: string;
  lat: string;
  long: string;
  city: string;
  state: string;
  country: Country;
  zip: null | string;
  combine_rate: null | string;
  step: string;
  wifi: null | string;
  property_photos: PropertyPhoto[];
}

export enum AdditionalRules {
  No = 'No',
  Yes = 'Yes',
}

export enum CheckinTime {
  The11Am = '11 AM',
}

export enum CheckoutTime {
  The12Pm = '12 PM',
}

export enum Country {
  Pakistan = 'Pakistan',
  UnitedStates = 'United States',
  UniversalCity = 'Universal City',
}

export enum GuestType {
  Guest = 'guest',
  Luxury = 'luxury',
}

export enum PlaceType {
  Entire = 'entire',
  Private = 'private',
}

export interface PropertyPhoto {
  id: number;
  property_id: number;
  photo: string;
  created_at: Date;
  updated_at: Date;
}
