import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {Carousel} from 'react-native-ui-lib';
const width = Dimensions.get('window').width;
const TripDetail = () => {
  const navigation = useNavigation();
  const data = [
    {
      img: require('../../assets/Rectangle.png'),
    },
    {
      img: require('../../assets/Rectangle.png'),
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20}}>
        <View style={{}}>
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
      </ScrollView>
      {/* <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 10,
            borderTopWidth: 1,
            borderTopColor: 'lightgrey',
            paddingHorizontal: 20,
          }}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 'bold',
                  marginRight: 5,
                }}>
                $56
              </Text>
              <Text>night</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../assets/u_star.png')}
              />
              <Text>4.94</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ConfirmPay')}
            style={{
              backgroundColor: 'rgb(183, 43, 95)',
              paddingVertical: 10,
              alignItems: 'center',
              borderRadius: 10,
              width: 150,
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <Text style={{color: 'white'}}>Check availability</Text>
          </TouchableOpacity>
        </View>
      </View> */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 10,
          paddingHorizontal: 10,
          // backgroundColor: 'red',
          width: '100%',
          position: 'absolute',
          top: 0,
        }}>
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
      </View>
    </View>
  );
};
export default TripDetail;
