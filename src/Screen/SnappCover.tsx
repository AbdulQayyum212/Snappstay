import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  StyleSheet,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Carousel} from 'react-native-ui-lib';
import {Button} from '../components/Button';
import {Share} from 'react-native';
const width = Dimensions.get('window').width;
const Max_Header_Height = 200;
const Min_Header_Height = 70;
const Scroll_Distance = Max_Header_Height - Min_Header_Height;
const SnappCover = () => {
  const navigation = useNavigation();
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
      img: require('../assets/Rectangle.png'),
    },
    {
      img: require('../assets/Rectangle.png'),
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
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Animated.View
        style={[
          style.AnimatedView,
          // {
          //   backgroundColor: animateHeaderBackgroundColor,
          // },
        ]}>
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
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              backgroundColor: 'white',
            }}>
            <Entypo name={'heart-outlined'} size={15} color={'black'} />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {useNativeDriver: false},
        )}
        showsVerticalScrollIndicator={false}>
        <View>
          <Carousel
            loop
            autoplay
            pageControlProps={{
              size: 10,
            }}
            pageControlPosition={Carousel.pageControlPositions.OVER}>
            {new Array(5).fill(null).map((element, index) => (
              <Image
                style={{
                  width: width,
                  height: width,
                }}
                source={require('../assets/1.jpg')}
              />
            ))}
          </Carousel>
        </View>
        <View style={{padding: 20}}>
          <Text style={{color: 'black', fontSize: 20}}>Houston, Taxas</Text>
          <Text style={{color: '#999999', fontSize: 12}}>
            5.0, 105 reviews Supperhot
          </Text>
          <Text style={{color: '#999999', fontSize: 12}}>Huston, Texas</Text>
          <View
            style={{borderWidth: 1, borderColor: '#999999', marginTop: 20}}
          />
          <View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{width: '60%', color: 'black'}}>
                Room in boutique hotel hosted by Carles Gomez
              </Text>
              <View style={{width: 50, height: 50, borderRadius: 50}}>
                <Image
                  style={{width: 50, height: 50, borderRadius: 50}}
                  source={require('../assets/profile.png')}
                />
              </View>
            </View>
            <Text style={{width: '52%', color: '#999999'}}>
              2 guests · 2bedrooms · 2beds 2 private bath
            </Text>
          </View>
          <View
            style={{borderWidth: 1, borderColor: '#999999', marginTop: 20}}
          />
          <View style={{marginTop: 20}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                  tintColor: 'black',
                }}
                source={require('../assets/Vectors.png')}
              />
              <View>
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
                source={require('../assets/u_map-marker-alt.png')}
              />
              <View>
                <Text style={{color: 'black'}}>Great location</Text>
                <Text style={{color: '#999999', width: '60%'}}>
                  100% of recent guests gave the location a 5-star rating.n
                </Text>
                <Text style={{color: '#999999'}}>
                  Free cancellation before Feb 23.
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{borderWidth: 1, borderColor: '#999999', marginTop: 20}}
          />
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>SnappCover</Text>
            <Text style={{color: '#999999', fontSize: 16, marginTop: 10}}>
              Lorem ipsum dolor sit amet consectetur. Elit velit in sit eu amet
              justo. Eros a eget nisl risus ac. Consequat pellentesque amet
              aenean pellentesque egestas massa.
            </Text>
          </View>
        </View>
      </ScrollView>
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
                $56
              </Text>
              <Text>night</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../assets/u_star.png')}
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
