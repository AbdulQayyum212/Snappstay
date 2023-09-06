import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {TextField} from 'react-native-ui-lib';
const HotelView = () => {
  const data = [
    {
      img: require('@assets/Rectangle.png'),
    },
    {
      img: require('@assets/Rectangle.png'),
    },
    {
      img: require('@assets/Rectangle.png'),
    },
    {
      img: require('@assets/Rectangle.png'),
    },
  ];
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 2, backgroundColor: '#262626', padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 100,
          }}>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              style={{width: 30, height: 30}}
              source={require('@assets/location.png')}
            />
          </TouchableOpacity>
          <View style={{width: 40, height: 40, borderRadius: 10}}>
            <TouchableOpacity>
              <Image
                style={{width: 40, height: 40, borderRadius: 10}}
                source={require('@assets/Rectangle.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 5,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                height: 35,
                borderColor: 'lightgrey',
                borderWidth: 1,
                borderRadius: 20,
                paddingHorizontal: 10,
                backgroundColor: '#FBFBFB',
              }}>
              <Image
                style={{width: 20, height: 20, marginRight: 10}}
                source={require('@assets/icon.png')}
              />
              <TextField
                style={{
                  height: 35,
                  width: '93%',
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                }}
                placeholder="search..."
              />
            </View>
            <TouchableOpacity>
              <Image
                style={{width: 30, height: 30}}
                source={require('@assets/Righticon.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 20, flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
              Popular Hotel
            </Text>
            <TouchableOpacity>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Property')}
                  style={{
                    width: 190,
                    height: 200,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    paddingHorizontal: 5,
                    marginTop: 20,
                    marginRight: 20,
                  }}>
                  <Image
                    style={{
                      width: '100%',
                      height: 120,
                      borderRadius: 10,
                      marginTop: 5,
                    }}
                    source={item.img}
                  />
                  <Text style={{fontSize: 15, color: 'black'}}>
                    Osiris Sujat Hotel
                  </Text>
                  <Text style={{color: '#8F8F8F', fontSize: 10}}>
                    Santonio St. Madrid
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>
                      $81
                      <Text style={{color: '#8F8F8F', fontSize: 10}}>
                        / nigth
                      </Text>
                    </Text>
                    <Image
                      style={{width: 20, height: 20}}
                      source={require('@assets/Liked.png')}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
            Around You
          </Text>
          <TouchableOpacity>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <Image
                  style={{width: 130, height: 100, borderRadius: 10}}
                  source={item.img}
                />
                <View style={{marginLeft: 10}}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'black',
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    Ciputra World
                  </Text>
                  <Text>Romanium St. Barcelona</Text>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      width: '60%',
                      marginTop: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>
                      $81
                      <Text style={{color: '#8F8F8F', fontSize: 10}}>
                        / nigth
                      </Text>
                    </Text>
                    <Image
                      style={{width: 20, height: 20}}
                      source={require('@assets/Liked.png')}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
export default HotelView;
