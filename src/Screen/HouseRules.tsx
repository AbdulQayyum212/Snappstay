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

const HouseRules = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                color: 'black',
                fontSize: 35,
                fontWeight: 'bold',
                width: 200,
              }}>
              Set your house rules
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
                        Pets allowed
                      </Text>
                      <Text style={{width: 300, fontSize: 10}}>
                        You can refuse pets, but must reasonably accommodate
                        service animals. Learn more
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity>
                        <Image
                          resizeMode="contain"
                          style={{width: 25, height: 25, marginRight: 10}}
                          source={require('../assets/cancel.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image
                          resizeMode="contain"
                          style={{width: 25, height: 25, marginRight: 10}}
                          source={require('../assets/check.png')}
                        />
                      </TouchableOpacity>
                    </View>
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
                        Events allowed
                      </Text>
                      {/* <Text style={{width: 300, fontSize: 10}}>
                      You can refuse pets, but must reasonably accommodate
                      service animals. Learn more
                    </Text> */}
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity>
                        <Image
                          resizeMode="contain"
                          style={{width: 25, height: 25, marginRight: 10}}
                          source={require('../assets/cancel.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image
                          resizeMode="contain"
                          style={{width: 25, height: 25, marginRight: 10}}
                          source={require('../assets/check.png')}
                        />
                      </TouchableOpacity>
                    </View>
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
                          width: 200,
                        }}>
                        Smoking, vaping, e‑cigarettes allowed
                      </Text>
                      {/* <Text style={{width: 300, fontSize: 10}}>
                      You can refuse pets, but must reasonably accommodate
                      service animals. Learn more
                    </Text> */}
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity>
                        <Image
                          resizeMode="contain"
                          style={{width: 25, height: 25, marginRight: 10}}
                          source={require('../assets/cancel.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image
                          resizeMode="contain"
                          style={{width: 25, height: 25, marginRight: 10}}
                          source={require('../assets/check.png')}
                        />
                      </TouchableOpacity>
                    </View>
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
                          width: 200,
                        }}>
                        Commercial photography and filming allowed
                      </Text>
                      {/* <Text style={{width: 300, fontSize: 10}}>
                      You can refuse pets, but must reasonably accommodate
                      service animals. Learn more
                    </Text> */}
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity>
                        <Image
                          resizeMode="contain"
                          style={{width: 25, height: 25, marginRight: 10}}
                          source={require('../assets/cancel.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image
                          resizeMode="contain"
                          style={{width: 25, height: 25, marginRight: 10}}
                          source={require('../assets/check.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
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
                          width: 200,
                        }}>
                        Quiet hours
                      </Text>
                      <Text style={{width: 300, fontSize: 13}}>Not set</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity>
                        <Text
                          style={{
                            textDecorationLine: 'underline',
                            color: 'black',
                            fontWeight: 'bold',
                          }}>
                          Edit
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
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
                          width: 200,
                        }}>
                        Check-in window
                      </Text>
                      <Text style={{width: 300, fontSize: 13}}>
                        After 3:00 PM
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity>
                        <Text
                          style={{
                            textDecorationLine: 'underline',
                            color: 'black',
                            fontWeight: 'bold',
                          }}>
                          Edit
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
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
                          width: 200,
                        }}>
                        Checkout time
                      </Text>
                      <Text style={{width: 300, fontSize: 13}}>
                        Select a time
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity>
                        <Text
                          style={{
                            textDecorationLine: 'underline',
                            color: 'black',
                            fontWeight: 'bold',
                          }}>
                          Edit
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
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
            onPress={() => navigation.navigate('Calender')}
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
            <Text style={{color: 'white', fontSize: 10}}>confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default HouseRules;
