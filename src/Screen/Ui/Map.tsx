import React, {useEffect, useRef, useState, useMemo, useCallback} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MapView, {PROVIDER_GOOGLE, Polyline, Marker} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';
import {TouchableWithoutFeedback} from 'react-native';
const height = Dimensions.get('window').height;
const Map = props => {
  const [select, setSelect] = useState(1);
  const navigation = useNavigation();
  const panelRef = useRef(null);
  const [heart, setHeart] = useState<number>();
  const [condition, setCondition] = useState(true);
  // const { posts } = props;
  const posts = [
    {
      id: '0',
      image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
      type: 'Private Room',
      title: 'Bright room in the heart of the city',
      description:
        "Lorem Ipsum is simplyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      bed: 2,
      bedroom: 3,
      oldPrice: 25,
      newPrice: 20,
      totalPrice: 120,
      coordinate: {
        latitude: 28.3915637,
        longitude: -16.6291304,
      },
    },
    {
      id: '1',
      image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg',
      type: 'Entire Flat',
      title: 'NEW lux. apartment in the center of Santa Cruz',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      bed: 3,
      bedroom: 2,
      oldPrice: 76,
      newPrice: 65,
      totalPrice: 390,
      coordinate: {
        latitude: 28.4815637,
        longitude: -16.2291304,
      },
    },
    {
      id: '2',
      image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/3.jpg',
      type: 'Private Property',
      title: 'Green House Santa Cruz',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      bed: 2,
      bedroom: 1,
      oldPrice: 64,
      newPrice: 55,
      totalPrice: 330,
      coordinate: {
        latitude: 28.2515637,
        longitude: -16.3991304,
      },
    },
    {
      id: '3',
      image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/4.jpg',
      type: 'Entire Flat',
      title: 'Typical canarian house',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      bed: 4,
      bedroom: 3,
      oldPrice: 120,
      newPrice: 100,
      totalPrice: 600,
      coordinate: {
        latitude: 28.4815637,
        longitude: -16.2991304,
      },
    },
  ];

  // variables
  const snapPoints = useMemo(() => ['8%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const flatList = useRef();
  const map = useRef();

  const viewConfig = useRef({itemVisiblePercentThreshold: 70});

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: viewConfig.current,
      onViewableItemsChanged: onViewableItemsChanged,
    },
  ]);

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  const width = useWindowDimensions().width;
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
  useEffect(() => {
    if (!selectedPlaceId || !flatList) {
      return;
    }
    const index = posts.findIndex(place => place.id === selectedPlaceId);
    flatList.current.scrollToIndex({index});

    const selectedPlace = posts[index];
    console.log(selectedPlace);
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current.animateToRegion(region);
  }, [selectedPlaceId]);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            marginRight: 5,
          }}>
          <EvilIcons name={'chevron-left'} size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('WhereTo')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 13,
            borderRadius: 50,
            width: '90%',
            paddingVertical: 6,
            backgroundColor: '#f7f7f7',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name="search1" size={20} style={{marginRight: 20}} />
            <View>
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                Where to?
              </Text>
              <Text>AnyWhere , AnyWhere , Add guest </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <MapView
          ref={map}
          style={{width: '100%', height: '100%'}}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 28.3279822,
            longitude: -16.5124847,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
          }}>
          {posts.map(place => (
            <CustomMarker
              coordinate={{
                latitude: place.coordinate.latitude,
                longitude: place.coordinate.longitude,
              }}
              key={place.id}
              price={place.newPrice}
              isSelected={place.id === selectedPlaceId}
              onPress={() => setSelectedPlaceId(place.id)}
            />
          ))}
        </MapView>
      </View>
      <View style={{position: 'absolute', bottom: 30}}>
        <FlatList
          ref={flatList}
          data={posts}
          keyExtractor={item => item.id}
          renderItem={({item}: any) => (
            <PostCarouselItem post={item} key={item.id} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          // viewabilityConfig={viewConfig.current}
          // onViewableItemsChanged={onViewChanged.current}
        />
      </View>
      {/* {condition ? (
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
      ) : null} */}

      {/* <BottomSheet ref={ref => (panelRef.current = ref)}>
        {onScrollEndDrag => (
          <ScrollView
            showsVerticalScrollIndicator={false}
            onScrollEndDrag={onScrollEndDrag}>
             {[...Array(10)].map((_, index) => (
              <View key={`${index}`} style={styles.listItem}>
                <Text>{`List Item ${index + 1}`}</Text>
              </View>
            ))} 
            <View style={{flex: 1}}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: '20',
                }}>
                {`${posts.length} Tropical Homes`}
              </Text>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={posts}
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
                        source={{uri: item?.image}}
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
                            {item?.title}
                          </Text>
                          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                            {item?.totalPrice}{' '}
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
                        // onPress={() => {
                        //   if (heart != item?.id) {
                        //     setHeart(item?.id);
                        //   } else {
                        //     setHeart(item?.id);
                        //   }
                        // }}
                        >
                          <Entypo
                            name={
                              heart === item?.id ? 'heart' : 'heart-outlined'
                            }
                            size={20}
                            color={heart === item?.id ? 'red' : 'white'}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </ScrollView>
        )}
      </BottomSheet> */}
      <BottomSheet
        ref={panelRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 20,
              fontSize: 18,
            }}>
            {`${posts?.length} Tropical Homes`}
          </Text>
          <BottomSheetScrollView
          // showsVerticalScrollIndicator={false}
          >
            <View style={{flex: 1, paddingHorizontal: 20}}>
              {/* <BottomSheetScrollView>
                {posts.map(item => {
                  console.log('item', item);
                  return (
                    <TouchableWithoutFeedback
                      onPress={() => navigation.navigate('SnappCover')}>
                      <View
                        style={{
                          marginBottom: 10,
                          marginTop: 20,
                        }}>
                        <Image
                          style={{
                            width: 370,
                            height: 370,
                            borderRadius: 20,
                          }}
                          source={{uri: item?.image}}
                        />
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                            paddingHorizontal: 10,
                          }}>
                          <View>
                            <Text style={{fontSize: 15, color: 'black'}}>
                              {item?.title}
                            </Text>
                            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                              {item?.totalPrice}{' '}
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
                        <View
                          style={{position: 'absolute', top: 20, right: 20}}>
                          <TouchableOpacity>
                            <Entypo
                              name={
                                heart === item?.id ? 'heart' : 'heart-outlined'
                              }
                              size={20}
                              color={heart === item?.id ? 'red' : 'white'}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </BottomSheetScrollView> */}
              <FlatList
                // showsVerticalScrollIndicator={false}
                data={posts}
                renderItem={({item}) => {
                  return (
                    <TouchableWithoutFeedback
                      onPress={() => navigation.navigate('SnappCover')}>
                      <View
                        style={{
                          marginBottom: 10,
                          marginTop: 20,
                        }}>
                        <Image
                          style={{
                            width: 370,
                            height: 370,
                            borderRadius: 20,
                          }}
                          source={{uri: item?.image}}
                        />
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                            paddingHorizontal: 10,
                          }}>
                          <View>
                            <Text style={{fontSize: 15, color: 'black'}}>
                              {item?.title}
                            </Text>
                            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                              {item?.totalPrice}{' '}
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
                        <View
                          style={{position: 'absolute', top: 20, right: 20}}>
                          <TouchableOpacity>
                            <Entypo
                              name={
                                heart === item?.id ? 'heart' : 'heart-outlined'
                              }
                              size={20}
                              color={heart === item?.id ? 'red' : 'white'}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                }}
              />
            </View>
          </BottomSheetScrollView>
        </View>
      </BottomSheet>
    </View>
  );
};
export default Map;
