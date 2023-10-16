import {View, Text, SafeAreaView} from 'react-native';
import React, {useRef, useState} from 'react';
import {TextField} from 'react-native-ui-lib';
import RadioBtn from './RadioBtn';
import SelectDropdown from 'react-native-select-dropdown';
import Feather from 'react-native-vector-icons/Feather';
import {GOOGLE_API} from '../Config/apiCaller';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import MapView, {PROVIDER_GOOGLE, Region} from 'react-native-maps';
import CustomMarker from './CustomMarker';
import Marker from './Marker';
const Location = ({setInput, input}: any) => {
  const map = useRef<MapView>(null);
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();
  return (
    <SafeAreaView>
      <View style={{padding: 20}}>
        <Text
          style={{
            color: 'black',
            fontWeight: '500',
            marginBottom: 10,
            marginTop: 10,
            fontSize: 20,
          }}>
          Where is your House located?
        </Text>
        <Text
          style={{
            color: 'grey',
            fontWeight: '500',
            marginBottom: 20,
            // marginTop: 10,
          }}>
          Your address is only shared with guests after they’ve made a
          reservation.
        </Text>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              marginBottom: 20,
              marginTop: 10,
            }}>
            Address*
          </Text>
          {/* <View
            style={{
              borderWidth: 1,
              borderColor: 'lightgrey',
              width: '100%',
              paddingHorizontal: 10,
              borderRadius: 10,
              height: 50,
            }}>
            <TextField
              value={input.address}
              onChangeText={t =>
                setInput((prev: any) => ({...prev, address: t}))
              }
              style={{height: 50}}
              placeholder="Enter Address"
            />
          </View> */}
          <GooglePlacesAutocomplete
            keyboardShouldPersistTaps="always"
            fetchDetails={true}
            debounce={400}
            styles={{
              container: {
                // padding: 12,
                borderWidth: 1,
                borderColor: 'lightgrey',
                borderRadius: 10,
              },
              textInput: {
                color: 'black',
              },
            }}
            placeholder="Search..."
            textInputProps={{
              onChangeText: text =>
                setInput((prev: any) => ({
                  ...prev,
                  address: text,
                })),
              value: input?.address,
            }}
            onPress={(
              data: GooglePlaceData,
              details: GooglePlaceDetail | null,
            ) => {
              if (details == null) return;
              const placeType = details.types[0] || '';
              // const {lat, lng} = details.geometry.location;
              console.log(
                'details.geometry.location',
                details.geometry.location?.lat,
              );

              setLat(details.geometry.location?.lat);
              setLng(details.geometry.location?.lng);
              setInput((prev: any) => ({
                ...prev,
                address: details?.formatted_address,
              }));
              setInput((prev: any) => ({
                ...prev,
                lat: details.geometry.location?.lat,
              }));
              setInput((prev: any) => ({
                ...prev,
                lng: details.geometry.location?.lng,
              }));
              setInput((prev: any) => ({...prev, city: details?.name}));
              setInput((prev: any) => ({
                ...prev,
                state: details?.address_components[2]?.short_name,
              }));
              setInput((prev: any) => ({
                ...prev,
                country: details?.address_components[3]?.long_name,
              }));
              setInput((prev: any) => ({
                ...prev,
                zipCode: details?.address_components[4]?.long_name,
              }));
              // const {lat, lng} = details.geometry.location;
              // Get the latitudeDelta based on the PlaceType, or use a default value
              // const latitudeDelta = placeTypeToDelta[placeType] || 0.01; // Default latitudeDelta
              const region = {
                latitude: lat,
                longitude: lng,
                latitudeDelta: 0.8,
                longitudeDelta: 0.8,
              } as Region;
              map?.current?.animateToRegion(region);

              // 'details' is provided when fetchDetails = true
              let zipCode = '';
              console.log('==><><><===', details);
              // setAddress(details?.formatted_address);
              let formData = new FormData();
              if (
                placeType == 'post_box' || // Adjust for post boxes
                placeType == 'postal_code' || // Adjust for postal codes
                placeType == 'postal_code_prefix' || // Adjust for postal code prefixes
                placeType == 'postal_code_suffix' || // Adjust for postal code suffixes
                placeType == 'postal_town'
              ) {
                let zip = details.address_components[0]?.long_name;

                // setAllData(prev => ({...prev, zip: zip}));
              } else {
                //address will be here
                let address = details.address_components[0].long_name;
                // setAllData(prev => ({...prev, address: address}));
                console.log(
                  'details.address_components[0].long_name',
                  details.address_components[0].long_name,
                );
              }
            }}
            query={{
              key: GOOGLE_API,
              // key: 'AIzaSyCSEEKrvzM3-vFcLEoOUf256gzLG7tyWWc',
              language: 'en',
              components: 'country:us',

              // types: 'address', // default: 'geocode'
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              marginBottom: 20,
              marginTop: 10,
            }}>
            City
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'lightgrey',
              width: '100%',
              paddingHorizontal: 10,
              borderRadius: 10,
              height: 50,
            }}>
            <TextField
              value={input.city}
              // onChangeText={t => setInput((prev: any) => ({...prev, city: t}))}
              style={{height: 50}}
              placeholder="Enter City"
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              marginBottom: 20,
              marginTop: 10,
            }}>
            State
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'lightgrey',
              width: '100%',
              paddingHorizontal: 10,
              borderRadius: 10,
              height: 50,
            }}>
            <TextField
              value={input.state}
              // onChangeText={t => setInput((prev: any) => ({...prev, state: t}))}
              style={{height: 50}}
              placeholder="Enter State"
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              marginBottom: 20,
              marginTop: 10,
            }}>
            Country
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'lightgrey',
              width: '100%',
              paddingHorizontal: 10,
              borderRadius: 10,
              height: 50,
            }}>
            <TextField
              value={input.country}
              // onChangeText={t =>
              //   setInput((prev: any) => ({...prev, country: t}))
              // }
              style={{height: 50}}
              placeholder="Enter Country"
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              marginBottom: 20,
              marginTop: 10,
            }}>
            Zip code
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'lightgrey',
              width: '100%',
              paddingHorizontal: 10,
              borderRadius: 10,
              height: 50,
            }}>
            <TextField
              value={input.zipCode}
              // onChangeText={t =>
              //   setInput((prev: any) => ({...prev, zipCode: t}))
              // }
              style={{height: 50}}
              placeholder="Enter Zip code"
            />
          </View>
          {/* {input.city != '' && (
            <View style={{marginTop: 20, width: '100%', height: 300}}>
              <MapView
                maxZoomLevel={60}
                // onMapReady={handleMapReady}
                // onPress={e => onPress(e)}
                // showsTraffic={true}
                // mapType={mapType}
                ref={map}
                // style={{ marginTop: 10}}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                  latitude: 47.610378,
                  longitude: -122.200676,
                  latitudeDelta: 0.8,
                  longitudeDelta: 0.8,
                }}
                // scrollEnabled={false}
                // scrollEnabled={mapOptions.scrollEnabled}
              >
                {lat && (
                  <Marker
                    coordinate={{
                      latitude: Number(lat) ?? 47.610378,
                      longitude: Number(lng) ?? -122.200676,
                    }}
                    // key={place.id}
                    // price={place.newPrice}
                    // isSelected={place.id === selectedPlaceId}
                    // onPress={() => setSelectedPlaceId(place.id)}
                  />
                )}
              </MapView>
            </View>
          )} */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Location;
