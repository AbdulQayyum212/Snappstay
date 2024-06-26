import CustomMarker from '@components/CustomMarker';
import ListItem from '@components/ListItem';
import PostCarouselItem from '@components/PostCarouselItem';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Property} from '@type/property';
import {PropertyListResponse} from '@type/properyListResponse';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewabilityConfigCallbackPairs,
  useWindowDimensions,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {FlatListPropsWithLayout} from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import tw from 'twrnc';
const {width, height} = Dimensions.get('window');

const Map = () => {
  const [select, setSelect] = useState(1);
  const navigation = useNavigation();
  const route = useRoute();
  const panelRef = useRef(null);
  const [heart, setHeart] = useState<number>();
  const [condition, setCondition] = useState(true);

  const posts = route.params.posts as Property[];
  // const posts = [
  //   {
  //     id: '0',
  //     image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  //     type: 'Private Room',
  //     title: 'Bright room in the heart of the city',
  //     description:
  //       "Lorem Ipsum is simplyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     bed: 2,
  //     bedroom: 3,
  //     oldPrice: 25,
  //     newPrice: 20,
  //     totalPrice: 120,
  //     coordinate: {
  //       latitude: 28.3915637,
  //       longitude: -16.6291304,
  //     },
  //   },
  //   {
  //     id: '1',
  //     image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg',
  //     type: 'Entire Flat',
  //     title: 'NEW lux. apartment in the center of Santa Cruz',
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     bed: 3,
  //     bedroom: 2,
  //     oldPrice: 76,
  //     newPrice: 65,
  //     totalPrice: 390,
  //     coordinate: {
  //       latitude: 28.4815637,
  //       longitude: -16.2291304,
  //     },
  //   },
  //   {
  //     id: '2',
  //     image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/3.jpg',
  //     type: 'Private Property',
  //     title: 'Green House Santa Cruz',
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     bed: 2,
  //     bedroom: 1,
  //     oldPrice: 64,
  //     newPrice: 55,
  //     totalPrice: 330,
  //     coordinate: {
  //       latitude: 28.2515637,
  //       longitude: -16.3991304,
  //     },
  //   },
  //   {
  //     id: '3',
  //     image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/4.jpg',
  //     type: 'Entire Flat',
  //     title: 'Typical canarian house',
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     bed: 4,
  //     bedroom: 3,
  //     oldPrice: 120,
  //     newPrice: 100,
  //     totalPrice: 600,
  //     coordinate: {
  //       latitude: 28.4815637,
  //       longitude: -16.2991304,
  //     },
  //   },
  // ];

  // variables
  const snapPoints = useMemo(() => ['8%', '90%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const [selectedPlaceId, setSelectedPlaceId] = useState<number>(0);

  const flatList = useRef<FlatList>(null);
  const map = useRef<MapView>(null);

  const viewConfig = useRef({
    // minimumViewTime: 500,
    itemVisiblePercentThreshold: 70,
  });

  const onViewableItemsChanged = useCallback(({viewableItems}: any) => {
    console.log('onViewCallBack', viewableItems);
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  }, []);

  const viewabilityConfigCallbackPairs = useRef<ViewabilityConfigCallbackPairs>(
    [
      {
        viewabilityConfig: viewConfig.current,
        onViewableItemsChanged: onViewableItemsChanged,
      },
    ],
  );

  const width = useWindowDimensions().width;
  const FlatListData = [
    {
      id: 1,
      name: 'Tropical',
      img: require('@assets/Rectangle.png'),
    },
    {
      id: 2,
      name: 'OMG!',
      img: require('@assets/Rectangle.png'),
    },
    {
      id: 3,
      name: 'Tiny Homes ',
      img: require('@assets/Rectangle.png'),
    },
    {
      id: 4,
      name: 'Lake',
      img: require('@assets/Rectangle.png'),
    },
    {
      id: 5,
      name: 'Mansions',
      img: require('@assets/Rectangle.png'),
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
    if (!selectedPlaceId || !flatList.current) {
      return;
    }
    const index = posts.findIndex(place => place.id === selectedPlaceId);
    flatList.current.scrollToIndex({index});

    const selectedPlace = posts[index];
    console.log(selectedPlace);
    const region = {
      latitude: parseFloat(selectedPlace.lat),
      longitude: parseFloat(selectedPlace.long),
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current?.animateToRegion(region);
  }, [selectedPlaceId]);
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
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
              <AntDesign
                color={'black'}
                name="search1"
                size={20}
                style={{marginRight: 20}}
              />
              <View>
                <Text style={{fontWeight: 'bold', color: 'black'}}>
                  Where to?
                </Text>
                <Text style={tw`text-black`}>
                  AnyWhere , AnyWhere , Add guest{' '}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <MapView
          ref={map}
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 28.3279822,
            longitude: -16.5124847,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
          }}>
          {posts?.map(place => (
            <CustomMarker
              coordinate={{
                latitude: parseFloat(place.lat),
                longitude: parseFloat(place.long),
              }}
              key={place.id}
              price={place.price}
              isSelected={place.id === selectedPlaceId}
              onPress={() => setSelectedPlaceId(place.id)}
            />
          ))}
        </MapView>
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
        <BottomSheet
          // animateOnMount={false}
          ref={panelRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <BottomSheetFlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 16}}
            ListHeaderComponent={
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
            }
            data={posts}
            renderItem={({item}) => {
              return <ListItem item={item} />;
            }}
          />
          {/* </View> */}
          {/* </View> */}
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};
export default Map;
