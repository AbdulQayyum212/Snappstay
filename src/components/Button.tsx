import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button as UIButton} from 'react-native-ui-lib';
import Feather from 'react-native-vector-icons/Feather';
const Button = ({onPress, style, textStyle, title, disabled}: any) => {
  return (
    <UIButton
      disabled={disabled}
      onPress={onPress}
      backgroundColor={'black'}
      style={[
        {
          width: '100%',
          paddingVertical: 15,
          // backgroundColor: 'black',
          borderRadius: 10,
          alignItems: 'center',
        },
        style,
      ]}>
      <Text style={[{color: 'white', fontWeight: 'bold'}, textStyle]}>
        {title}
      </Text>
    </UIButton>
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
const CustomBtn = ({centerText, onPress, rightIcon}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingVertical: 7,
        marginBottom: 5,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {rightIcon}
        <Text style={{color: 'black'}}>{centerText}</Text>
      </View>
      <Feather
        name="chevron-right"
        size={20}
        color="black"
        style={{marginRight: 5}}
      />
    </TouchableOpacity>
  );
};
export {CustomBtn, LeftIconBtn, Button};
