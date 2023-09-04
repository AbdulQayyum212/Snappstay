import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { TextField } from 'react-native-ui-lib';
const Template = () => {
  const data = [
    {
      img: require('../assets/Rectangle.png'),
      title1: 'Apertment In Houston Texas',
      title2: 'Amsterdam Lifestyle in Houston',
      title3: '1 queen bed Individual Host',
      title4: 'night',
      price: '$230 USD',
    },
    {
      img: require('../assets/Rectangle2.png'),
      title1: 'Apertment In Houston Texas',
      title2: 'Amsterdam Lifestyle in Houston',
      title3: '1 queen bed Individual Host',
      title4: 'night',
      price: '$230 USD',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            height: 100,
            padding: 10,
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
                source={require('../assets/icon.png')}
              />
              <TextField
                style={{
                  height: 35,
                  width: '94%',
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                }}
                placeholder="search..."
              />
            </View>
            <TouchableOpacity>
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/Righticon.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => {
          return (
            <View style={{padding: 20}}>
              <Image
                style={{width: 380, height: 380, borderRadius: 20}}
                source={item?.img}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={{fontSize: 18}}>{item?.title1}s</Text>
                  <Text style={{color: '#999999'}}>{item?.title2}</Text>
                  <Text style={{color: '#999999'}}>{item?.title3}</Text>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                    {item?.price}{' '}
                    <Text style={{color: '#999999'}}>{item?.title4}</Text>
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={{width: 20, height: 20}}
                    source={require('../assets/u_star.png')}
                  />
                  <Text>4.94</Text>
                </View>
              </View>
              <View style={{position: 'absolute', top: 40, right: 30}}>
                <Image
                  resizeMode="contain"
                  style={{width: 20, height: 20}}
                  source={require('../assets/Vector.png')}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Template;

const styles = StyleSheet.create({});
