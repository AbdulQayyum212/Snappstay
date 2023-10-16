import React from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';
import tw from 'twrnc';

const CustomMarker = props => {
  const {coordinate, price, onPress, isSelected} = props;
  return (
    <Marker
      coordinate={coordinate}
      onPress={onPress}
      style={[
        tw`w-8 h-8 bg-yellow-200 shadow-lg rotate-45 p-1`,
        {transform: 'rotate(45deg)'},
      ]}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isSelected ? 'black' : 'white',
          // padding: 5,
          // height: 50,
          // width: 50,
          // borderRadius: 20,
          // transform: 'rotate(45deg)',
          borderColor: 'grey',
          // borderWidth: 1,
        }}>
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
