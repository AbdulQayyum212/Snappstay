import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const ChooseReservation = () => {
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
            Next, let's describe your barn
          </Text>
          <Text style={{marginTop: 20, fontSize: 20, width: 300}}>
            Choose up to 2 highlights. We'll use these to get your description
            started.
          </Text>
          <View>
            <View
              style={{
                width: '100%',
                paddingVertical: 20,
                borderWidth: 1,
                justifyContent: 'center',
                padding: 20,
                borderRadius: 15,
                marginTop: 20,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor: 'black',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 10,
                  }}>
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 20,
                      backgroundColor: 'white',
                    }}></View>
                </View>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                  Snapstay guest
                </Text>
              </View>
              <Text>
                Get reservations faster when you welcome anyone from the
                Snapp community.
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                paddingVertical: 20,
                borderWidth: 1,
                justifyContent: 'center',
                padding: 20,
                borderRadius: 15,
                marginTop: 20,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor: 'black',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 10,
                  }}>
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 20,
                      backgroundColor: 'white',
                    }}></View>
                </View>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                  Snapstay guest
                </Text>
              </View>
              <Text>
                Get reservations faster when you welcome anyone from the
                Snapp community.
              </Text>
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
            onPress={() => navigation.navigate('CreatePrice')}
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
export default ChooseReservation;
