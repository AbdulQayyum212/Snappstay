import {Link} from './link';
import {Property} from './property';
import {PropertyPhoto} from './propertyPhoto';
import {User} from './user';
export interface PropertyListResponse {
  properties: Properties;
}

export interface Properties {
  current_page: number;
  data: Property[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: null;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}
