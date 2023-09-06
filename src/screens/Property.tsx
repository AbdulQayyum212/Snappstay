import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

const Property = () => {
  const data = [
    {
      img: require('@assets/u_search.png'),
      name: 'Home',
    },
    {
      img: require('@assets/u_search.png'),
      name: 'Apartment',
    },
    {
      img: require('@assets/u_search.png'),
      name: 'Boat',
    },
    {
      img: require('@assets/u_search.png'),
      name: 'Cabin',
    },
    {
      img: require('@assets/u_search.png'),
      name: 'Farm',
    },
    {
      img: require('@assets/u_search.png'),
      name: 'Guesthouse',
    },
    {
      img: require('@assets/u_search.png'),
      name: 'Barn',
    },
    {
      img: require('@assets/u_search.png'),
      name: 'Camper/RV',
    },
    {
      img: require('@assets/u_search.png'),
      name: 'Hotel',
    },
  ];
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <View style={{flex: 1}}>
        <Text style={{color: 'black', fontSize: 37, fontWeight: 'bold'}}>
          Please provide information about your property.
        </Text>
        <FlatList
          numColumns={2}
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: 170,
                  height: 100,
                  marginBottom: 10,
                  marginTop: 20,
                  padding: 10,
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                  marginRight: 20,
                  borderRadius: 10,
                }}>
                <View>
                  <Image style={{width: 40, height: 40}} source={item?.img} />
                  <Text>{item?.name}</Text>
                </View>
              </View>
            );
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('MapScreen')}
          style={{
            backgroundColor: 'black',
            paddingHorizontal: 5,
            width: 60,
            alignItems: 'center',
            borderRadius: 7,
            paddingVertical: 5,
            alignSelf: 'flex-end',
          }}>
          <Text style={{color: 'white'}}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Property;
