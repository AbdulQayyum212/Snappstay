import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

const GuestPlaceoffer = () => {
  const data = [
    {
      img: require('@assets/wifi.png'),
      name: 'wifi',
    },
    {
      img: require('@assets/tv.png'),
      name: 'TV',
    },
    {
      img: require('@assets/Kitchen.png'),
      name: 'Kitchen',
    },
    {
      img: require('@assets/Washer.png'),
      name: 'Washer',
    },
    {
      img: require('@assets/car.png'),
      name: 'Free parking on premises',
    },
    {
      img: require('@assets/parking.png'),
      name: 'Paid parking on premises',
    },
    {
      img: require('@assets/Air.png'),
      name: 'Air conditioning',
    },
    {
      img: require('@assets/Dedicated.png'),
      name: 'Dedicated workspace',
    },
  ];
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <View style={{flex: 1}}>
        <Text style={{color: 'black', fontSize: 35, fontWeight: 'bold'}}>
          Please provide information about your property.
        </Text>
        <Text
          style={{
            color: 'lightgrey',
            fontSize: 20,
            fontWeight: 'bold',
            width: 300,
            marginTop: 20,
          }}>
          You can add more amenities after you publish your listing.
        </Text>
        <FlatList
          numColumns={3}
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  width: 110,
                  height: 100,
                  marginBottom: 10,
                  marginTop: 20,
                  padding: 10,
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                  marginRight: 20,
                }}>
                <View>
                  <Image style={{width: 40, height: 40}} source={item?.img} />
                  <Text>{item?.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 5,
              width: 60,
              alignItems: 'center',
              borderRadius: 7,
              paddingVertical: 5,
              marginTop: 40,
              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <Text style={{color: 'black'}}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddHouse')}
            style={{
              backgroundColor: 'black',
              paddingHorizontal: 5,
              width: 60,
              alignItems: 'center',
              borderRadius: 7,
              paddingVertical: 5,
              marginTop: 40,
              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <Text style={{color: 'white'}}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default GuestPlaceoffer;
