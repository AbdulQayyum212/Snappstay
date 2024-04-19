import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {Property} from '@type/property';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const PostCarouselItem = props => {
  const post = props.post as Property;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('SnappCover', {property: post});
  };
  return (
    // <Text>hello</Text>
    <Pressable
      onPress={goToPostPage}
      style={[
        tw`h-28 bg-white m-1 rounded-lg`,
        {width: width - 60, marginBottom: 60},
      ]}>
      <View style={tw`bg-white rounded-lg `}>
        <View style={tw`flex-row`}>
          {/* Image  */}
          <Image
            style={tw`h-full aspect-square rounded-l-lg`}
            resizeMode="cover"
            source={{
              uri:
                'https://www.snappstay.com/public/images/' +
                post.property_photos[0].photo,
            }}
          />

          <View style={{flex: 1, marginHorizontal: 10}}>
            {/* Bed & Bedroom  */}
            <View style={tw`flex-row items-center gap-2 my-2`}>
              <View style={tw`flex-row items-center gap-1`}>
                <Ionicons name="bed" size={20} />
                <Text style={tw`text-black`}> {post.bedrooms || 0} Beds</Text>
              </View>
              <View style={tw`flex-row items-center gap-1`}>
                <FontAwesome5Icon name="bath" size={15} />
                <Text style={tw`text-black`}>{post.bathrooms || 0} Baths</Text>
              </View>
            </View>

            {/* Type & Description */}
            <Text style={tw`text-sm text-black`} numberOfLines={2}>
              {post.place_type}. {post.house_title}
            </Text>

            {/*  Old price & new price */}
            <Text style={tw`text-sm my-2`}>
              <Text style={tw`font-bold text-black`}>${post.price} </Text>/
              night
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default PostCarouselItem;

const styles = StyleSheet.create({});
