import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  Carousel,
  Image,
  AnimatedImage,
  TextField,
  View,
} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {Button} from '@components/Button';
import {ModalHeader} from '@components/Header';
import useGetRequest from '@hooks/useGetRequest';
import {PropertyListResponse} from '@type/properyListResponse';
import {Property} from '@type/property';
import AddToFavorite from './AddToFavorite';
import tw from 'twrnc';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const width = Dimensions.get('window').width;

export default function ListItem({item}: {item: Property}) {
  const navigation = useNavigation();
  console.log('item?.house_title', item?.house_title);

  return (
    <View
      key={item.id + 'list-item'}
      style={tw`shadow-md bg-white border border-gray-200 rounded-xl  my-2 overflow-hidden`}>
      <Carousel
        containerStyle={
          {
            // height: 300,
          }
        }
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
        {item.property_photos?.map((element, i) => (
          <TouchableWithoutFeedback
            key={element.id + 'image'}
            onPress={() => navigation.navigate('SnappCover', {property: item})}>
            <View flex centerV key={i}>
              <AnimatedImage
                style={{height: 300}}
                loader={<ActivityIndicator />}
                overlayType={Image.overlayTypes.BOTTOM}
                // style={{flex: 1}}
                source={{
                  uri:
                    'https://www.snappstay.com/public/images/' + element.photo,
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        ))}
      </Carousel>
      <View style={tw`flex-row gap-2 p-2 my-2`}>
        <View style={tw`gap-2 flex-1`}>
          <Text style={{fontSize: 15, color: 'black'}}>
            {item?.house_title}
          </Text>
          <View style={tw`flex-row items-center gap-2`}>
            <View style={tw`flex-row items-center gap-1`}>
              <Ionicons color={'black'} name="bed" size={20} />
              <Text style={tw`text-black`}>{item.bedrooms || 0} Beds</Text>
            </View>
            <View style={tw`flex-row items-center gap-1`}>
              <FontAwesome5Icon
                name="bath"
                size={20}
                color={'black'}
                style={{marginLeft: 10}}
              />
              <Text style={tw`text-black`}>{item.bathrooms || 0} Baths</Text>
            </View>
          </View>

          <Text style={{fontSize: 15, color: 'black'}}>
            <Text style={tw`font-bold text-black`}>
              Price : ${item?.price}{' '}
            </Text>
            / night
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
            source={require('@assets/u_star.png')}
          />

          <Text style={tw`text-black`}>4.94</Text>
        </View>
      </View>
      <View style={{position: 'absolute', top: 10, left: 10}}>
        <AddToFavorite item={item} />
      </View>
    </View>
  );
}
