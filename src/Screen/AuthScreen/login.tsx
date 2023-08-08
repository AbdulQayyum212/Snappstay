import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';

const Login = () => {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      {/* <Image
        style={{width: '100%', height: 500}}
        source={require('../../assets/Maskgroup.png')}
      />
      <View style={{flex: 1, padding: 20}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
          Snapp <Text style={{color: '#A3A3A3', fontSize: 18}}>Stay!</Text>
        </Text>
        <Text style={{fontSize: 30}}>Book Your</Text>
        <Text style={{fontSize: 30}}>Next Stay With Ease</Text>
        <Text style={{color: '#2E2E2ECC'}}>Your Key To Comfortable Travel</Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('StackNavigation')}
            style={{
              width: '100%',
              paddingVertical: 13,
              alignItems: 'center',
              backgroundColor: 'black',
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('StackNavigation')}
            style={{
              width: '100%',
              paddingVertical: 13,
              marginTop: 20,
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 10,
              borderWidth: 2,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <Text style={{color: 'black', fontSize: 20}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View> */}
      <View>
        <Text style={{color: 'black', fontSize: 35, fontWeight: 'bold'}}>
          Log In
        </Text>
        <View>
          <SelectDropdown
            data={countries}
            renderCustomizedButtonChild={() => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: 15,
                  }}>
                  <View>
                    <Text style={{fontSize: 10}}>Country/Region</Text>
                    <Text style={{color: 'black'}}>Pakistan (+92)</Text>
                  </View>
                  <Feather name="chevron-down" size={20} />
                </View>
              );
            }}
            buttonStyle={{
              width: '100%',
              borderWidth: 1,
              borderColor: 'lightgrey',
              backgroundColor: 'white',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              marginTop: 10,
            }}
            buttonTextStyle={{color: 'lightgrey'}}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <View
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: 'lightgrey',
              // paddingVertical: 5,
              backgroundColor: 'white',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingHorizontal: 10,
              marginTop: -2,
            }}>
            <Text style={{fontSize: 10, marginTop: 10}}>Phone number</Text>
            <TextInput
              placeholder="Phone number"
              style={{
                width: '100%',
                height: 35,
                fontSize: 10,
                marginLeft: -2,
                // backgroundColor: 'red',
              }}
            />
          </View>
        </View>
        <Text style={{marginTop: 30}}>
          we'll call or text to confirm your number. standard message and data
          rates apply.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('ConfirmNumber')}
          style={{
            width: '100%',
            paddingVertical: 13,
            backgroundColor: 'rgb(183, 43, 95)',
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Continue</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
            marginBottom: 20,
          }}>
          <View
            style={{borderWidth: 1, width: 160, borderColor: 'lightgrey'}}
          />
          <Text style={{fontWeight: 'bold'}}>or</Text>
          <View
            style={{borderWidth: 1, width: 160, borderColor: 'lightgrey'}}
          />
        </View>
        <TouchableOpacity
          style={{
            width: '100%',
            paddingVertical: 13,
            // backgroundColor: 'rgb(183, 43, 95)',
            borderWidth: 1,
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Feather name="mail" size={20} color="black" />
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Continue with Email
          </Text>
          <View />
        </TouchableOpacity>
        {Platform.OS == 'ios' ? (
          <TouchableOpacity
            style={{
              width: '100%',
              paddingVertical: 13,
              // backgroundColor: 'rgb(183, 43, 95)',
              borderWidth: 1,
              borderRadius: 10,
              alignItems: 'center',
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            <Ionicons name="logo-apple" size={20} color="black" />
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Continue with Apple
            </Text>
            <View />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          style={{
            width: '100%',
            paddingVertical: 13,
            // backgroundColor: 'rgb(183, 43, 95)',
            borderWidth: 1,
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Image
            source={require('../../assets/google-logo.png')}
            style={{width: 20, height: 20}}
          />
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Continue with Google
          </Text>
          <View />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '100%',
            paddingVertical: 13,
            // backgroundColor: 'rgb(183, 43, 95)',
            borderWidth: 1,
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Image
            source={require('../../assets/Facebook-logo.png')}
            style={{width: 20, height: 20}}
          />
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Continue with Facebook
          </Text>
          <View />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;
