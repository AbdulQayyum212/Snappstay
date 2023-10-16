import {View, Text, Image} from 'react-native';
import React from 'react';

const Marker = props => {
  const {coordinate, price, onPress, isSelected} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? 'black' : 'white',
          padding: 5,
          borderRadius: 20,
          borderColor: 'grey',
          borderWidth: 1,
        }}>
        <Image
          source={require('@assets/location.png')}
          style={{tintColor: 'red', width: 100, height: 100}}
        />
      </View>
    </Marker>
  );
};

export default Marker;
