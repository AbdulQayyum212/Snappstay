import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity, Text, TextInput, Image} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';

const PrivacyandSharing = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderBottomWidth: 1,
          borderBottomColor: 'lightgrey',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            // borderWidth: 1,
            // width: 30,
            // height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            // borderColor: 'lightgrey',
          }}>
          <EvilIcons name={'chevron-left'} size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, padding: 20}}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            fontWeight: 'bold',
            width: '80%',
          }}>
          Privacy and sharing
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
            marginBottom: 5,
          }}>
          <View>
            <Text style={{color: 'black'}}>Request your personal data</Text>
            <Text style={{color: 'grey', width: '95%'}}>
              we'll create a file for your to download your personal data.
            </Text>
          </View>
          <Feather
            name="chevron-right"
            size={20}
            color="black"
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
            marginBottom: 5,
          }}>
          <View>
            <Text style={{color: 'black'}}>Delete your account</Text>
            <Text style={{color: 'grey', width: 300, fontSize: 13}}>
              This will permanently delete your account and your data, in
              accordance with applicable law.
            </Text>
          </View>
          <Feather
            name="chevron-right"
            size={20}
            color="black"
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
            marginBottom: 5,
          }}>
          <View>
            <Text style={{color: 'black'}}>Sharing</Text>
            <Text style={{color: 'grey', width: 300, fontSize: 13}}>
              Decide how your profile and activity are show to others.
            </Text>
          </View>
          <Feather
            name="chevron-right"
            size={20}
            color="black"
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
            marginBottom: 5,
          }}>
          <View>
            <Text style={{color: 'black'}}>Services</Text>
            <Text style={{color: 'grey', width: 300, fontSize: 13}}>
              View and manage service that you've connected to your SnappStay
              account.
            </Text>
          </View>
          <Feather
            name="chevron-right"
            size={20}
            color="black"
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PrivacyandSharing;
