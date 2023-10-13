import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {TextField} from 'react-native-ui-lib';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from '../../components/Button';
import tw from 'twrnc';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthState} from '@stores/store';
import {login} from '@stores/auth/authActions';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const data = {
  email: 'ubaid@snapp.com',
  password: '123456',
};

const Login = () => {
  const countries = [
    'Pakistan (+92)',
    'Usa (+1)',
    'Australia (+61)',
    'Ireland (+353)',
  ];
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [selectCode, setSelectCode] = useState('Pakistan (+92)');
  const dispatch = useDispatch<any>();
  const {isAuthenticated, user, error, isLoggingIn} =
    useSelector(selectAuthState);

  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({
    email: 'ubaid@snapp.com',
    password: '123456',
  });

  const handleLogin = () => {
    const formData = new FormData();
    formData.append('email', credentials.email);
    formData.append('password', credentials.password);

    dispatch(login(formData));
  };
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: 'white'}}>
      <ScrollView style={tw`gap-2 p-4`}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw` items-center justify-center shadow-md bg-white px-2 w-10 h-10 left-1  p-2 rounded-full z-10`}>
          <EvilIcons name={'chevron-left'} size={20} color="black" />
        </TouchableOpacity>
        <View>
          <View style={tw`gap-2`}>
            <Text style={{color: 'black', fontSize: 35, fontWeight: 'bold'}}>
              Log In
            </Text>
            {/* <SelectDropdown
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
                      <Text style={{color: 'black'}}>{selectCode}</Text>
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
              dropdownStyle={{borderRadius: 10}}
              buttonTextStyle={{color: 'lightgrey'}}
              onSelect={(selectedItem, index) => {
                setSelectCode(selectedItem);
                console.log(selectedItem, 'selectedItem');
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            /> */}
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
                borderBottomLeftRadius: 10,
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
          </View>
          {/* <Text style={{marginTop: 30}}>
            we'll call or text to confirm your number. standard message and data
            rates apply.
          </Text> */}
          <Text style={{marginTop: 30}}>
            By Clicking Login you agree to our Terms of Service and Privacy
          </Text>
          {/* <TouchableOpacity
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
        </TouchableOpacity> */}
          {/* <Button
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('ConfirmNumber')}
            title={'Continue'}
          /> */}
          <Button
            style={{marginTop: 20}}
            onPress={handleLogin}
            disabled={isLoggingIn}
            title={'Login'}
          />
          {isLoggingIn && <ActivityIndicator />}
          {user && <Text>{user.id}</Text>}
          {error && <Text style={{color: 'red'}}>{JSON.stringify(error)}</Text>}
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
      </ScrollView>
    </SafeAreaView>
  );
};
export default Login;
