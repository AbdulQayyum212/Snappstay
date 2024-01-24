import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
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
import Category from '@components/Category';
import {setProperty} from '@stores/store';
import {useDispatch, useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import {setProperties} from '@stores/actions/AddListingAction';
import {Property} from '@type/PropertiesType';
import NotFound from '@components/NotFound';
import tw from 'twrnc';
import {Loading} from '@stores/store';

const width = Dimensions.get('window').width;
const Explore = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const [select, setSelect] = useState<number>(0);
  const properties = useSelector(setProperty);
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
            {/* <AntDesign name="menu-fold" size={20} /> */}
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
        <Category setSelect={setSelect} select={select} />
        {/* <View style={{flex: 1}}> */}
        {loading && (
          <View
            style={{
              flex: 1,
              height: '100%',
              width: '100%',
              position: 'absolute',
              zIndex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 30,
                borderRadius: 10,
                backgroundColor: 'black',
              }}>
              <ActivityIndicator size="large" color={'white'} />
            </View>
          </View>
        )}
        {error && <Text>Error: {error.message}</Text>}
        {/* {data && (
            <View>
              <Text>Response Data:</Text>
              <Text>{JSON.stringify(data)}</Text>
            </View>
          )} */}

        <FlatList
          contentContainerStyle={tw`flex-grow   justify-center`}
          ListEmptyComponent={
            <NotFound
              onPress={() => {
                dispatch(setProperties(data));
              }}
            />
          }
          showsVerticalScrollIndicator={false}
          data={
            properties.properties?.data ?? properties.properties
            //  data?.properties?.data
          }
          renderItem={({item}: any) => {
            return <ListItem item={item} />;
          }}
          keyExtractor={item => item.id.toString()}
        />
        {/* </View> */}
        {properties.properties?.data?.length > 0 && (
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
