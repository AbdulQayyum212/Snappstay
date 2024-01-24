import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import useGetRequest from '@hooks/useGetRequest';
import axios from 'axios';
import {baseUrl} from '../Config/apiCaller';
import {setProperties} from '@stores/actions/AddListingAction';
import {loaderFalse, loaderTrue} from '@stores/actions/LoaderAction';
import {useDispatch, useSelector} from 'react-redux';
import {setProperty} from '@stores/store';
import Toast from 'react-native-toast-message';

const Category = ({setSelect, select}: any) => {
  const {data, loading, error} = useGetRequest({
    url: 'https://www.snappstay.com/api/property/type',
  });
  const dispatch = useDispatch();
  const properties = useSelector(setProperty);
  // console.log('====><><><====', data);

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
  useEffect(() => {
    if (properties?.properties?.data.length > 0 && data)
      setSelect(data[0]?.category_name);
  }, [data]);
  return (
    <View style={{paddingHorizontal: 10}}>
      <FlatList
        horizontal
        data={data}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, i}: any) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                setSelect(item?.category_name);
                const obj = {
                  property_type: item?.category_name,
                };
                console.log('obj', obj);
                dispatch(loaderTrue());
                axios
                  .post(baseUrl + 'property/search', obj, {
                    // headers: {
                    //   Authorization: `Bearer ${token}`,
                    // },
                  })
                  .then(async response => {
                    console.log('res ==><><==', response.data.properties);
                    dispatch(setProperties(response.data));
                    dispatch(loaderFalse());
                  })
                  .catch(error => {
                    dispatch(loaderFalse());

                    console.error('Fetch error:', error);
                    // Handle other types of errors, like network issues
                  });
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 20,
                  marginTop: -10,
                  borderBottomWidth: select === item?.category_name ? 2 : 0,
                  paddingVertical: 10,
                  borderBlockColor: 'black',
                }}
                key={i}>
                <Image
                  source={require('@assets/Trending.png')}
                  style={{
                    width: 25,
                    height: 25,
                    marginBottom: 6,
                    tintColor: 'black',
                  }}
                />
                <Text
                  numberOfLines={1}
                  style={{
                    color: select === item?.category_name ? 'black' : 'grey',
                    fontSize: 10,
                    textAlign: 'center',
                  }}>
                  {item?.category_name}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Category;
