import React from 'react';

import {View, TouchableOpacity, Text} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Header = ({onPress, rightText, rightOnPress}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        backgroundColor: 'white',
      }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
        }}>
        <EvilIcons name={'chevron-left'} size={25} color="black" />
      </TouchableOpacity>
      <View style={{flex: 1}} />
      <View>
        {rightText && (
          <TouchableOpacity onPress={rightOnPress}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              {rightText}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const ModalHeader = ({
  leftOnPress,
  modalVisible,
  CenterText,
  rightOnPress,
  rightText,
  style,
}: any) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 1,
          paddingVertical: 8,
        },
        style,
      ]}>
      <View style={{width: '20%'}}>
        <TouchableOpacity
          onPress={leftOnPress}
          style={{
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
          }}>
          <EvilIcons
            name={modalVisible ? 'close' : 'chevron-left'}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          width: '60%',
          textAlign: 'center',
          color: 'black',
          fontWeight: 'bold',
        }}>
        {CenterText}
        {/* Edit Profile */}
      </Text>
      <View style={{width: '20%', alignItems: 'center'}}>
        {rightText && (
          <TouchableOpacity onPress={rightOnPress}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              {rightText}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export {Header, ModalHeader};
