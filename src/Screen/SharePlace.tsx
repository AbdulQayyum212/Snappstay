import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const SharePlace = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{color: 'black', fontSize: 35, fontWeight: 'bold'}}>
            Share some basics about your place
          </Text>
          <Text
            style={{
              color: 'lightgrey',
              fontSize: 20,
              fontWeight: 'bold',
              width: 200,
              marginTop: 20,
            }}>
            You'll add more details later, like bed types.
          </Text>
          <View style={{marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 20,
                paddingVertical: 10,
              }}>
              <Text>Guests</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: 20,
                    height: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    marginRight: 10,
                  }}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>-</Text>
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: 20,
                    height: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    marginLeft: 10,
                  }}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 20,
                paddingVertical: 10,
              }}>
              <Text>Bedroom</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: 20,
                    height: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    marginRight: 10,
                  }}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>-</Text>
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: 20,
                    height: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    marginLeft: 10,
                  }}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 20,
                paddingVertical: 10,
              }}>
              <Text>Beds</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: 20,
                    height: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    marginRight: 10,
                  }}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>-</Text>
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: 20,
                    height: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    marginLeft: 10,
                  }}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 20,
                paddingVertical: 10,
              }}>
              <Text>Bathroom</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: 20,
                    height: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    marginRight: 10,
                  }}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>-</Text>
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: 20,
                    height: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    marginLeft: 10,
                  }}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View />
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 5,
              width: 60,
              alignItems: 'center',
              borderRadius: 7,
              paddingVertical: 5,
              marginTop: 40,
              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <Text style={{color: 'black'}}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('GuestPlaceoffer')}
            style={{
              backgroundColor: 'black',
              paddingHorizontal: 5,
              width: 60,
              alignItems: 'center',
              borderRadius: 7,
              paddingVertical: 5,
              marginTop: 40,
              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <Text style={{color: 'white'}}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default SharePlace;
