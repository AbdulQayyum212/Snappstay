import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const ReviewListing = () => {
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
              width: 200,
            }}>
            Review your listing
          </Text>
          <Text style={{marginTop: 20, fontSize: 20}}>
            Here's what we'll show to guests. Make sure everything looks good.
          </Text>
          <View>
            <View style={{marginTop: 20}}>
              <View
                style={{
                  width: 200,
                  height: 210,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  //   padding: 20,
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
                    width: 180,
                    height: 150,
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                  source={require('@assets/Rectangle2.png')}
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

              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    // alignItems: 'center',
                    // justifyContent: 'space-between',
                    marginTop: 30,
                    marginBottom: 20,
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{width: 25, height: 25, marginRight: 10}}
                    source={require('@assets/checkbox.png')}
                  />
                  <View>
                    <Text
                      style={{
                        color: '#717171',
                        fontWeight: 'bold',
                        fontSize: 17,
                      }}>
                      Confirm a few details and publish
                    </Text>
                    <Text style={{width: 300, fontSize: 10}}>
                      We’ll let you know if you need to verify your identity or
                      register with the local government.
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    // alignItems: 'center',
                    // justifyContent: 'space-between',
                    marginTop: 30,
                    marginBottom: 20,
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{width: 25, height: 25, marginRight: 10}}
                    source={require('@assets/calander.png')}
                  />
                  <View>
                    <Text
                      style={{
                        color: '#717171',
                        fontWeight: 'bold',
                        fontSize: 17,
                      }}>
                      Set up your calendar
                    </Text>
                    <Text style={{width: 300, fontSize: 10}}>
                      Choose which dates your listing is available. It will be
                      visible 24 hours after you publish.
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 30,
                    marginBottom: 20,
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{width: 25, height: 25, marginRight: 10}}
                    source={require('@assets/edit.png')}
                  />
                  <View>
                    <Text
                      style={{
                        color: '#717171',
                        fontWeight: 'bold',
                        fontSize: 17,
                      }}>
                      Adjust your settings
                    </Text>
                    <Text style={{width: 300, fontSize: 10}}>
                      Set house rules, select a cancellation policy, choose how
                      guests book, and more.
                    </Text>
                  </View>
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
            onPress={() => navigation.navigate('Care')}
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
export default ReviewListing;
