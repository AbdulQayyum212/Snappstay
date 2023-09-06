import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const StartLogin = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground style={{flex: 1}} source={require('@assets/image.png')}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000B0',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View />
        <Image
          style={{width: 200, height: 200}}
          source={require('@assets/LOGO1.png')}
        />
        <View style={{width: '100%', padding: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                width: '47%',
                paddingVertical: 8,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: '#1877F2',
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}>
              <Image
                style={{width: 30, height: 30}}
                source={require('@assets/Facebook-logo.png')}
              />
              <Text style={{color: 'white', fontSize: 12}}>
                Sign In with Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '47%',
                flexDirection: 'row',
                paddingVertical: 8,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}>
              <Image
                style={{width: 30, height: 30}}
                source={require('@assets/google-logo.png')}
              />
              <Text style={{color: 'black', fontSize: 12}}>
                Sign In with Google
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Image
              style={{width: 90, height: 2}}
              source={require('@assets/Line.png')}
            />
            <Text style={{color: 'white'}}>Or Use Your Mobile & Email</Text>
            <Image
              style={{width: 90, height: 2}}
              source={require('@assets/Line.png')}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
              width: '100%',
              paddingVertical: 10,
              marginTop: 10,
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 20,
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
            <Text style={{color: 'black', fontSize: 12}}>
              Sign Up Using With Phone Mobile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default StartLogin;
