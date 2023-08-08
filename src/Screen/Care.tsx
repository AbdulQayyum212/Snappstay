import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Care = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 35,
              fontWeight: 'bold',
              width: 250,
            }}>
            Key details to take care of
          </Text>
          <Text style={{marginTop: 20, fontSize: 20, width: 300}}>
            Before you publish your listing, we need to confirm a few details
            about you and your space. We’ll walk you through it.
          </Text>
          <View>
            <View style={{marginTop: 20}}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    // alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 30,
                    marginBottom: 20,
                  }}>
                  <View>
                    <Text
                      style={{
                        color: '#717171',
                        fontWeight: 'bold',
                        fontSize: 17,
                      }}>
                      Add a photo of your ID
                    </Text>
                    <Text style={{width: 300, fontSize: 10}}>
                      This helps us check that you’re really you. Your ID will
                      never be shared with guests.
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: 12,
                      }}>
                      Required
                    </Text>
                  </View>
                  <Image
                    resizeMode="contain"
                    style={{width: 15, height: 15, marginRight: 10}}
                    source={require('../assets/Group1.png')}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    // alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 30,
                    marginBottom: 20,
                  }}>
                  <View>
                    <Text
                      style={{
                        color: '#717171',
                        fontWeight: 'bold',
                        fontSize: 17,
                      }}>
                      Confirm your phone number
                    </Text>
                    <Text style={{width: 300, fontSize: 10}}>
                      We'll call or text to confirm your number. Standard
                      messaging rates apply.
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: 12,
                      }}>
                      Required
                    </Text>
                  </View>
                  <Image
                    resizeMode="contain"
                    style={{width: 15, height: 15, marginRight: 10}}
                    source={require('../assets/Group1.png')}
                  />
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 210,
                  marginTop: 20,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}>
                <Image
                  style={{
                    width: 350,
                    height: 150,
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                  source={require('../assets/Rectangle2.png')}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 7,
                  }}>
                  <Text style={{fontSize: 10}}>
                    5 Bed Spacious house with pool
                  </Text>
                  <Text style={{fontSize: 10}}>New</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{textDecorationLine: 'line-through', fontSize: 10}}>
                    $31
                  </Text>
                  <Text style={{color: 'black'}}>$25</Text>
                </View>
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
            onPress={() => navigation.navigate('HouseRules')}
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
export default Care;
