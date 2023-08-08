import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Carousel} from 'react-native-ui-lib';
import Entypo from 'react-native-vector-icons/Entypo';

const Explore = () => {
  const navigation = useNavigation();
  const [select, setSelect] = useState(1);
  const [heart, setHeart] = useState(false);
  const data = [
    {
      id: 1,
      img: require('../../assets/Rectangle.png'),
      title1: 'Apertment In Houston Texas',
      title2: 'Amsterdam Lifestyle in Houston',
      title3: '1 queen bed Individual Host',
      title4: 'night',
      price: '$230 USD',
    },
    {
      id: 2,
      img: require('../../assets/Rectangle2.png'),
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
  ];
  return (
    <View style={{flex: 1, padding: 20, backgroundColor: 'white'}}>
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
          <AntDesign name="search1" size={20} style={{marginRight: 20}} />
          <View>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Where to?</Text>
            <Text>AnyWhere , AnyWhere , Add guest </Text>
          </View>
        </View>
        <AntDesign name="menu-fold" size={20} />
      </TouchableOpacity>
      <View style={{paddingHorizontal: 20}}>
        <FlatList
          horizontal
          data={FlatListData}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => setSelect(item?.id)}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 20,
                  marginTop: 20,
                  borderBottomWidth: select === item?.id ? 2 : null,
                  paddingVertical: 10,
                  borderBlockColor: 'black',
                }}>
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
                  // numberOfLines={1}
                  style={{
                    color: select === item?.id ? 'black' : 'grey',
                    fontWeight: 'bold',
                    // backgroundColor: 'red',
                    // width: 70,
                    textAlign: 'center',
                  }}>
                  {item?.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{flex: 1}}>
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
                        width: 370,
                        height: 370,
                        borderRadius: 20,
                      }}
                      source={item?.img}
                    />
                  ))}
                </Carousel>
                {/* <Image
                  style={{
                    width: 370,
                    height: 370,
                    borderRadius: 20,
                  }}
                  source={item?.img}
                /> */}
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
                <View style={{position: 'absolute', top: 20, left: 20}}>
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
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Map')}
        style={{
          width: 70,
          height: 40,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgb(34, 34, 34)',
          position: 'absolute',
          bottom: 40,
          alignSelf: 'center',
        }}>
        <Text style={{color: 'white'}}>Map</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Explore;
