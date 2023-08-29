import React, {useState, useEffect, useRef} from 'react';
import {
  TouchableOpacity,
  Text,
  FlatList,
  Modal,
  StyleSheet,
  TextInput,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Carousel, View, Image} from 'react-native-ui-lib';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {ToastSuccess} from '../../Config/Constants';
import Toast from 'react-native-toast-message';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Button} from '../../components/Button';
import {ModalHeader} from '../../components/Header';
const width = Dimensions.get('window').width;
const Explore = () => {
  const navigation = useNavigation();
  const [select, setSelect] = useState<number>(1);
  const [heart, setHeart] = useState<number>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: viewConfig.current,
      onViewableItemsChanged: onViewableItemsChanged,
    },
  ]);

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });
  const data = [
    {
      id: 1,
      img: require('../../assets/2.jpg'),
      title1: 'Apertment In Houston Texas',
      title2: 'Amsterdam Lifestyle in Houston',
      title3: '1 queen bed Individual Host',
      title4: 'night',
      price: '$230 USD',
    },
    {
      id: 2,
      img: require('../../assets/1.jpg'),
      title1: 'Apertment In Houston Texas',
      title2: 'Amsterdam Lifestyle in Houston',
      title3: '1 queen bed Individual Host',
      title4: 'night',
      price: '$230 USD',
    },
    {
      id: 3,
      img: require('../../assets/3.jpg'),
      title1: 'Apertment In Houston Texas',
      title2: 'Amsterdam Lifestyle in Houston',
      title3: '1 queen bed Individual Host',
      title4: 'night',
      price: '$230 USD',
    },
    {
      id: 2,
      img: require('../../assets/4.jpg'),
      title1: 'Apertment In Houston Texas',
      title2: 'Amsterdam Lifestyle in Houston',
      title3: '1 queen bed Individual Host',
      title4: 'night',
      price: '$230 USD',
    },
  ];
  const FlatListData = [
    {
      id: 1,
      name: 'Trending',
      img: require('../../assets/Trending.png'),
    },
    {
      id: 2,
      name: 'Castles',
      img: require('../../assets/Castles.png'),
    },
    {
      id: 3,
      name: 'Islands',
      img: require('../../assets/Islands.png'),
    },
    {
      id: 4,
      name: 'Mansions',
      img: require('../../assets/Mansions.png'),
    },
    {
      id: 5,
      name: 'Amazing Pools',
      img: require('../../assets/Amazing-pools.png'),
    },
    {
      id: 6,
      name: 'Beach',
      img: require('../../assets/Beach.png'),
    },
    {
      id: 7,
      name: 'Bed & Breakfasts',
      img: require('../../assets/Bed-&-Breakfasts.png'),
    },
    {
      id: 8,
      name: 'Boats',
      img: require('../../assets/Boats.png'),
    },
    {
      id: 9,
      name: 'Camping',
      img: require('../../assets/Camping.png'),
    },
    {
      id: 10,
      name: 'Culinary Hub',
      img: require('../../assets/Chefs-Kitchens.png'),
    },
    {
      id: 11,
      name: 'Artistic Retreats',
      img: require('../../assets/Creative-Spaces.png'),
    },
    {
      id: 12,
      name: 'Design',
      img: require('../../assets/Design.png'),
    },
    {
      id: 13,
      name: 'Dome',
      img: require('../../assets/Dome.png'),
    },
    {
      id: 14,
      name: 'Golfing',
      img: require('../../assets/Golfing.png'),
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
        <View style={{paddingHorizontal: 10, marginBottom: 20}}>
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
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}: any) => {
              return (
                <View
                  style={{
                    marginBottom: 10,
                    marginTop: 20,
                  }}>
                  <Carousel
                    containerStyle={{
                      height: 300,
                    }}
                    loop
                    counter
                    pageControlProps={{
                      containerStyle: {
                        position: 'absolute',
                        bottom: 15,
                        left: '40%',
                      },
                    }}
                    pageControlPosition={Carousel.pageControlPositions.OVER}
                    showCounter>
                    {new Array(5).fill(null).map((element, i) => (
                      <TouchableWithoutFeedback
                        style={{
                          height: width,
                          width: width,
                        }}
                        onPress={() => navigation.navigate('SnappCover')}>
                        <View flex centerV key={i}>
                          <Image
                            overlayType={Image.overlayTypes.BOTTOM}
                            style={{flex: 1}}
                            source={item?.img}
                          />
                        </View>
                      </TouchableWithoutFeedback>
                    ))}
                  </Carousel>
                  <View
                    style={{
                      flexDirection: 'row',
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
                  <View style={{position: 'absolute', top: 10, left: 10}}>
                    <TouchableOpacity
                      onPress={() => {
                        if (heart != item?.id) {
                          setHeart(item?.id);
                          setModalVisible(true);
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
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Map')}
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
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ModalHeader
              modalVisible
              CenterText="Name this wishlist"
              leftOnPress={() => {
                setHeart();
                setModalVisible(false);
              }}
            />
            {/* <View
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
                  onPress={() => {
                    setHeart();
                    setModalVisible(false);
                  }}
                  style={{
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                  }}>
                  <EvilIcons
                    name={modalVisible ? 'close' : 'chevron-left'}
                    size={20}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Name this wishlist
              </Text>
              <View style={{width: '20%'}} />
            </View> */}
            <View
              style={{
                width: '100%',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  width: '100%',
                  marginTop: 20,
                  borderRadius: 10,
                }}>
                <TextInput
                  onChangeText={e => setName(e)}
                  placeholder="Name"
                  style={{paddingLeft: 10}}
                />
              </View>
              <Text style={{color: 'black', marginTop: 10}}>
                50 characters maximum
              </Text>
            </View>
            <View
              style={{borderColor: 'lightgrey', borderWidth: 1, marginTop: 20}}
            />
            <Button
              style={{marginTop: 20}}
              onPress={() => navigation.navigate('Login')}
              title={'Create'}
            />
          </View>
        </View>
      </Modal>
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
