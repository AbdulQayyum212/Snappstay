import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Header} from '../../components/Header';

const PersonalInfo = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header onPress={() => navigation.goBack()} />
      <View style={{flex: 1, padding: 20}}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
          Edit Personal Info
        </Text>
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'lightgrey',
            paddingHorizontal: 10,
            marginTop: 30,
          }}>
          <Text
            style={{
              marginBottom: -10,
              marginLeft: 3,
              marginTop: 10,
              fontSize: 12,
            }}>
            First Name
          </Text>
          <TextInput placeholder="First Name" />
        </View>
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'lightgrey',
            marginTop: 10,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              marginBottom: -10,
              marginLeft: 3,
              marginTop: 10,
              fontSize: 12,
            }}>
            Last Name
          </Text>
          <TextInput placeholder="Last Name" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            borderTopColor: 'lightgrey',
            borderTopWidth: 1,
            paddingVertical: 20,
            marginTop: 20,
          }}>
          <View>
            <Text style={{color: 'black'}}>Email</Text>
            <Text style={{color: 'grey', marginTop: 5}}>i****b@gmail.com</Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            borderTopColor: 'lightgrey',
            borderTopWidth: 1,
            paddingVertical: 5,
            marginTop: 20,
          }}>
          <View>
            <Text style={{color: 'black'}}>Phone Number</Text>
            <Text style={{color: 'grey', marginTop: 5}}>
              For notification, reminders, and help logging in.
            </Text>
            <Text style={{color: 'grey', marginTop: 20}}>+92*********22</Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            borderTopColor: 'lightgrey',
            borderTopWidth: 1,
            paddingVertical: 20,
            marginTop: 20,
          }}>
          <View>
            <Text style={{color: 'black'}}>Government ID</Text>
            <Text style={{color: 'grey', marginTop: 5}}>Not provided</Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            borderTopColor: 'lightgrey',
            borderTopWidth: 1,
            paddingVertical: 20,
            marginTop: 20,
          }}>
          <View>
            <Text style={{color: 'black'}}>Emergency</Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default PersonalInfo;
