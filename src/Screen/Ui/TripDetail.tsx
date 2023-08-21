import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Animated,
  StyleSheet,
  TextInput,
  Modal,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro';
import Foundation from 'react-native-vector-icons/Foundation';
import {Carousel} from 'react-native-ui-lib';
import {Button} from '../../components/Button';
import Message from './Message';
const width = Dimensions.get('window').width;
const Max_Header_Height = 200;
const Min_Header_Height = 70;
const Scroll_Distance = Max_Header_Height - Min_Header_Height;
const TripDetail = () => {
  const navigation = useNavigation();
  const [gettingThere, setGettingThere] = useState(false);
  const [thingToKnow, setThingToKnow] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  const [hostModal, setHostModal] = useState(false);
  const [whoComing, setWhoComing] = useState(false);
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  const animateHeaderBackgroundColor = scrollOffsetY.interpolate({
    inputRange: [0, 200 - 70],
    outputRange: ['transparent', 'white'],
    extrapolate: 'clamp',
  });
  const animatedHeaderHeight = scrollOffsetY.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [200, 70],
    extrapolate: 'clamp',
  });
  const data = [
    {
      name: 'Art and cilture',
      img: require('../../assets/1.jpg'),
    },
    {
      name: 'Art and cilture',
      img: require('../../assets/2.jpg'),
    },
    {
      name: 'Art and cilture',
      img: require('../../assets/3.jpg'),
    },
    {
      name: 'Art and cilture',
      img: require('../../assets/4.jpg'),
    },
  ];
  const flatListData = [
    {
      name: ' 150m to notre-Dame Cathe...',
      img: require('../../assets/1.jpg'),
    },
    {
      name: ' 150m to notre-Dame Cathe...',
      img: require('../../assets/2.jpg'),
    },
    {
      name: ' 150m to notre-Dame Cathe...',
      img: require('../../assets/3.jpg'),
    },
  ];
  return (
    <View style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {useNativeDriver: false},
        )}
        // contentContainerStyle={{padding: 20}}
      >
        <View style={{height: 400}}>
          {/* <View
        style={{
          zIndex: 1,
          position: 'absolute',
          bottom: 10,
          right: 10,
        }}>
        <View
          style={{
            paddingHorizontal: 10,
            borderRadius: 10,
            backgroundColor: 'black',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
            }}>{`${data?.length - 1}/${data?.length}`}</Text>
        </View>
      </View> */}
          <Carousel
            // onChangePage={() => console.log('page changed')}
            loop
            autoplay
            // animated
            // counterStyle={{
            //   position: 'absolute',
            //   bottom: 10,
            //   left: 30,
            // }}
            pageControlProps={{
              size: 10,
              // containerStyle: {
              //   // position: 'absolute',
              //   // bottom: 15,
              //   // left: 10,
              //   backgrountColor: 'red',
              // },
            }}
            pageControlPosition={Carousel.pageControlPositions.OVER}
            // showCounter
          >
            {new Array(5).fill(null).map((element, index) => (
              <Image
                style={{
                  width: width,
                  height: 400,
                  // borderRadius: 20,
                }}
                source={require('../../assets/bgimage.png')}
              />
            ))}
          </Carousel>
          {/* <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{height: 300}}
        horizontal
        renderItem={({item}) => {
          return (
            <>
              <Carousel
                onChangePage={() => console.log('page changed')}
                loop
                pageControlProps={{
                  size: 10,
                  containerStyle: {
                    position: 'absolute',
                    bottom: 15,
                    left: 10,
                  },
                }}
                pageControlPosition={Carousel.pageControlPositions.OVER}
                showCounter>
                {new Array(5).fill(null).map((element, index) => (
                  <Image
                    style={{
                      width: width,
                      height: 300,
                      borderRadius: 20,
                    }}
                    source={item?.img}
                  />
                ))}
              </Carousel>
              <Image style={{width: width, height: 300}} source={item?.img} />
            </>
          );
        }}
      /> */}
        </View>

        <View style={{}}>
          <View style={{backgroundColor: 'white', padding: 20}}>
            <View
              style={{
                flexDirection: 'row',
                //   alignItems: 'center',
                //   justifyContent: 'space-between',
              }}>
              <View
                style={{
                  borderRightWidth: 1,
                  borderRightColor: 'lightgrey',
                  width: '40%',
                }}>
                <Text style={{color: 'black'}}>Check-in</Text>
                <Text style={{color: 'black'}}>Fri, Feb 17</Text>
                <Text>1:00 PM</Text>
              </View>
              <View
                style={{
                  // borderRightWidth: 1,
                  // borderRightColor: 'lightgrey',
                  width: '40%',
                  marginLeft: 20,
                }}>
                <Text style={{color: 'black'}}>Check-out</Text>
                <Text style={{color: 'black'}}>Sat, Feb 18</Text>
                <Text>11:00 AM</Text>
              </View>
            </View>
            <View
              style={{borderWidth: 1, borderColor: '#999999', marginTop: 20}}
            />
            <View>
              <TouchableOpacity
                onPress={() => setGettingThere(true)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 8,
                  paddingVertical: 12,
                  marginBottom: 20,
                  borderBottomColor: 'lightgrey',
                  borderBottomWidth: 1,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    //   marginTop: 10,
                  }}>
                  <FontAwesome6
                    name="location-dot"
                    size={20}
                    color="black"
                    style={{marginRight: 10}}
                  />
                  <View style={{marginLeft: 10}}>
                    <Text style={{color: 'black'}}>Getting there</Text>
                    <Text style={{color: 'grey'}}>Addrees</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setThingToKnow(true)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // marginTop: 8,
                  paddingVertical: 12,
                  marginBottom: 20,
                  borderBottomColor: 'lightgrey',
                  borderBottomWidth: 1,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    //   marginTop: 10,
                  }}>
                  <Octicons
                    name="book"
                    size={20}
                    color="black"
                    style={{marginRight: 10}}
                  />
                  <View style={{marginLeft: 10}}>
                    <Text style={{color: 'black'}}>Things to know</Text>
                    <Text style={{color: 'grey'}}>
                      instructions and house rule
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setMessageModal(true)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // marginTop: 8,
                  paddingVertical: 12,
                  marginBottom: 20,
                  borderBottomColor: 'lightgrey',
                  borderBottomWidth: 1,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    //   marginTop: 10,
                  }}>
                  <MaterialCommunityIcons
                    name="message-outline"
                    size={20}
                    color="black"
                    style={{marginRight: 10}}
                  />
                  <View style={{marginLeft: 10}}>
                    <Text style={{color: 'black'}}>Message your host</Text>
                    <Text style={{color: 'grey'}}>stay & fun</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // marginTop: 8,
                  paddingVertical: 12,
                  marginBottom: 20,
                  borderBottomColor: 'lightgrey',
                  borderBottomWidth: 1,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    //   marginTop: ,
                  }}>
                  <FontAwesome6
                    name="location-dot"
                    size={20}
                    color="black"
                    style={{marginRight: 10}}
                  />
                  <View style={{marginLeft: 10}}>
                    <Text style={{color: 'black'}}>Your place</Text>
                    <Text style={{color: 'grey'}}>
                      Hidden gem at D1 Bui Vien - stay&fun 09
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 10, backgroundColor: 'white', padding: 20}}>
            <Text style={{color: 'black', fontSize: 17, fontWeight: '500'}}>
              Reservation details
            </Text>
            <TouchableOpacity
              onPress={() => setWhoComing(true)}
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 20,
              }}>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{width: '60%', color: 'black', fontWeight: 'bold'}}>
                  Who's coming
                </Text>
                <View style={{width: 40, height: 40, borderRadius: 50}}>
                  <Image
                    style={{width: 40, height: 40, borderRadius: 50}}
                    source={require('../../assets/profile.png')}
                  />
                </View>
              </View>
              <Text style={{width: '52%', color: '#999999'}}>1 guests</Text>
            </TouchableOpacity>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 20,
              }}>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{width: '60%', color: 'black', fontWeight: 'bold'}}>
                  Confirmation Code
                </Text>
              </View>
              <Text style={{width: '52%', color: '#999999'}}>*******</Text>
            </View>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 20,
              }}>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  // justifyContent: 'space-between',
                }}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Your booking is protected by SnappStay
                </Text>
              </View>
              <Text style={{color: 'black', textDecorationLine: 'underline'}}>
                Learn more
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 20,
              }}>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  // justifyContent: 'space-between',
                }}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Cancellation policy
                </Text>
              </View>
              <Text style={{marginTop: 10}}>
                Free cancellation before 1.00 PM on Feb 12. After that, the
                reservation is non-refoundable.
              </Text>
              <Text
                style={{
                  color: 'black',
                  textDecorationLine: 'underline',
                  marginTop: 10,
                }}>
                Learn more
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons
                  style={{marginRight: 10, color: 'black'}}
                  name="manage-history"
                  size={20}
                />
                <Text style={{color: 'black'}}>Manage guest</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                style={{color: 'black'}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons
                  style={{marginRight: 10, color: 'black'}}
                  name="edit"
                  size={20}
                />
                <Text style={{color: 'black'}}>Change reservation</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                style={{color: 'black'}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialCommunityIcons
                  style={{marginRight: 10, color: 'black'}}
                  name="cancel"
                  size={20}
                />
                <Text style={{color: 'black'}}>Cancel reservation</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                style={{color: 'black'}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Entypo
                  style={{marginRight: 10, color: 'black'}}
                  name="network"
                  size={20}
                />
                <Text style={{color: 'black'}}>
                  Get a PDF for visa purposes
                </Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                style={{color: 'black'}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Entypo
                  style={{marginRight: 10, color: 'black'}}
                  name="wallet"
                  size={20}
                />
                <Text style={{color: 'black'}}>Add to wallet</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                style={{color: 'black'}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome5
                  style={{marginRight: 10, color: 'black'}}
                  name="receipt"
                  size={20}
                />
                <Text style={{color: 'black'}}>Get receipt</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                style={{color: 'black'}}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              backgroundColor: 'white',
              padding: 20,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                fontWeight: '500',
                marginBottom: 20,
              }}>
              Getting there
            </Text>
            <Image
              source={require('../../assets/staticmap.png')}
              style={{width: '100%', height: 250}}
              // resizeMode="contain"
            />
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                fontWeight: '500',
                marginTop: 10,
                marginBottom: 10,
              }}>
              address
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                // fontWeight: '500',
                marginBottom: 10,
              }}>
              207 Bui Vien , Quan1
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                borderTopColor: 'lightgrey',
                borderTopWidth: 1,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome5
                  style={{marginRight: 10, color: 'black'}}
                  name="copy"
                  size={20}
                />
                <Text style={{color: 'black'}}>Copy address</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                style={{color: 'black'}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons
                  style={{marginRight: 10, color: 'black'}}
                  name="location-on"
                  size={20}
                />
                <Text style={{color: 'black'}}>Get directions</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                style={{color: 'black'}}
              />
            </View>
          </View>
          <View style={{marginTop: 10, backgroundColor: 'white', padding: 20}}>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                fontWeight: '500',
                marginBottom: 20,
              }}>
              Checking in & out
            </Text>
            <View
              style={{
                marginTop: 10,
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 15,
              }}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Check-in method
              </Text>
              <Text style={{color: 'black'}}>Keypad</Text>
            </View>
            <View
              style={{
                marginTop: 10,
                paddingVertical: 15,
              }}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                How to get inside
              </Text>
              <Text style={{color: 'black'}}>
                You'll find instruction to get inside here 48 hours befor check
                in
              </Text>
            </View>
          </View>
          <View style={{padding: 20, backgroundColor: 'white', marginTop: 10}}>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                fontWeight: '500',
                // marginBottom: 10,
              }}>
              Wifi
            </Text>
            <View
              style={{
                marginTop: 10,
                paddingVertical: 15,
              }}>
              <Text style={{color: 'black'}}>
                You'll find Wifi login details here 48 hours befor check in
              </Text>
            </View>
          </View>
          <View style={{padding: 20, backgroundColor: 'white', marginTop: 10}}>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                fontWeight: '500',
                marginBottom: 10,
              }}>
              Where you're staying
            </Text>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 15,
              }}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                House rule
              </Text>
              <Text style={{color: 'black'}}>6 guest maximum</Text>
              <Text style={{color: 'black'}}>No pets</Text>
              <Text style={{color: 'black'}}>Self check-in with keypad</Text>
              <Text style={{color: 'black', textDecorationLine: 'underline'}}>
                Show more
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Feather
                  style={{marginRight: 10, color: 'black'}}
                  name="monitor"
                  size={20}
                />
                <Text style={{color: 'black'}}>Show listing</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                style={{color: 'black'}}
              />
            </View>
          </View>
          <View style={{padding: 20, backgroundColor: 'white', marginTop: 10}}>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                fontWeight: '500',
                marginBottom: 10,
              }}>
              Find things to do near your stay
            </Text>
            <View style={{marginTop: 10}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Populer in Ho Chi Minh
              </Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({item}: any) => {
                  return (
                    <View style={{marginTop: 20, marginRight: 20}}>
                      <Image
                        source={item?.img}
                        style={{width: 100, height: 100, borderRadius: 10}}
                      />
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: 12,
                        }}>
                        {item?.name}
                      </Text>
                    </View>
                  );
                }}
              />
              <View
                style={{
                  borderTopColor: 'lightgrey',
                  borderTopWidth: 1,
                  marginTop: 40,
                }}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', marginTop: 20}}>
                  Top-rate Experiences
                </Text>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={data}
                  renderItem={({item}: any) => {
                    return (
                      <View style={{marginTop: 20, marginRight: 10}}>
                        <Image
                          source={item?.img}
                          style={{width: 180, height: 230, borderRadius: 10}}
                        />
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignSelf: 'flex-start',
                            marginTop: 10,
                          }}>
                          <Image
                            style={{width: 15, height: 15}}
                            source={require('../../assets/u_star.png')}
                          />
                          <Text style={{fontSize: 13}}>4.94</Text>
                        </View>
                        <Text
                          style={{
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: 12,
                          }}>
                          {item?.name}
                        </Text>
                        <Text
                          style={{
                            color: 'grey',
                            fontWeight: 'bold',
                            fontSize: 12,
                          }}>
                          from $27 / person
                        </Text>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{padding: 20, backgroundColor: 'white', marginTop: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 17,
                  fontWeight: '500',
                  marginBottom: 10,
                }}>
                Hosted by Stay & Fun
              </Text>
              <View style={{width: 40, height: 40, borderRadius: 50}}>
                <Image
                  style={{width: 40, height: 40, borderRadius: 50}}
                  source={require('../../assets/profile.png')}
                />
              </View>
            </View>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 15,
              }}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                About your host
              </Text>
              <Text
                style={{color: 'black', fontSize: 16, textAlign: 'justify'}}>
                we're a team of 5 who hyave good sence of art and are good at
                taking care of people so doing SnappStay is just the perfect
                business for as to do the thing....
              </Text>
              <Text
                style={{
                  color: 'black',
                  textDecorationLine: 'underline',
                  fontWeight: 'bold',
                }}>
                Show more
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  <Text style={{color: 'black'}}>Co-host</Text>
                  <Text style={{color: 'black'}}>Oanh,Long</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 40, height: 40, borderRadius: 50}}>
                  <Image
                    style={{width: 40, height: 40, borderRadius: 50}}
                    source={require('../../assets/profile.png')}
                  />
                </View>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                    marginLeft: -20,
                    borderWidth: 2,
                    borderColor: 'white',
                  }}>
                  <Image
                    style={{width: 40, height: 40, borderRadius: 50}}
                    source={require('../../assets/profile.png')}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Entypo
                  style={{marginRight: 10, color: 'black'}}
                  name="calculator"
                  size={20}
                />
                <Text style={{color: 'black'}}>Call Host</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                style={{color: 'black'}}
              />
            </View>
          </View>
          <View style={{padding: 20, backgroundColor: 'white', marginTop: 10}}>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                fontWeight: '500',
                marginBottom: 10,
              }}>
              Payment Info
            </Text>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 15,
              }}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Total cost
              </Text>
              <Text style={{color: 'black'}}>$76.63 USD</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons
                  style={{marginRight: 10, color: 'black'}}
                  name="add-box"
                  size={20}
                />
                <Text style={{color: 'black'}}>
                  Add detail for expensing you trip
                </Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                style={{color: 'black'}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                borderTopColor: 'lightgrey',
                borderTopWidth: 1,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome5
                  style={{marginRight: 10, color: 'black'}}
                  name="receipt"
                  size={20}
                />
                <Text style={{color: 'black'}}>Get receipt</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                style={{color: 'black'}}
              />
            </View>
          </View>
          <View style={{padding: 20, backgroundColor: 'white', marginTop: 10}}>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                fontWeight: '500',
                marginBottom: 10,
              }}>
              Get support anytime
            </Text>
            {/* <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 15,
              }}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Total cost
              </Text>
              <Text style={{color: 'black'}}>$76.63 USD</Text>
            </View> */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome5Brands
                  style={{marginRight: 10, color: 'black'}}
                  name="airbnb"
                  size={20}
                />
                <Text style={{color: 'black'}}>Contact Airbnb support</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                style={{color: 'black'}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                borderTopColor: 'lightgrey',
                borderTopWidth: 1,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Entypo
                  style={{marginRight: 10, color: 'black'}}
                  name="help-with-circle"
                  size={20}
                />
                <Text style={{color: 'black'}}>Visit the he lp center</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                style={{color: 'black'}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <Animated.View
        style={[
          style.AnimatedView,
          {
            // height: animateHeaderHeight,
            backgroundColor: animateHeaderBackgroundColor,
          },
        ]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            // borderWidth: 1,
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            // borderColor: 'lightgrey',
            backgroundColor: 'white',
          }}>
          <EvilIcons name={'close'} size={20} color="black" />
        </TouchableOpacity>
        <View />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            // onPress={() => navigation.goBack()}
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              backgroundColor: 'white',
              marginRight: 10,
            }}>
            <AntDesign name={'upload'} size={15} color={'black'} />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={gettingThere}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={style.centeredView}>
          <View style={[style.modalView, {height: 610, flex: 0}]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 6,
              }}>
              <View style={{width: '20%'}}>
                <TouchableOpacity
                  onPress={() => setGettingThere(false)}
                  style={{
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                  }}>
                  <Ionicons name={'close-sharp'} size={20} color="black" />
                </TouchableOpacity>
              </View>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
                Getting There
              </Text>
              <View style={{width: '20%'}} />
            </View>
            <View
              style={{
                width: '100%',
              }}>
              <Text style={{color: 'black', marginTop: 10, fontSize: 25}}>
                707 Bui Vien , Quan 1, Thanh pho Ho Chi Minh, Vietnam
              </Text>
              <Image
                style={{width: '100%', height: 300, marginTop: 20}}
                source={require('../../assets/staticmap.png')}
              />
            </View>
            <Button
              style={{marginTop: 20}}
              // onPress={() => navigation.navigate('Login')}
              title={'Get directions'}
            />
            <Button
              style={{marginTop: 20}}
              // onPress={() => navigation.navigate('Login')}
              title={'Copy Address'}
            />
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={thingToKnow}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 6,
              }}>
              <View style={{width: '20%'}}>
                <TouchableOpacity
                  onPress={() => setThingToKnow(false)}
                  style={{
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                  }}>
                  <Ionicons name={'close-sharp'} size={20} color="black" />
                </TouchableOpacity>
              </View>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
                Thing to know
              </Text>
              <View style={{width: '20%'}} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  width: '100%',
                }}>
                <Text
                  style={{
                    color: 'black',
                    marginTop: 10,
                    fontSize: 25,
                    fontWeight: '500',
                  }}>
                  House Rule
                </Text>
                <Text style={{color: 'black'}}>
                  Follow these rule to be considerate guest and avoid any issues
                  during you stay
                </Text>
                <View style={{marginTop: 20}}>
                  <Text
                    style={{
                      color: 'black',
                      marginTop: 10,
                      fontSize: 20,
                      fontWeight: '500',
                    }}>
                    Who can stay
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                      paddingVertical: 20,
                      borderBottomColor: 'lightgrey',
                      borderBottomWidth: 1,
                    }}>
                    <MaterialCommunityIcons
                      name="account-group-outline"
                      size={20}
                      color="black"
                    />
                    <Text style={{color: 'black', marginLeft: 10}}>
                      6 guest maximum
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                      paddingVertical: 20,
                    }}>
                    <Entypo name="baidu" size={20} color="black" />
                    <Text style={{color: 'black', marginLeft: 10}}>
                      No Peds
                    </Text>
                  </View>
                </View>
                <View style={{marginTop: 20}}>
                  <Text
                    style={{
                      color: 'black',
                      marginTop: 10,
                      fontSize: 20,
                      fontWeight: '500',
                    }}>
                    What's allowed
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                      paddingVertical: 20,
                      borderBottomColor: 'lightgrey',
                      borderBottomWidth: 1,
                    }}>
                    <Feather name="clock" size={20} color="black" />
                    <Text style={{color: 'black', marginLeft: 10}}>
                      Check-in after 1:00 PM
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                      paddingVertical: 20,
                      borderBottomColor: 'lightgrey',
                      borderBottomWidth: 1,
                    }}>
                    <Feather name="clock" size={20} color="black" />
                    <Text style={{color: 'black', marginLeft: 10}}>
                      {' '}
                      Check-out before 11:00 AM
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                      paddingVertical: 20,
                      borderBottomColor: 'lightgrey',
                      borderBottomWidth: 1,
                    }}>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        marginRight: 10,
                        tintColor: 'black',
                      }}
                      source={require('../../assets/Vectors.png')}
                    />
                    <Text style={{color: 'black'}}>
                      Self Check-in with keypad
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                      paddingVertical: 20,
                      borderBottomColor: 'lightgrey',
                      borderBottomWidth: 1,
                    }}>
                    <MaterialCommunityIcons
                      name="lightbulb-off-outline"
                      size={20}
                      color="black"
                    />
                    <Text style={{color: 'black', marginLeft: 10}}>
                      No parties or event
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                      paddingVertical: 20,
                    }}>
                    <MaterialCommunityIcons
                      name="smoking-off"
                      size={20}
                      color="black"
                    />
                    <Text style={{color: 'black', marginLeft: 10}}>
                      No Smoking
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={messageModal}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'space-between',
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 6,
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => setMessageModal(false)}
                  style={{
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                  }}>
                  <Ionicons name={'close-sharp'} size={20} color="black" />
                </TouchableOpacity>
              </View>
              <View style={{marginLeft: 10}}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  Stay & fun Oanh, and Long
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    fontWeight: 'bold',
                    // fontSize: 1,
                  }}>
                  Response time:1 hour
                </Text>
              </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  width: '100%',
                }}>
                <Text
                  style={{
                    color: 'black',
                    marginTop: 10,
                    fontSize: 25,
                    fontWeight: '500',
                  }}>
                  House Rule
                </Text>
                <Text style={{color: 'black'}}>
                  Follow these rule to be considerate guest and avoid any issues
                  during you stay
                </Text>
                <View style={{marginTop: 20}}>
                  <Text
                    style={{
                      color: 'black',
                      marginTop: 10,
                      fontSize: 20,
                      fontWeight: '500',
                    }}>
                    Who can stay
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                      paddingVertical: 20,
                      borderBottomColor: 'lightgrey',
                      borderBottomWidth: 1,
                    }}>
                    <MaterialCommunityIcons
                      name="account-group-outline"
                      size={20}
                      color="black"
                    />
                    <Text style={{color: 'black', marginLeft: 10}}>
                      6 guest maximum
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                      paddingVertical: 20,
                    }}>
                    <Entypo name="baidu" size={20} color="black" />
                    <Text style={{color: 'black', marginLeft: 10}}>
                      No Peds
                    </Text>
                  </View>
                </View>
                <View style={{marginTop: 20}}>
                  <Text
                    style={{
                      color: 'black',
                      marginTop: 10,
                      fontSize: 20,
                      fontWeight: '500',
                    }}>
                    What's allowed
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                      paddingVertical: 20,
                      borderBottomColor: 'lightgrey',
                      borderBottomWidth: 1,
                    }}>
                    <Feather name="clock" size={20} color="black" />
                    <Text style={{color: 'black', marginLeft: 10}}>
                      Check-in after 1:00 PM
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                      paddingVertical: 20,
                      borderBottomColor: 'lightgrey',
                      borderBottomWidth: 1,
                    }}>
                    <Feather name="clock" size={20} color="black" />
                    <Text style={{color: 'black', marginLeft: 10}}>
                      {' '}
                      Check-out before 11:00 AM
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                      paddingVertical: 20,
                      borderBottomColor: 'lightgrey',
                      borderBottomWidth: 1,
                    }}>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        marginRight: 10,
                        tintColor: 'black',
                      }}
                      source={require('../../assets/Vectors.png')}
                    />
                    <Text style={{color: 'black'}}>
                      Self Check-in with keypad
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                      paddingVertical: 20,
                      borderBottomColor: 'lightgrey',
                      borderBottomWidth: 1,
                    }}>
                    <MaterialCommunityIcons
                      name="lightbulb-off-outline"
                      size={20}
                      color="black"
                    />
                    <Text style={{color: 'black', marginLeft: 10}}>
                      No parties or event
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                      paddingVertical: 20,
                    }}>
                    <MaterialCommunityIcons
                      name="smoking-off"
                      size={20}
                      color="black"
                    />
                    <Text style={{color: 'black', marginLeft: 10}}>
                      No Smoking
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity>
                <Foundation name="photo" size={20} color="black" />
              </TouchableOpacity>
              <View
                style={{
                  marginLeft: 20,
                  borderRadius: 50,
                  paddingHorizontal: 10,
                  height: 40,
                  width: '90%',
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                }}>
                <TextInput placeholder="Write a message" />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={whoComing}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'space-between',
                // borderBottomColor: 'lightgrey',
                // borderBottomWidth: 1,
                paddingVertical: 6,
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => setWhoComing(false)}
                  style={{
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                  }}>
                  <Ionicons name={'close-sharp'} size={20} color="black" />
                </TouchableOpacity>
              </View>
              {/* <View style={{marginLeft: 10}}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  Stay & fun Oanh, and Long
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    fontWeight: 'bold',
                    // fontSize: 1,
                  }}>
                  Response time:1 hour
                </Text>
              </View> */}
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  width: '100%',
                }}>
                <Text
                  style={{
                    color: 'black',
                    marginTop: 10,
                    fontSize: 25,
                    fontWeight: 'bold',
                  }}>
                  Who's coming?
                </Text>
                <Text style={{color: 'black'}}>
                  Before saving, let's make sure we have the first and last name
                  of all travelers, Use a comma after each full name
                </Text>
                <View
                  style={{
                    // marginLeft: 20,
                    marginTop: 20,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    height: 40,
                    width: '100%',
                    borderColor: 'lightgrey',
                    borderWidth: 1,
                  }}>
                  <TextInput placeholder="Ex:clara smith, jim smith" />
                </View>
              </View>
            </ScrollView>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                // paddingVertical: 8,
                paddingHorizontal: 20,
                marginTop: 10,
                borderTopColor: 'lightgrey',
                borderTopWidth: 1,
              }}>
              <Button
                // onPress={() => navigation.navigate('MyTabs')}
                style={{marginTop: 20, paddingVertical: 10, width: 100}}
                title={'Next'}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={hostModal}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'space-between',
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 6,
                marginBottom: 20,
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => setHostModal(false)}
                  style={{
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                  }}>
                  <Ionicons name={'close-sharp'} size={20} color="black" />
                </TouchableOpacity>
              </View>
              {/* <View style={{marginLeft: 10}}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  Stay & fun Oanh, and Long
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    fontWeight: 'bold',
                    // fontSize: 1,
                  }}>
                  Response time:1 hour
                </Text>
              </View> */}
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  width: '100%',
                }}>
                <View style={{width: 100, height: 100, borderRadius: 50}}>
                  <Image
                    style={{width: 100, height: 100, borderRadius: 50}}
                    source={require('../../assets/profile.png')}
                  />
                </View>
                <Text
                  style={{
                    color: 'black',
                    marginTop: 10,
                    fontSize: 25,
                    fontWeight: 'bold',
                  }}>
                  Hi! i'm Stay & fun
                </Text>
                <Text style={{color: 'grey', fontSize: 18}}>
                  Joined in 2015
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <Ionicons name="star-sharp" size={18} color="black" />
                  <Text style={{color: 'black', fontSize: 16, marginLeft: 10}}>
                    625 reviews
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <MaterialIcons name="verified-user" size={18} color="black" />
                  <Text style={{color: 'black', fontSize: 16, marginLeft: 10}}>
                    Identity verified
                  </Text>
                </View>
                <View
                  style={{
                    borderBottomColor: 'lightgrey',
                    borderBottomWidth: 1,
                    marginTop: 40,
                  }}
                />
                <View style={{marginTop: 20}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialCommunityIcons
                      name="google-translate"
                      size={20}
                      color="black"
                    />
                    <View>
                      <Text style={{marginLeft: 10}}>
                        Some info is show in it's original language
                      </Text>
                      <Text
                        style={{
                          textDecorationLine: 'underline',
                          color: 'black',
                          fontWeight: 'bold',
                          marginLeft: 10,
                          marginTop: 5,
                        }}>
                        Translate
                      </Text>
                    </View>
                  </View>
                  <View style={{marginTop: 20}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 30,
                        fontWeight: 'bold',
                        marginBottom: 20,
                      }}>
                      About
                    </Text>
                    <Text
                      style={{
                        textAlign: 'justify',
                        fontSize: 17,
                        color: 'black',
                      }}>
                      We're a team of 5 who have good sence of art, and are good
                      at taking care of people, so doing SnappStay is just a
                      perfect business for us do...
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 25,
                      }}>
                      <Ionicons name="home-sharp" size={20} color="black" />
                      <Text style={{color: 'black', marginLeft: 20}}>
                        Live in Ho Chi Minh City, Vietnam
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 25,
                      }}>
                      <AntDesign name="earth" size={20} color="black" />
                      <Text style={{color: 'black', marginLeft: 20}}>
                        Speacks English
                      </Text>
                    </View>
                    <View
                      style={{
                        borderBottomColor: 'lightgrey',
                        borderBottomWidth: 1,
                        marginTop: 40,
                      }}
                    />
                    <View style={{marginTop: 20}}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 30,
                          fontWeight: 'bold',
                          marginBottom: 16,
                        }}>
                        Stay & fun confirmed
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 20,
                        }}>
                        <Image
                          source={require('../../assets/check.png')}
                          style={{tintColor: 'black', width: 15, height: 15}}
                        />
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 16,
                            marginLeft: 10,
                          }}>
                          Identity
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 20,
                        }}>
                        <Image
                          source={require('../../assets/check.png')}
                          style={{tintColor: 'black', width: 15, height: 15}}
                        />
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 16,
                            marginLeft: 10,
                          }}>
                          Email address
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 20,
                        }}>
                        <Image
                          source={require('../../assets/check.png')}
                          style={{tintColor: 'black', width: 15, height: 15}}
                        />
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 16,
                            marginLeft: 10,
                          }}>
                          Phone number
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        borderBottomColor: 'lightgrey',
                        borderBottomWidth: 1,
                        marginTop: 40,
                      }}
                    />
                    <View>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 30,
                          fontWeight: 'bold',
                          marginTop: 16,
                        }}>
                        Stay & fun's listings
                      </Text>
                      <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={flatListData}
                        renderItem={({item}: any) => {
                          return (
                            <View style={{marginTop: 20, marginRight: 10}}>
                              <Image
                                style={{
                                  width: 200,
                                  height: 120,
                                  borderRadius: 10,
                                }}
                                source={item?.img}
                              />
                              <View>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: 10,
                                  }}>
                                  <Ionicons
                                    name="star-sharp"
                                    size={18}
                                    color="black"
                                  />
                                  <Text style={{marginLeft: 5}}>4.86(110)</Text>
                                </View>
                                <Text style={{fontSize: 15, color: 'black'}}>
                                  {item?.name}
                                </Text>
                              </View>
                              <TouchableOpacity
                                style={{
                                  position: 'absolute',
                                  top: 5,
                                  right: 10,
                                }}
                                // onPress={() => {
                                //   if (heart != item?.id) {
                                //     setHeart(item?.id);
                                //     setModalVisible(true);
                                //   } else {
                                //     setHeart(item?.id);
                                //   }
                                // }}
                              >
                                <Entypo
                                  name={'heart'}
                                  size={20}
                                  color={'black'}
                                />
                              </TouchableOpacity>
                            </View>
                          );
                        }}
                      />
                    </View>
                    <View
                      style={{
                        borderBottomColor: 'lightgrey',
                        borderBottomWidth: 1,
                        marginTop: 40,
                      }}
                    />
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 30,
                        fontWeight: 'bold',
                        marginTop: 16,
                      }}>
                      625 reviews
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const style = StyleSheet.create({
  AnimatedView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    // backgroundColor: 'white',
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  centeredView: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginTop: 22,
    // shadowColor: '#000',
    // padding: 10,
    // backgroundColor: 'red',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    flex: 1,
    // margin: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
    // padding: 35,
    // height: 300,
    padding: 20,
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // alignItems: 'center',
    // shadowColor: '#000',
    // padding: 20,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default TripDetail;
