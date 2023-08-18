import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, style, textStyle, title}) => {
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
export default Button;
