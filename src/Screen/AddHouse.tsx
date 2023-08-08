import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const AddHouse = () => {
  const navigation = useNavigation();
  const [img, setImg] = useState([]);
  const pickImg = async () => {
    const res = await launchImageLibrary(
      {mediaType: 'photo', selectionLimit: 5},
      value => {
        setImg([...img, value?.assets[0]]);
      },
    );
    console.log('==================================== img', res);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 35,
              fontWeight: 'bold',
              width: 230,
            }}>
            Add some photos of your house
          </Text>
          <Text style={{marginTop: 20, fontSize: 20, width: 300}}>
            You'll need 5 photos to get started. You can add more or make
            changes later.
          </Text>
        </View>
        <View>
          <View
            style={{
              width: '100%',
              borderWidth: 1,
              // borderColor: 'lightgrey',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 50,
              borderRadius: 20,
              borderStyle: 'dotted',
            }}>
            <Image
              style={{width: 50, height: 50}}
              source={require('../assets/photo.png')}
            />
            <Text style={{fontSize: 22, color: 'black'}}>
              Drag your photos here
            </Text>
            <Text>Choose at least 5 photos</Text>
            <TouchableOpacity
              onPress={pickImg}
              style={{
                width: '50%',
                borderRadius: 10,
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 10,
                marginTop: 30,
              }}>
              <Text style={{color: 'white'}}>Upload from your device</Text>
            </TouchableOpacity>
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
            onPress={() => navigation.navigate('AddHouseTitle')}
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
export default AddHouse;
