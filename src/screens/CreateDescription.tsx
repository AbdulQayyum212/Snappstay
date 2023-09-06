import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TextField} from 'react-native-ui-lib';
const CreateDescription = () => {
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
            Create your description
          </Text>
          <Text style={{marginTop: 20, fontSize: 20, width: 300}}>
            Share what makes your place special.
          </Text>
        </View>
        <View>
          <View
            style={{
              width: '100%',
              borderWidth: 1,
              paddingHorizontal: 10,
              borderRadius: 10,
              borderColor: '#EAEAEA',
              marginBottom: 10,
              height: 300,
            }}>
            <TextField
              style={{justifyContent: 'flex-start'}}
              multiline={true}
              numberOfLines={10}
              placeholder="Relax with the whole family at this peaceful place to stay"
            />
          </View>
          <Text style={{marginTop: 20, color: 'black'}}>59/500</Text>
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
            onPress={() => navigation.navigate('ChooseReservation')}
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
export default CreateDescription;
