import {Button} from '@components/Button';
import {useNavigation} from '@react-navigation/native';
import {selectProfileState, selectUserState} from '@stores/store';
import moment from 'moment';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {AnimatedImage} from 'react-native-ui-lib';
import {useSelector} from 'react-redux';
import tw from 'twrnc';

const Trips = () => {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);
  const {userData} = useSelector(selectUserState);
  console.log('userData', userData);

  // const userData = null;

  if (userData == null)
    return (
      <SafeAreaView style={tw`h-full`}>
        <ScrollView contentContainerStyle={tw`flex-grow p-2`}>
          <View style={tw`h-full items-center justify-center gap-4`}>
            <Text style={tw`text-lg font-semibold`}>
              Please Login Too See Your Trips
            </Text>
            <Text style={tw`text-xs`}>All Your Travel Trips Will be here</Text>
            <Button
              title="Login"
              style={tw`w-40`}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );

  const a = userData?.bookings;
  // const a = [];
  const FirstBooking = a[0];

  return (
    <SafeAreaView style={tw`h-full`}>
      <ScrollView
        contentContainerStyle={tw`flex-grow p-2`}
        showsVerticalScrollIndicator={false}>
        <View style={tw`gap-2`}>
          <Text style={{color: 'black', fontSize: 25, fontWeight: '700'}}>
            Trips
          </Text>
          {a.length > 0 ? (
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontWeight: '400',
                  marginTop: 30,
                }}>
                Upcoming reservations
              </Text>

              <View style={{marginTop: 20}}>
                <View
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
                    // height: 370,
                    borderRadius: 10,
                    overflow: 'hidden',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('TripDetail', {Booking: FirstBooking})
                    }>
                    <View style={tw`gap-2`}>
                      <AnimatedImage
                        loader={<ActivityIndicator />}
                        resizeMode="cover"
                        style={{
                          width: '100%',
                          height: 150,
                          // borderRadius: 20,
                        }}
                        source={{
                          uri:
                            'https://www.snappstay.com/public/images/' +
                            FirstBooking.property_details[0].property_photos[0]
                              .photo,
                        }}
                      />
                      <View style={tw`gap-2 p-4`}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 20,
                            fontWeight: 'bold',
                          }}>
                          {FirstBooking.property_details[0].city}
                        </Text>
                        <Text>
                          Entire{' '}
                          <Text>
                            {FirstBooking.property_details[0].house_title}
                          </Text>{' '}
                          hosted by{' '}
                          <Text>{FirstBooking.host_details.first_name}</Text>
                        </Text>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: 'lightgrey',
                            marginTop: 20,
                          }}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View style={tw`gap-2 p-4`}>
                    {a?.map(booking => (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('TripDetail', {Booking: booking})
                        }>
                        <View style={tw`flex-row items-center `}>
                          <View
                            style={[
                              tw`w-1/3 mx-2 px-2`,
                              {
                                borderRightColor: 'lightgrey',
                                borderRightWidth: 1,
                              },
                            ]}>
                            <Text style={tw`text-sm`}>
                              {moment(booking.check_in).format('MMM Do')} - {''}
                              {moment(booking.check_out).format('MMM Do yyyy')}
                            </Text>
                          </View>
                          <View style={tw`flex-1 p-2 m-2 gap-2`}>
                            <Text style={tw`text-xs font-bold`}>
                              {booking.property_details[0].house_title}
                            </Text>
                            <Text style={tw`text-xs font-semibold`}>
                              {booking.property_details[0].address}
                            </Text>
                            <Text style={tw`text-xs font-semibold`}>
                              {booking.property_details[0].city}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>

                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 18,
                      fontWeight: '400',
                      marginTop: 30,
                    }}>
                    Explore things to do near{' '}
                    <Text style={tw`font-semibold text-black text-sm`}>
                      {FirstBooking.property_details[0].city}
                    </Text>
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
                      source={require('@assets/4.jpg')}
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
                      source={require('@assets/3.jpg')}
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
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    marginTop: 30,
                  }}
                />
                <View style={tw`flex-row items-center p-2`}>
                  <Text style={tw`text-xs`}>
                    Can't find your reservation here?{' '}
                  </Text>
                  <TouchableOpacity>
                    <Text style={tw`text-xs text-black underline font-bold`}>
                      Visit the help Center
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <View style={tw`h-full items-center justify-center`}>
              <Text style={tw` bg-red-200`}>No trips</Text>
            </View>
          )}

          {/* <View>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Reviews')}>
              <View
                style={{
                  marginTop: 50,
                  paddingVertical: 20,
                  borderTopColor: 'lightgrey',
                  borderTopWidth: 1,
                  borderBottomColor: 'lightgrey',
                  borderBottomWidth: 1,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 10,
                      marginRight: 10,
                    }}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 10,
                      }}
                      source={require('@assets/Maskgroup.png')}
                    />
                  </View>
                  <View>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>
                      Review your stay
                    </Text>
                    <Text>Quan 1 Feb 17 - 18 , 2021</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 20,
                    marginLeft: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 20, height: 20, marginRight: 10}}
                    source={require('@assets/u_star.png')}
                  />
                  <Image
                    style={{width: 20, height: 20, marginRight: 10}}
                    source={require('@assets/u_star.png')}
                  />
                  <Image
                    style={{width: 20, height: 20, marginRight: 10}}
                    source={require('@assets/u_star.png')}
                  />
                  <Image
                    style={{width: 20, height: 20, marginRight: 10}}
                    source={require('@assets/u_star.png')}
                  />
                  <Image
                    style={{width: 20, height: 20, marginRight: 10}}
                    source={require('@assets/u_star.png')}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
            <View
              style={{
                marginTop: 20,
                paddingVertical: 20,
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                  marginBottom: 20,
                }}>
                Where you've been
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 10,
                    marginRight: 10,
                  }}>
                  <Image
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 10,
                    }}
                    source={require('@assets/Maskgroup.png')}
                  />
                </View>
                <View>
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    Quan 1
                  </Text>
                  <Text>Hosted by stay & fun</Text>
                  <Text>Feb 17 - 18 , 2021</Text>
                </View>
              </View>
            </View>
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
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Trips;
