import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import StarRating from 'react-native-star-rating-widget';

const Trips = () => {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView
        contentContainerStyle={{padding: 20}}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <Text style={{color: 'black', fontSize: 25, fontWeight: '700'}}>
            Trips
          </Text>
          {/* <View>
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
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('TripDetail')}>
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
                    height: 370,
                    borderRadius: 10,
                    overflow: 'hidden',
                  }}>
                  <Image
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: 150,
                      // borderRadius: 20,
                    }}
                    source={require('../../assets/1.jpg')}
                  />
                  <View style={{padding: 20}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
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
                        <Text style={{fontSize: 17, marginTop: 10}}>
                          Chi Minh
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
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
                    source={require('../../assets/4.jpg')}
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
                    source={require('../../assets/3.jpg')}
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
          </View> */}
          <View>
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
                      source={require('../../assets/Maskgroup.png')}
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
                    source={require('../../assets/u_star.png')}
                  />
                  <Image
                    style={{width: 20, height: 20, marginRight: 10}}
                    source={require('../../assets/u_star.png')}
                  />
                  <Image
                    style={{width: 20, height: 20, marginRight: 10}}
                    source={require('../../assets/u_star.png')}
                  />
                  <Image
                    style={{width: 20, height: 20, marginRight: 10}}
                    source={require('../../assets/u_star.png')}
                  />
                  <Image
                    style={{width: 20, height: 20, marginRight: 10}}
                    source={require('../../assets/u_star.png')}
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
                    source={require('../../assets/Maskgroup.png')}
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Trips;
