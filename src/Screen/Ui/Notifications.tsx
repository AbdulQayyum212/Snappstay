import React from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import NotiTab from '../../TopTabs/NotiTab';

const Notifications = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderBottomWidth: 1,
          borderBottomColor: 'lightgrey',
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flex: 1,
          }}>
          <EvilIcons name={'chevron-left'} size={25} color="black" />
        </TouchableOpacity>
        <View style={{flex: 1}} />
        <View style={{flex: 1}} />
      </View>
      <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
          Notifications
        </Text>
      </View>
      <NotiTab />
    </SafeAreaView>
  );
};
export default Notifications;
