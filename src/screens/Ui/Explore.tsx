import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Carousel, Image, TextField, View} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {Button} from '@components/Button';
import {ModalHeader} from '@components/Header';
import useGetRequest from '@hooks/useGetRequest';
import {PropertyListResponse} from '@type/properyListResponse';
import ListItem from '@components/ListItem';
const width = Dimensions.get('window').width;
const Explore = () => {
  const navigation = useNavigation();
  const [select, setSelect] = useState<number>(1);
  const [heart, setHeart] = useState<number>();
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState<string>('');
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});

  const onViewableItemsChanged = useCallback(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  }, []);
  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: viewConfig.current,
      onViewableItemsChanged: onViewableItemsChanged,
    },
  ]);

  const {data, loading, error} = useGetRequest<PropertyListResponse>({
    url: 'https://www.snappstay.com/api/all/properties',
  });

  const FlatListData = [
    {
      id: 1,
      name: 'Trending',
      img: require('@assets/Trending.png'),
    },
    {
      id: 2,
      name: 'Castles',
      img: require('@assets/Castles.png'),
    },
    {
      id: 3,
      name: 'Islands',
      img: require('@assets/Islands.png'),
    },
    {
      id: 4,
      name: 'Mansions',
      img: require('@assets/Mansions.png'),
    },
    {
      id: 5,
      name: 'Amazing Pools',
      img: require('@assets/Amazing-pools.png'),
    },
    {
      id: 6,
      name: 'Beach',
      img: require('@assets/Beach.png'),
    },
    {
      id: 7,
      name: 'Bed & Breakfasts',
      img: require('@assets/Bed-&-Breakfasts.png'),
    },
    {
      id: 8,
      name: 'Boats',
      img: require('@assets/Boats.png'),
    },
    {
      id: 9,
      name: 'Camping',
      img: require('@assets/Camping.png'),
    },
    {
      id: 10,
      name: 'Culinary Hub',
      img: require('@assets/Chefs-Kitchens.png'),
    },
    {
      id: 11,
      name: 'Artistic Retreats',
      img: require('@assets/Creative-Spaces.png'),
    },
    {
      id: 12,
      name: 'Design',
      img: require('@assets/Design.png'),
    },
    {
      id: 13,
      name: 'Dome',
      img: require('@assets/Dome.png'),
    },
    {
      id: 14,
      name: 'Golfing',
      img: require('@assets/Golfing.png'),
    },
  ];

  interface flatlistitem {
    item: {
      id: number;
      title1: string;
      title2: string;
      title3: string;
      title4: string;
      price: number;
      img: object;
    };
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('WhereTo')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 13,
              borderRadius: 50,
              width: '100%',
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
            <AntDesign name="menu-fold" size={20} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
        <View style={{paddingHorizontal: 10}}>
          <FlatList
            horizontal
            data={FlatListData}
            snapToAlignment={'center'}
            decelerationRate={'fast'}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, i}: any) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => {
                    setSelect(item?.id);
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 20,
                      marginTop: -10,
                      borderBottomWidth: select === item?.id ? 2 : 0,
                      paddingVertical: 10,
                      borderBlockColor: 'black',
                    }}
                    key={i}>
                    <Image
                      source={item?.img}
                      style={{
                        width: 30,
                        height: 30,
                        marginBottom: 6,
                        tintColor: 'black',
                      }}
                    />
                    <Text
                      numberOfLines={1}
                      style={{
                        color: select === item?.id ? 'black' : 'grey',
                        fontWeight: 'bold',
                        width: 70,
                        textAlign: 'center',
                      }}>
                      {item?.name}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <View style={{flex: 1}}>
          {loading && <Text>Loading...</Text>}
          {error && <Text>Error: {error.message}</Text>}
          {/* {data && (
            <View>
              <Text>Response Data:</Text>
              <Text>{JSON.stringify(data)}</Text>
            </View>
          )} */}
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data?.properties?.data}
            renderItem={({item}) => {
              return <ListItem item={item} />;
            }}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        {data && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Map', {posts: data.properties.data})
            }
            style={{
              width: 90,
              height: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgb(34, 34, 34)',
              position: 'absolute',
              bottom: 15,
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <Entypo
              name={'map'}
              style={{marginRight: 10}}
              size={20}
              color={'white'}
            />
            <Text style={{color: 'white'}}>Map</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    padding: 10,
    backgroundColor: ' rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    borderRadius: 20,
    width: '100%',
    height: 270,
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
export default Explore;
