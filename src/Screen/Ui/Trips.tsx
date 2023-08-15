import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
  ScrollView,
} from 'react-native';

const Trips = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView
        contentContainerStyle={{padding: 20}}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <Text style={{color: 'black', fontSize: 25, fontWeight: '700'}}>
            Trips
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '400',
              marginTop: 30,
            }}>
            Upcomming reservations
          </Text>
          <View style={{marginTop: 20}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TripDetail')}
              style={{
                width: '100%',
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                height: 370,
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <Image
                style={{
                  width: '100%',
                  height: 150,
                  // borderRadius: 20,
                }}
                source={require('../../assets/Rectangle.png')}
              />
              <View style={{padding: 20}}>
                <Text
                  style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                  Quan1
                </Text>
                <Text>Entire rental unit hosted by stay</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    marginTop: 20,
                  }}
                />
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      marginTop: 20,
                      borderRightColor: 'lightgrey',
                      borderRightWidth: 1,
                      width: '40%',
                      paddingHorizontal: 20,
                      //   backgroundColor: 'red',
                      //   height: 140,
                    }}>
                    <Text style={{fontSize: 25}}>Feb 17 - 18 2023</Text>
                  </View>
                  <View style={{marginTop: 20, paddingHorizontal: 20}}>
                    <Text style={{fontSize: 20}}>207 Bui Vien</Text>
                    <Text style={{fontSize: 17, marginTop: 10}}>
                      Quan 1, Thanh pho ho
                    </Text>
                    <Text style={{fontSize: 17, marginTop: 10}}>Chi Minh</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontWeight: '400',
                  marginTop: 30,
                }}>
                Explore things to do near Quan
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 5,
                  }}
                  source={require('../../assets/Rectangle.png')}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    Food and drink
                  </Text>
                  <Text>79 experience</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 5,
                  }}
                  source={require('../../assets/Rectangle.png')}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    Food and drink
                  </Text>
                  <Text>79 experience</Text>
                </View>
              </View>
            </View>
            <View
              style={{borderWidth: 1, borderColor: 'lightgrey', marginTop: 30}}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text>Can't find your reservation here? </Text>
              <Text
                style={{
                  color: 'black',
                  textDecorationLine: 'underline',
                  fontWeight: 'bold',
                }}>
                Visit the help Center
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Trips;
