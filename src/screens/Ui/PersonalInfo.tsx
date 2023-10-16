import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {TextField} from 'react-native-ui-lib';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Header} from '../../components/Header';
import {selectAuthState, selectProfileState} from '@stores/store';
import {useDispatch, useSelector} from 'react-redux';
import {User} from '@type/user';
import {Button} from '@components/Button';
import {updateProfile} from '@stores/actions/profileActions';
import FormData from 'form-data';
const PersonalInfo = () => {
  const dispatch = useDispatch<any>();

  const {user} = useSelector(selectAuthState);
  const {error, isUpdatingProfile} = useSelector(selectProfileState);
  const navigation = useNavigation();
  const [credentials, setCredentials] = useState<User | null>(user);

  if (credentials == null) return navigation.goBack();

  var maskid = credentials.email.replace(
    /^(.)(.*)(.@.*)$/,
    (_, a, b, c) => a + b.replace(/./g, '*') + c,
  );
  var maskedNumber = credentials.phone
    .slice(-4)
    .padStart(credentials.phone.length, '*');

  const handleProfileInfo = () => {
    const formData = new FormData();
    formData.append('first_name', credentials.first_name);
    formData.append('last_name', credentials.last_name);
    formData.append('user_name', credentials.user_name);
    formData.append('email', credentials.email);
    formData.append('phone', credentials.phone);
    formData.append('full_address', credentials.full_address);
    formData.append('mailing_address', credentials.mailing_address);
    dispatch(updateProfile(formData));
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
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
            <TextField
              style={{height: 50}}
              placeholder="First Name"
              value={credentials.first_name}
              onChangeText={text =>
                setCredentials({...credentials, first_name: text})
              }
            />
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
            <TextField
              style={{height: 50}}
              placeholder="Last Name"
              value={credentials.last_name}
              onChangeText={text =>
                setCredentials({...credentials, last_name: text})
              }
            />
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
              User Name
            </Text>
            <TextField
              style={{height: 50}}
              placeholder="User Name"
              value={credentials.user_name}
              onChangeText={text =>
                setCredentials({...credentials, user_name: text})
              }
            />
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
              Bio (About)
            </Text>
            <TextField
              style={{height: 50}}
              placeholder="Bio (About)"
              value={credentials.bio}
              onChangeText={text => setCredentials({...credentials, bio: text})}
            />
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
              <Text style={{color: 'grey', marginTop: 5}}>{maskid}</Text>
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
              <Text style={{color: 'grey', marginTop: 20}}>{maskedNumber}</Text>
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
              <Text style={{color: 'black'}}>Address</Text>
              <View>
                <Text style={{color: 'grey', marginTop: 5}}>
                  Full Address {credentials.full_address || 'Not Provided'}
                </Text>
                <Text style={{color: 'grey', marginTop: 5}}>
                  Mail Address {credentials.mailing_address || 'Not Provided'}
                </Text>
              </View>
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
          {/* <View
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
            <Text style={{color: 'black'}}>Address</Text>
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
        </View> */}

          <Button
            style={{marginTop: 20}}
            onPress={handleProfileInfo}
            disabled={isUpdatingProfile}
            title={'Update Profile'}
          />
          {isUpdatingProfile && <ActivityIndicator />}
          {error && <Text style={{color: 'red'}}>{JSON.stringify(error)}</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default PersonalInfo;
