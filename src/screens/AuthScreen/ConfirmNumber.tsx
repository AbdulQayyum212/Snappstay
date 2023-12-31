import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {TextField} from 'react-native-ui-lib';
import {Button} from '../../components/Button';
const ConfirmNumber = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: 20,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>Enter the code we send over SMS to *******23</Text>
          <View
            style={{
              borderWidth: 1,
              width: 200,
              marginTop: 20,
              borderRadius: 10,
              paddingVertical: 2,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <TextField
              placeholder="1"
              placeholderTextColor={'black'}
              style={{
                // backgroundColor: 'red',
                width: 30,
                height: 43,
                alignItems: 'center',
                fontSize: 20,
              }}
            />
            <TextField
              placeholder="2"
              placeholderTextColor={'black'}
              style={{
                // backgroundColor: 'red',
                width: 30,
                height: 43,
                alignItems: 'center',
                fontSize: 20,
              }}
            />
            <TextField
              placeholder="3"
              placeholderTextColor={'black'}
              style={{
                // backgroundColor: 'red',
                width: 30,
                height: 43,
                alignItems: 'center',
                fontSize: 20,
              }}
            />
            <TextField
              placeholder="4"
              placeholderTextColor={'black'}
              style={{
                // backgroundColor: 'red',
                width: 30,
                height: 43,
                alignItems: 'center',
                fontSize: 20,
              }}
            />
            <TextField
              placeholder="5"
              placeholderTextColor={'black'}
              style={{
                // backgroundColor: 'red',
                width: 30,
                height: 43,
                alignItems: 'center',
                fontSize: 20,
              }}
            />
            <TextField
              placeholder="6"
              placeholderTextColor={'black'}
              style={{
                // backgroundColor: 'red',
                width: 30,
                height: 43,
                alignItems: 'center',
                fontSize: 20,
              }}
            />
          </View>
          <View
            style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
            <Text>Didn't get an SMS?</Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'black',
                  marginLeft: 5,
                  textDecorationLine: 'underline',
                }}>
                Send again
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <TouchableOpacity
        onPress={() => navigation.navigate('Notifi')}
        style={{
          width: '100%',
          paddingVertical: 13,
          backgroundColor: 'rgb(183, 43, 95)',
          borderRadius: 10,
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Continue</Text>
      </TouchableOpacity> */}
        <Button
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('Notifi')}
          title={'Continue'}
        />
      </View>
    </SafeAreaView>
  );
};
export default ConfirmNumber;
