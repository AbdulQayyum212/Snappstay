// SignupScreen.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signup} from '@stores/actions/signupActions'; // Import the signup action
import {selectSignupState} from '@stores/store'; // Import the signup state selector

import {useNavigation} from '@react-navigation/native';
import {Image, Platform, SafeAreaView, TouchableOpacity} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {TextField} from 'react-native-ui-lib';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from '@components/Button';
import tw from 'twrnc';
import {SignUpCredentials} from '@type/auth';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const value = {
  first_name: 'Ubaid Ur Rehma',
  last_name: 'Syed',
  phone: '03112260532',
  email: 's.u.shah688499@gmail.com',
  password: '123456',
  conf_password: '123456',
};

const SignupScreen = () => {
  const dispatch = useDispatch<any>();
  const navigation = useNavigation();
  const {isSigningUp, user, error} = useSelector(selectSignupState);

  const [credentials, setCredentials] = useState<SignUpCredentials>({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    password: '',
    conf_password: '',
  });

  const handleSignup = () => {
    dispatch(signup(credentials));
  };

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw` items-center justify-center shadow-md bg-white px-2 w-10 h-10 left-1  p-2 rounded-full z-10`}>
            <EvilIcons name={'chevron-left'} size={20} color="black" />
          </TouchableOpacity>
          <View>
            <View style={tw`gap-2`}>
              <Text style={{color: 'black', fontSize: 35, fontWeight: 'bold'}}>
                Sign Up
              </Text>
              <View
                style={{
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  backgroundColor: 'white',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}>
                <Text style={{fontSize: 10, marginTop: 10}}>First Name</Text>
                <TextField
                  value={credentials.first_name}
                  onChangeText={text =>
                    setCredentials({...credentials, first_name: text})
                  }
                  placeholder="First Name"
                  style={{
                    width: '100%',
                    height: 35,
                    fontSize: 10,
                    marginLeft: -2,
                  }}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  backgroundColor: 'white',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}>
                <Text style={{fontSize: 10, marginTop: 10}}>Last Name</Text>
                <TextField
                  value={credentials.last_name}
                  onChangeText={text =>
                    setCredentials({...credentials, last_name: text})
                  }
                  placeholder="Last Name"
                  style={{
                    width: '100%',
                    height: 35,
                    fontSize: 10,
                    marginLeft: -2,
                  }}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  backgroundColor: 'white',
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  paddingHorizontal: 10,
                  marginTop: -2,
                }}>
                <Text style={{fontSize: 10, marginTop: 10}}>Phone number</Text>
                <TextField
                  value={credentials.phone}
                  onChangeText={text =>
                    setCredentials({...credentials, phone: text})
                  }
                  placeholder="Phone number"
                  style={{
                    width: '100%',
                    height: 35,
                    fontSize: 10,
                    marginLeft: -2,
                  }}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  backgroundColor: 'white',
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  paddingHorizontal: 10,
                  marginTop: -2,
                }}>
                <Text style={{fontSize: 10, marginTop: 10}}>Email</Text>
                <TextField
                  value={credentials.email}
                  onChangeText={text =>
                    setCredentials({...credentials, email: text})
                  }
                  placeholder="Email"
                  style={{
                    width: '100%',
                    height: 35,
                    fontSize: 10,
                    marginLeft: -2,
                  }}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  backgroundColor: 'white',
                  borderRadius: 10,
                  borderBottomRightRadius: 10,
                  paddingHorizontal: 10,
                  marginTop: -2,
                }}>
                <Text style={{fontSize: 10, marginTop: 10}}>Password</Text>
                <TextField
                  value={credentials.password}
                  onChangeText={text =>
                    setCredentials({...credentials, password: text})
                  }
                  placeholder="Password"
                  style={{
                    width: '100%',
                    height: 35,
                    fontSize: 10,
                    marginLeft: -2,
                  }}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  backgroundColor: 'white',
                  borderRadius: 10,
                  borderBottomRightRadius: 10,
                  paddingHorizontal: 10,
                  marginTop: -2,
                }}>
                <Text style={{fontSize: 10, marginTop: 10}}>
                  Confirm Password
                </Text>
                <TextField
                  value={credentials.conf_password}
                  onChangeText={text =>
                    setCredentials({...credentials, conf_password: text})
                  }
                  placeholder="Confirm Password"
                  style={{
                    width: '100%',
                    height: 35,
                    fontSize: 10,
                    marginLeft: -2,
                  }}
                />
              </View>
            </View>

            <Text style={{marginTop: 30}}>
              By Clicking Signup You agrees to our Terms and conditions
            </Text>
            <Button
              style={{marginTop: 20}}
              onPress={handleSignup}
              disabled={isSigningUp}
              title={'Sign Up'}
            />
            {isSigningUp && <ActivityIndicator />}
            {user && <Text>{user.message}</Text>}
            {error && (
              <Text style={{color: 'red'}}>{JSON.stringify(error)}</Text>
            )}
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
                borderWidth: 1,
                borderRadius: 10,
                alignItems: 'center',
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}>
              <Image
                source={require('@assets/google-logo.png')}
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
                borderWidth: 1,
                borderRadius: 10,
                alignItems: 'center',
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}>
              <Image
                source={require('@assets/Facebook-logo.png')}
                style={{width: 20, height: 20}}
              />
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Continue with Facebook
              </Text>
              <View />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    // <View>
    //   <Text>Please sign up</Text>
    //   <TextInput
    //     placeholder="Username"
    //     value={credentials.email}
    //     onChangeText={text => setCredentials({...credentials, email: text})}
    //   />
    //   <TextInput
    //     placeholder="Password"
    //     value={credentials.password}
    //     onChangeText={text => setCredentials({...credentials, password: text})}
    //     secureTextEntry
    //   />

    //   <Button title="Sign Up" onPress={handleSignup} disabled={isSigningUp} />
    //   {isSigningUp && <ActivityIndicator />}
    //   {user && <Text>Signup successful! User ID: {user.id}</Text>}
    //   {error && <Text style={{color: 'red'}}>{JSON.stringify(error)}</Text>}
    // </View>
  );
};

export default SignupScreen;
