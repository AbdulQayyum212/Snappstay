import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const PrivatePlace = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{color: 'black', fontSize: 35, fontWeight: 'bold'}}>
            What type of place will guests have?
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <View
            style={{
              width: '100%',
              height: 150,
              borderWidth: 1,
              borderColor: 'lightgrey',
              borderRadius: 10,
              marginBottom: 20,
              padding: 20,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              An entire place
            </Text>
            <Text>Guest have the whole place to themselver</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 150,
              borderWidth: 1,
              borderColor: 'lightgrey',
              borderRadius: 10,
              marginBottom: 20,
              padding: 20,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              An private room
            </Text>
            <Text>
              Guest sleep in a private room but some area may be shared with you
              or other
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 150,
              borderWidth: 1,
              borderColor: 'lightgrey',
              borderRadius: 10,
              marginBottom: 20,
              padding: 20,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              An Share room
            </Text>
            <Text>
              Guest sleep in a private room but some area may be shared with you
              or other
            </Text>
          </View>
        </View>
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
            onPress={() => navigation.navigate('SharePlace')}
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
export default PrivatePlace;
