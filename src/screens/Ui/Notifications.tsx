import React from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import NotificationsTabNavigation from '@navigation/NotificationsTabNavigation';
import {Header} from '@components/Header';

const Notifications = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header onPress={() => navigation.goBack()} />
      <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
          Notifications
        </Text>
      </View>
      <NotificationsTabNavigation />
    </SafeAreaView>
  );
};
export default Notifications;
