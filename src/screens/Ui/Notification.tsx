import React from 'react';
import {Text, View} from 'react-native';

const Notification = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'black', fontWeight: 'bold'}}>
        You're all caught up
      </Text>
    </View>
  );
};
export default Notification;
