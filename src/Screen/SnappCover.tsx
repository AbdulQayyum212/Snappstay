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
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Carousel} from 'react-native-ui-lib';
const width = Dimensions.get('window').width;
const SnappCover = () => {
  const navigation = useNavigation();
  const data = [
    {
      img: require('../assets/Rectangle.png'),
    },
    {
      img: require('../assets/Rectangle.png'),
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{height: 300}}>
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
                height: 300,
                // borderRadius: 20,
              }}
              source={require('../assets/1.jpg')}
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
          <Text style={{color: 'black', fontSize: 20}}>Houston, Taxas</Text>
          <Text style={{color: '#999999', fontSize: 12}}>
            5.0, 105 reviews Supperhot
          </Text>
          <Text style={{color: '#999999', fontSize: 12}}>Huston, Texas</Text>
          <View
            style={{borderWidth: 1, borderColor: '#999999', marginTop: 20}}
          />
          <View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{width: '60%', color: 'black'}}>
                Room in boutique hotel hosted by Carles Gomez
              </Text>
              <View style={{width: 50, height: 50, borderRadius: 50}}>
                <Image
                  style={{width: 50, height: 50, borderRadius: 50}}
                  source={require('../assets/profile.png')}
                />
              </View>
            </View>
            <Text style={{width: '52%', color: '#999999'}}>
              2 guests · 2bedrooms · 2beds 2 private bath
            </Text>
          </View>
          <View
            style={{borderWidth: 1, borderColor: '#999999', marginTop: 20}}
          />
          <View style={{marginTop: 20}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                  tintColor: 'black',
                }}
                source={require('../assets/Vectors.png')}
              />
              <Text style={{color: 'black'}}>Self Check-in</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                  tintColor: 'black',
                }}
                source={require('../assets/u_map-marker-alt.png')}
              />
              <View>
                <Text style={{color: 'black'}}>Great location</Text>
                <Text style={{color: '#999999', width: '60%'}}>
                  100% of recent guests gave the location a 5-star rating.n
                </Text>
                <Text style={{color: '#999999'}}>
                  Free cancellation before Feb 23.
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{borderWidth: 1, borderColor: '#999999', marginTop: 20}}
          />
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>SnappCover</Text>
            <Text style={{color: '#999999', fontSize: 16, marginTop: 10}}>
              Lorem ipsum dolor sit amet consectetur. Elit velit in sit eu amet
              justo. Eros a eget nisl risus ac. Consequat pellentesque amet
              aenean pellentesque egestas massa.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View>
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
                source={require('../assets/u_star.png')}
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
      </View>
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
          <EvilIcons name={'chevron-left'} size={20} color="black" />
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
          <TouchableOpacity
            // onPress={() => navigation.goBack()}
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              backgroundColor: 'white',
            }}>
            <Entypo name={'heart-outlined'} size={15} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default SnappCover;
