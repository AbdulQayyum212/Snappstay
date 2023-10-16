import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectUserState} from '@stores/store';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {FlatList} from 'react-native-gesture-handler';
import ListItem from '@components/ListItem';
import AddToFavorite from '@components/AddToFavorite';
import {AnimatedImage, Carousel, Image, View} from 'react-native-ui-lib';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function UserListing() {
  const {userData} = useSelector(selectUserState);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'white', padding: 20}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw` items-center justify-center shadow-md bg-white px-2 w-10 h-10 left-1  p-2 rounded-full z-10`}>
          <EvilIcons name={'chevron-left'} size={20} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={{
          paddingBottom: 100,
          flexGrow: 1,
          justifyContent: 'center',
          paddingHorizontal: 8,
        }}
        ListHeaderComponentStyle={{paddingHorizontal: -8}}
        data={userData?.properties}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('StartEarning', {property: item})
            }
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
                <View flex centerV key={i}>
                  <AnimatedImage
                    style={{height: 300}}
                    loader={<ActivityIndicator />}
                    overlayType={Image.overlayTypes.BOTTOM}
                    // style={{flex: 1}}
                    source={{
                      uri:
                        'https://www.snappstay.com/public/images/' +
                        element.photo,
                    }}
                  />
                </View>
              ))}
            </Carousel>
            <View style={tw`flex-row gap-2 p-2 my-2`}>
              <View style={tw`gap-2 flex-1`}>
                <Text style={{fontSize: 15, color: 'black'}}>
                  {item?.house_title}
                </Text>
                <View style={tw`flex-row items-center gap-2`}>
                  <View style={tw`flex-row items-center gap-1`}>
                    <Ionicons name="bed" size={20} />
                    <Text>{item.bedrooms || 0} Beds</Text>
                  </View>
                  <View style={tw`flex-row items-center gap-1`}>
                    <FontAwesome5Icon
                      name="bath"
                      size={20}
                      style={{marginLeft: 10}}
                    />
                    <Text>{item.bathrooms || 0} Baths</Text>
                  </View>
                </View>

                <Text style={{fontSize: 15}}>
                  <Text style={tw`font-bold`}>Price : ${item?.price} </Text>/
                  night
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

                <Text>4.94</Text>
              </View>
            </View>
            <View style={{position: 'absolute', top: 10, left: 10}}>
              <AddToFavorite item={item} />
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
