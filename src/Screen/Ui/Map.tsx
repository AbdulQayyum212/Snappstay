import React, {useRef, useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomSheet from 'react-native-simple-bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MapView, {PROVIDER_GOOGLE, Polyline, Marker} from 'react-native-maps';
const height = Dimensions.get('window').height;
const Map = () => {
  const [select, setSelect] = useState(1);
  const navigation = useNavigation();
  const panelRef = useRef(null);
  const [condition, setCondition] = useState(true);
  const FlatListData = [
    {
      id: 1,
      name: 'Tropical',
      img: require('../../assets/Rectangle.png'),
    },
    {
      id: 2,
      name: 'OMG!',
      img: require('../../assets/Rectangle.png'),
    },
    {
      id: 3,
      name: 'Tiny Homes ',
      img: require('../../assets/Rectangle.png'),
    },
    {
      id: 4,
      name: 'Lake',
      img: require('../../assets/Rectangle.png'),
    },
    {
      id: 5,
      name: 'Mansions',
      img: require('../../assets/Rectangle.png'),
    },
  ];
  const coordinates = [
    {
      latitude: 24.910688,
      longitude: 67.0310973,
    },
    {
      latitude: 24.910688,
      longitude: 67.0310973,
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('WhereTo')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 13,
            borderRadius: 50,
            width: '100%',
            paddingVertical: 6,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                marginRight: 5,
                // flex: 1,
                // borderWidth: 1,
                // width: 30,
                // height: 30,
                // alignItems: 'center',
                // justifyContent: 'center',
                // borderRadius: 50,
                // borderColor: 'lightgrey',
              }}>
              <EvilIcons name={'chevron-left'} size={30} color="black" />
            </TouchableOpacity>
            <AntDesign name="search1" size={20} style={{marginRight: 20}} />
            <View>
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                Where to?
              </Text>
              <Text>AnyWhere , AnyWhere , Add guest </Text>
            </View>
          </View>
          <AntDesign name="menu-fold" size={20} />
        </TouchableOpacity>
      </View>
      <View>
        {/* <Image
          style={{width: '100%', height: 670}}
          source={require('../../assets/staticmap.png')}
        /> */}
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{width: '100%', height: height}}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker coordinate={coordinates[0]} />
          <Marker coordinate={coordinates[1]} />
          <Polyline
            strokeWidth={2}
            strokeColor="#000"
            strokeColors={['black']}
            coordinates={coordinates}
          />
        </MapView>
      </View>
      {/* <View>Your content</View> */}
      {/* <TouchableOpacity onPress={() => panelRef.current.togglePanel()}>
        <Text>Toggle</Text>
      </TouchableOpacity> */}
      {condition ? (
        <View
          style={{
            padding: 10,
            alignItems: 'center',
            position: 'absolute',
            bottom: 50,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SnappCover')}
            style={{
              width: '100%',
              height: 110,
              backgroundColor: 'white',
              borderRadius: 15,
              // position: 'absolute',
              overflow: 'hidden',
              flexDirection: 'row',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              // alignItems: 'center',
            }}>
            <Image
              resizeMode="cover"
              style={{width: 110, height: 110}}
              source={require('../../assets/Rectangle2.png')}
            />
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                width: '71%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Private room in Quan 3{' '}
                </Text>
                <View>
                  <TouchableOpacity
                  // onPress={() => {
                  //   if (heart != item?.id) {
                  //     setHeart(item?.id);
                  //   } else {
                  //     setHeart(item?.id);
                  //   }
                  // }}
                  >
                    <Entypo
                      // name={heart === item?.id ? 'heart' : 'heart-outlined'}
                      name={'heart-outlined'}
                      size={20}
                      // color={heart === item?.id ? 'red' : 'white'}
                      color={'black'}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={{}}>Studio Apartment in M Village </Text>
              <Text style={{}}>1 bed </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 12,
                }}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  $50 <Text style={{color: 'grey'}}>night</Text>
                </Text>
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
            </View>
            <TouchableOpacity
              onPress={() => setCondition(false)}
              style={{
                borderWidth: 1,
                width: 25,
                height: 25,
                alignItems: 'center',
                position: 'absolute',
                top: 10,
                justifyContent: 'center',
                left: 10,
                borderRadius: 20,
                // borderRadius: 50,
                // borderColor: 'lightgrey',
                // alignSelf: 'flex-start',
                // marginLeft: 21,
                // marginBottom: 21,
                backgroundColor: 'rgba(52, 52, 52, 0.8)',
              }}>
              <EvilIcons name={'close'} size={20} color="white" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      ) : null}
      <BottomSheet ref={ref => (panelRef.current = ref)}>
        {onScrollEndDrag => (
          <ScrollView onScrollEndDrag={onScrollEndDrag}>
            {/* {[...Array(10)].map((_, index) => (
              <View key={`${index}`} style={styles.listItem}>
                <Text>{`List Item ${index + 1}`}</Text>
              </View>
            ))} */}
            <Text style={{paddingVertical: 20}}>633 tropical homes</Text>
            <Text style={{paddingVertical: 20}}>633 tropical homes</Text>
            <Text style={{paddingVertical: 20}}>633 tropical homes</Text>
            <Text style={{paddingVertical: 20}}>633 tropical homes</Text>
            <Text style={{paddingVertical: 20}}>633 tropical homes</Text>
            <Text style={{paddingVertical: 20}}>633 tropical homes</Text>
            <Text style={{paddingVertical: 20}}>633 tropical homes</Text>
            <Text style={{paddingVertical: 20}}>633 tropical homes</Text>
            <Text style={{paddingVertical: 20}}>633 tropical homes</Text>
            <Text style={{paddingVertical: 20}}>633 tropical homes</Text>
            <Text style={{paddingVertical: 20}}>633 tropical homes</Text>
            <Text style={{paddingVertical: 20}}>633 tropical homes</Text>
            <Text style={{paddingVertical: 20}}>633 tropical homes</Text>
            <Text style={{paddingVertical: 20}}>633 tropical homes</Text>
            <Text style={{paddingVertical: 20}}>633 tropical homes</Text>
          </ScrollView>
        )}
      </BottomSheet>
      {/* <View style={{flex: 1}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginBottom: 10,
                    marginTop: 20,
                    // backgroundColor: 'red',
                  }}>
                  <Image
                    style={{
                      width: 370,
                      height: 370,
                      borderRadius: 20,
                    }}
                    source={item?.img}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      // alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: 10,
                      paddingHorizontal: 10,
                    }}>
                    <View>
                      <Text style={{fontSize: 15, color: 'black'}}>
                        {item?.title1}
                      </Text>
                      <Text style={{color: '#999999'}}>{item?.title2}</Text>
                      <Text style={{color: '#999999'}}>{item?.title3}</Text>
                      <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                        {item?.price}{' '}
                        <Text style={{color: '#999999'}}>{item?.title4}</Text>
                      </Text>
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
                  <View style={{position: 'absolute', top: 20, right: 20}}>
                    <TouchableOpacity
                      onPress={() => {
                        if (heart != item?.id) {
                          setHeart(item?.id);
                        } else {
                          setHeart(item?.id);
                        }
                      }}>
                      <Entypo
                        name={heart === item?.id ? 'heart' : 'heart-outlined'}
                        size={20}
                        color={heart === item?.id ? 'red' : 'white'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View> */}
    </View>
  );
};
export default Map;
