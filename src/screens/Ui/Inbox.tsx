import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {TabController} from 'react-native-ui-lib';
import Home from '../Home';
import InboxTabNavigation from '@navigation/InboxTabNavigation';

const Inbox = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {/* <ScrollView
        contentContainerStyle={{padding: 20}}
        showsVerticalScrollIndicator={false}> */}
      <View style={{flex: 1}}>
        <View style={{paddingHorizontal: 20, marginTop: 20}}>
          <Text style={{color: 'black', fontSize: 25, fontWeight: '700'}}>
            Inbox
          </Text>
        </View>
        <InboxTabNavigation />
      </View>
    </SafeAreaView>
  );
};
export default Inbox;
