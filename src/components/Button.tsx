import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, style, textStyle, title}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          width: '100%',
          paddingVertical: 15,
          backgroundColor: 'black',
          borderRadius: 10,
          alignItems: 'center',
        },
        style,
      ]}>
      <Text style={[{color: 'white', fontWeight: 'bold'}, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const LeftIconBtn = ({Lefticon, title, onPress, style, textStyle}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      // onPress={() => setModalVisible(true)}
      style={[
        {
          backgroundColor: 'black',
          paddingVertical: 10,
          alignItems: 'center',
          borderRadius: 10,
          width: 130,
          flexDirection: 'row',
          paddingHorizontal: 20,
        },
        style,
      ]}>
      {Lefticon}
      {/* <Text style={{color: 'white'}}>Search</Text> */}
      <Text style={[{color: 'white'}, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
export {LeftIconBtn, Button};
