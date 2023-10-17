import React from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';
import tw from 'twrnc';

const CustomMarker = props => {
  const {coordinate, price, onPress, isSelected} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={[
          tw`w-10 h-10 border-2 border-yellow-500 shadow-lg bg-black rotate-45 items-center justify-center m-2`,
          {transform: 'rotate(45deg)'},
        ]}>
        <Text
          style={{
            color: isSelected ? 'white' : 'black',
            transform: 'rotate(-45deg)',
            fontWeight: 'bold',
            fontSize: 10,
          }}>
          ${price}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
