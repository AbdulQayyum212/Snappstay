import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useRef} from 'react';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AnimatedImage, Image, Carousel} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Button} from '../components/Button';
import {Property} from '@type/property';
import tw from 'twrnc';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AddToFavorite from '@components/AddToFavorite';
const width = Dimensions.get('window').width;
const Max_Header_Height = 200;
const Min_Header_Height = 70;
const Scroll_Distance = Max_Header_Height - Min_Header_Height;

const SnappCover = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const route = useRoute();
  const property = route.params.property as Property;
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  // const animateHeaderBackgroundColor = scrollOffsetY.interpolate({
  //   inputRange: [0, 200 - 70],
  //   outputRange: ['transparent', 'white'],
  //   extrapolate: 'clamp',
  // });
  // const animatedHeaderHeight = scrollOffsetY.interpolate({
  //   inputRange: [0, Scroll_Distance],
  //   outputRange: [200, 70],
  //   extrapolate: 'clamp',
  // });
  const data = [
    {
      img: require('@assets/Rectangle.png'),
    },
    {
      img: require('@assets/Rectangle.png'),
    },
  ];
  const onShare = async () => {
    try {
      const result = await Share.share({
        url: '',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared', result);
        } else {
          // shared
          console.log('Shared Else');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Dismissed');
      }
    } catch (error) {
      console.log('error.message', error.message);
    }
  };
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={tw`absolute flex-row items-center justify-between px-2 top-[${insets.top}+px] left-0 w-full z-10 `}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              backgroundColor: 'white',
            }}>
            <EvilIcons name={'chevron-left'} size={20} color="black" />
          </TouchableOpacity>
          <View />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={onShare}
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                backgroundColor: 'white',
                marginRight: 10,
              }}>
              <AntDesign name={'upload'} size={15} color={'black'} />
            </TouchableOpacity>
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                backgroundColor: 'white',
                marginRight: 10,
              }}>
              <AddToFavorite item={property} />
            </View>
          </View>
        </View>
        <View>
          <Carousel
            loop
            autoplay
            pageControlPosition={Carousel.pageControlPositions.OVER}>
            {property.property_photos.map((element, index) => (
              <AnimatedImage
                key={element.id + 'image'}
                style={{height: 300}}
                loader={<ActivityIndicator />}
                overlayType={Image.overlayTypes.BOTTOM}
                // style={{flex: 1}}
                source={{
                  uri:
                    'https://www.snappstay.com/public/images/' + element.photo,
                }}
              />
            ))}
          </Carousel>
        </View>
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <View style={tw`gap-4 px-4 my-4`}>
            <View style={tw`gap-2`}>
              <Text style={{color: 'black', fontSize: 20}}>
                {property.house_title}
              </Text>
              <Text style={{color: '#999999', fontSize: 12}}>
                5.0, 105 reviews Supperhot
              </Text>
              <Text style={{color: '#999999', fontSize: 12}}>
                {property.address}
              </Text>
            </View>

            <View style={{borderWidth: 1, borderColor: '#999999'}} />
            <View style={tw`flex-row items-center justify-between`}>
              <View style={tw`flex-1 gap-2`}>
                <Text style={tw`font-bold text-black`}>
                  {`Room in boutique hotel hosted by  ${property.user_details.first_name} ${property.user_details.last_name}`}
                </Text>
                <Text style={{color: '#999999'}}>
                  {property.guests} guests · {property.bedrooms} bedrooms ·{' '}
                  {property.beds} beds · {property.bathrooms} private bath
                </Text>
              </View>

              <View style={{width: 50, height: 50, borderRadius: 50}}>
                <Image
                  style={{width: 50, height: 50, borderRadius: 50}}
                  source={{
                    uri:
                      'https://www.snappstay.com/public/images/' +
                      property.user_details.photo,
                  }}
                />
              </View>
            </View>
            <View style={{borderWidth: 1, borderColor: '#999999'}} />
            <View style={tw`gap-2`}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10,
                    tintColor: 'black',
                  }}
                  source={require('@assets/Vectors.png')}
                />
                <View style={tw`flex-1`}>
                  <Text style={{color: 'black'}}>Self Check-in</Text>
                  <Text style={{color: '#999999'}}>
                    Check yourself in with the keypad
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10,
                    tintColor: 'black',
                  }}
                  source={require('@assets/u_map-marker-alt.png')}
                />
                <View style={tw`flex-1`}>
                  <Text style={{color: 'black'}}>Great location</Text>
                  <Text style={{color: '#999999'}}>
                    100% of recent guests gave the location a 5-star rating.Free
                    cancellation before Feb 23.
                  </Text>
                </View>
              </View>
            </View>
            <View style={{borderWidth: 1, borderColor: '#999999'}} />
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Description
              </Text>
              <Text style={{color: '#999999', fontSize: 16, marginTop: 10}}>
                {property.description}
              </Text>
            </View>
            <View style={{borderWidth: 1, borderColor: '#999999'}} />
            <View style={tw`gap-2`}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Amenities</Text>
              <Text style={{color: 'black'}}>Amenities</Text>
              <View style={tw`flex-wrap flex-row gap-2`}>
                {property.amenities.split(',').map(x => (
                  <Text style={tw`m-2 rounded-lg border p-2`}>{x}</Text>
                ))}
              </View>
              <Text style={{color: 'black'}}>Standout Amenities</Text>
              <View style={tw`flex-wrap flex-row gap-2`}>
                {property.standout_amenities.split(',').map(x => (
                  <Text style={tw`m-2 rounded-lg border p-2`}>{x}</Text>
                ))}
              </View>
              <Text style={{color: 'black'}}>Safety Items</Text>
              <View style={tw`flex-wrap flex-row gap-2`}>
                {property.safety_items.split(',').map(x => (
                  <Text style={tw`m-2 rounded-lg border p-2`}>{x}</Text>
                ))}
              </View>
            </View>
            <View style={{borderWidth: 1, borderColor: '#999999'}} />
            <View style={tw`gap-2`}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Policies</Text>
              <Text style={{color: 'black'}}>Cancellation policy</Text>
              <Text style={{color: '#999999', fontSize: 16, marginTop: 10}}>
                <Text style={{color: 'black'}}>Firm</Text> Full refund up to 30
                days before check-in. After that, the first 30 days of the stay
                are non-refundable.
              </Text>
              <Text style={{color: '#999999', fontSize: 16, marginTop: 10}}>
                <Text style={{color: 'black'}}>Flexible or Non-refundable</Text>{' '}
                In addition to Flexible, offer a non-refundable option—guests
                pay 10% less, but you keep your payout no matter when they
                cancel. Free cancellation deadlines are in the property's
                timezone. Learn more about cancellation policies.
              </Text>
              <View style={{borderWidth: 1, borderColor: '#999999'}} />

              <View style={tw`gap-2`}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  House Rules
                </Text>
                <Text>
                  <Text style={tw`font-bold`}> Check in after: </Text>
                  {property.checkin_time}
                </Text>
                <Text>
                  <Text style={tw`font-bold`}> Check out before: </Text>
                  {property.checkout_time}
                </Text>
                <Text>
                  <Text style={tw`font-bold`}> Addition rules: </Text>
                  {property.additional_rules}
                </Text>
                <Text>
                  <Text style={tw`font-bold`}> Event: </Text>
                  {property.events}
                </Text>
                <Text>
                  <Text style={tw`font-bold`}> Smoking:</Text>
                  {property.smoking}
                </Text>
                <Text>
                  <Text style={tw`font-bold`}> Commercial Photography : </Text>
                  {property.commercial_photography}
                </Text>
                <Text>
                  <Text style={tw`font-bold`}> Pets </Text>
                  {property.pets}
                </Text>
              </View>
            </View>

            {/* <View style={{borderWidth: 1, borderColor: '#999999'}} />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>SnappCover</Text>
            <Text style={{color: '#999999', fontSize: 16, marginTop: 10}}>
              Lorem ipsum dolor sit amet consectetur. Elit velit in sit eu amet
              justo. Eros a eget nisl risus ac. Consequat pellentesque amet
              aenean pellentesque egestas massa.
            </Text>
          </View> */}
          </View>
        </SafeAreaView>
      </ScrollView>
      <SafeAreaView>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 10,
              borderTopWidth: 1,
              borderTopColor: 'lightgrey',
              paddingHorizontal: 20,
            }}>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: 'bold',
                    marginRight: 5,
                  }}>
                  ${property.price}
                </Text>
                <Text>/ night</Text>
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
            <Button
              style={{marginTop: 20, width: 150, paddingVertical: 10}}
              onPress={() => navigation.navigate('ConfirmPay')}
              title={'Check availability'}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
const style = StyleSheet.create({
  AnimatedView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
    // position: 'absolute',
    top: 0,
  },
});
export default SnappCover;
