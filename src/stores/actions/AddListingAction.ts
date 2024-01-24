import {SET_PROPERTIES} from '@stores/reducers/Properties';
import {PropertiesType} from '@type/PropertiesType';

export const setProperties = (property: any): PropertiesType => ({
  type: SET_PROPERTIES,
  payload: property,
});
