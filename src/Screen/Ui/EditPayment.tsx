import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity, Text,  Image} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import {Header} from '../../components/Header';

const EditPayment = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header onPress={() => navigation.goBack()} />
      <View style={{flex: 1, padding: 20}}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            fontWeight: 'bold',
            width: '80%',
          }}>
          Edit your payment methods
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 30,
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 1,
            paddingVertical: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 30, height: 30, marginRight: 10}}
              source={require('../../assets/masterLogo.png')}
            />
            <Text style={{color: 'black'}}>Visa</Text>
          </View>
          <Feather
            name="chevron-right"
            size={20}
            color="black"
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 30,
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 1,
            paddingVertical: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 30, height: 30, marginRight: 10}}
              source={require('../../assets/masterLogo.png')}
            />
            <Text style={{color: 'black'}}>Mestercard</Text>
          </View>
          <Feather
            name="chevron-right"
            size={20}
            color="black"
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 10}}>
          <Text style={{color: 'black'}}>Add payment methods</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default EditPayment;
