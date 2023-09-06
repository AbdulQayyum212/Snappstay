import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
const Message = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TouchableWithoutFeedback>
        <View style={{paddingHorizontal: 20, flexDirection: 'row'}}>
          <View>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: 'lightgrey',
              }}>
              <Image
                resizeMode="cover"
                style={{width: 50, height: 50, borderRadius: 50}}
                source={require('@assets/Image2.png')}
              />
            </View>
            <View
              style={{
                backgroundColor: 'rgba(52, 52, 52, 0.9)',
                width: 40,
                height: 40,
                position: 'absolute',
                top: 20,
                left: 20,
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white'}}>+2</Text>
            </View>
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{color: 'black'}}>
              Stay & fun <Text style={{color: 'grey'}}>-Quan 1</Text>
            </Text>
            <Text style={{color: 'black'}}>New event</Text>
            <Text style={{color: 'grey'}}>Upcomming bokking feb 17 -18 </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default Message;
