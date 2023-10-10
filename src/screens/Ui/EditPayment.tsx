import {Header} from '@components/Header';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const EditPayment = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
              source={require('@assets/masterLogo.png')}
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
              source={require('@assets/masterLogo.png')}
            />
            <Text style={{color: 'black'}}>Mastercard</Text>
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
    </SafeAreaView>
  );
};
export default EditPayment;
