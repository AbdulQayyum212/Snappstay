import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
const height = Dimensions.get('screen').height;
const Welcome = () => {
  const data = [
    {
      name: 'Set up your calendar',
      dis: 'Change which dates are available',
    },
    {
      name: 'Pick your policy for cancellations',
      dis: 'Control your reservations',
    },
    {
      name: 'Add your house rules',
      dis: 'Set expectations with guests',
    },
    {
      name: 'Offer special promotions',
      dis: 'Add discounts to attract guests',
    },
  ];
  const img = [
    {
      img: require('../assets/Image1.png'),
    },
    {
      img: require('../assets/Image2.png'),
    },
  ];
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        resizeMode="cover"
        style={{width: '100%', height: height, flex: 1}}
        source={require('../assets/bgImags.png')}>
        <View
          style={{
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
            width: '100%',
            height: height,
            padding: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              //   backgroundColor: 'red',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 35,
                fontWeight: 'bold',
                // width: 200,
              }}>
              Welcome, Edward
            </Text>
            <TouchableOpacity>
              <Image
                style={{width: 40, height: 40, tintColor: 'white'}}
                source={require('../assets/notifications.png')}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              color: 'white',
            }}>
            Guests can reserve your place 24 hours after you publish—here’s how
            to prepare.
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 2,
          backgroundColor: 'white',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          borderWidth: 1,
        }}>
        <View style={{padding: 30}}>
          <FlatList
            numColumns={2}
            data={data}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    width: 150,
                    borderRadius: 10,
                    height: 100,
                    backgroundColor: 'white',
                    paddingHorizontal: 10,
                    shadowColor: '#000',
                    marginRight: 40,
                    marginBottom: 20,
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    justifyContent: 'center',
                    elevation: 5,
                  }}>
                  <Text
                    style={{color: 'black', width: 100, fontWeight: 'bold'}}>
                    {item?.name}
                  </Text>
                  <Text style={{fontSize: 11}}>{item?.dis}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={{backgroundColor: 'black', flex: 1, padding: 20}}>
          <FlatList
            data={img}
            horizontal
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 20,
                    marginRight: 40,
                  }}>
                  <View
                    style={{
                      width: 120,
                      height: 150,
                      backgroundColor: 'white',
                    }}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      top: 42,
                      left: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: 130,
                    }}>
                    <Image
                      style={{
                        width: 120,
                        height: 120,
                        marginLeft: -29,
                      }}
                      source={item?.img}
                    />
                    <View
                      style={{
                        borderLeftWidth: 1,
                        backgroundColor: 'black',
                        width: 3,
                        marginRight: -1,
                        height: 60,
                      }}
                    />
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default Welcome;
