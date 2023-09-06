import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';

const MapScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <Text style={{color: 'black', fontSize: 35, fontWeight: 'bold'}}>
            Where's your place located?
          </Text>
          <Text
            style={{
              color: 'lightgrey',
              fontSize: 20,
              fontWeight: 'bold',
              width: 200,
              marginTop: 20,
            }}>
            Your address is only shared with guests after they’ve made a
            reservation.
          </Text>
          <View style={{marginTop: 20}}>
            <Image
              style={{width: '100%', height: 550}}
              source={require('@assets/staticmap.png')}
            />
          </View>
        </View>
      </ScrollView>
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
          onPress={() => navigation.navigate('PrivatePlace')}
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
  );
};
export default MapScreen;
