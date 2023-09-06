import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

const Describe = () => {
  const navigation = useNavigation();

  const data = [
    {
      img: require('@assets/Vectors.png'),
      name: 'Home',
    },
    {
      img: require('@assets/Vectors.png'),
      name: 'Apartment',
    },
    {
      img: require('@assets/Vectors.png'),
      name: 'Boat',
    },
    {
      img: require('@assets/Vectors.png'),
      name: 'Cabin',
    },
    {
      img: require('@assets/Vectors.png'),
      name: 'Farm',
    },
    {
      img: require('@assets/Vectors.png'),
      name: 'Guesthouse',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{color: 'black', fontSize: 35, fontWeight: 'bold'}}>
            Next, let's describe your barn
          </Text>
          <Text style={{marginTop: 20, fontSize: 20, width: 300}}>
            Choose up to 2 highlights. We'll use these to get your description
            started.
          </Text>
          <View>
            <FlatList
              numColumns={2}
              data={data}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      // width: 100,
                      paddingHorizontal: 10,
                      height: 50,
                      marginBottom: 10,
                      marginTop: 20,
                      padding: 10,
                      borderColor: 'lightgrey',
                      borderWidth: 1,
                      marginRight: 20,
                      flexDirection: 'row',
                      borderRadius: 20,
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{width: 20, height: 20, marginRight: 10}}
                      source={item?.img}
                    />
                    <Text>{item?.name}</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View />
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
            onPress={() => navigation.navigate('CreateDescription')}
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
export default Describe;
