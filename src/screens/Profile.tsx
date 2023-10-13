import {Button, CustomBtn} from '@components/Button';
import {useNavigation} from '@react-navigation/native';
import {selectAuthState} from '@stores/store';
// import {User_Token} from '@stores/Actions/AuthAction';
import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Avatar} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {connect, useDispatch, useSelector} from 'react-redux';
import {logout} from '@stores/auth/authActions';
import {ClearUser} from '@stores/auth/userActions';
import tw from 'twrnc';

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Profile = () => {
  const {isAuthenticated, user, error, isLoggingIn} =
    useSelector(selectAuthState);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const toggleSwitch = () => {
    if (isAuthenticated) {
      // dispatch(User_Token(false));
    } else {
      // dispatch(User_Token(true));
    }
  };
  const handleLogout = () => {
    dispatch(logout());
    dispatch(ClearUser());
  };

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: 'white'}}>
      <View style={{backgroundColor: 'white', flex: 1, padding: 10}}>
        {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 100,
          paddingHorizontal: 20,
        }}>
        <View style={{marginRight: 10}}>
          <TouchableOpacity>
            <Image
              style={{width: 25, height: 25}}
              source={require('@assets/sliders.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            height: 35,
            borderColor: 'lightgrey',
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 7,
            backgroundColor: '#FBFBFB',
          }}>
          <Image
            style={{width: 20, height: 20, marginRight: 10}}
            source={require('@assets/icon.png')}
          />
          <TextField
            style={{
              height: 35,
              width: '89%',
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
            }}
            placeholder="search..."
          />
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            width: 20,
            height: 20,
            marginRight: 10,
            marginLeft: 10,
          }}>
          <Image
            style={{width: 10, height: 10}}
            resizeMode="center"
            source={require('@assets/mail.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            width: 20,
            height: 20,
          }}>
          <Image
            style={{width: 15, height: 15}}
            source={require('@assets/notifications.png')}
          />
        </TouchableOpacity>
        <View style={{marginLeft: 10}}>
          <TouchableOpacity>
            <Image
              style={{width: 30, height: 30}}
              source={require('@assets/profile.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1}}>
        <Image
          style={{width: '100%', height: 100}}
          source={require('@assets/cover.png')}
        />
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'flex-end',
            marginTop: -50,
          }}>
          <View>
            <Image
              style={{width: 100, height: 100}}
              source={require('@assets/profile.png')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '75%',
            }}>
            <View>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Edward</Text>
              <Text>Update your profile</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 8,
                  backgroundColor: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 10,
                }}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 10}}>
                  Save
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 8,
                  //   backgroundColor: 'black',
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 10}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{padding: 20}}>
            <View style={{padding: 20, borderWidth: 1, borderRadius: 10}}>
              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                  User Name
                </Text>
                <View
                  style={{
                    width: '100%',
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    borderColor: '#EAEAEA',
                    marginBottom: 10,
                  }}>
                  <TextField placeholder="User Name" />
                </View>
              </View>
              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                  Your Name
                </Text>
                <View
                  style={{
                    width: '100%',
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    borderColor: '#EAEAEA',
                    marginBottom: 10,
                  }}>
                  <TextField placeholder="Your Name" />
                </View>
              </View>
              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                  Bio
                </Text>
                <View
                  style={{
                    width: '100%',
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    borderColor: '#EAEAEA',
                    marginBottom: 10,
                  }}>
                  <TextField
                    style={{justifyContent: 'flex-start'}}
                    multiline={true}
                    numberOfLines={10}
                    placeholder="User Name"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                  Email Address
                </Text>
                <View
                  style={{
                    width: '100%',
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    borderColor: '#EAEAEA',
                    marginBottom: 10,
                  }}>
                  <TextField placeholder="Email Address" />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View> */}
        <View style={{flex: 1}}>
          <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
            Profile
          </Text>
          {/* <View style={{alignItems: 'flex-end', marginTop: 5, marginBottom: 5}}>
            <Switch
              trackColor={{false: '#767577', true: 'black'}}
              thumbColor={isAuthenticated ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isAuthenticated}
            />
          </View> */}
          <ScrollView showsVerticalScrollIndicator={false}>
            {isAuthenticated ? null : (
              <Text
                style={{
                  color: 'grey',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Log in to start planning your next trip
              </Text>
            )}
            {isAuthenticated ? (
              <TouchableOpacity
                onPress={() => navigation.navigate('ProfileStep2')}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 20,
                  paddingVertical: 40,
                  borderBottomWidth: 1,
                  borderBottomColor: 'lightgrey',
                  marginBottom: 5,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Avatar size={60} source={require('@assets/bgimage.png')} />
                  <View style={{marginLeft: 10}}>
                    <Text style={{color: 'black', fontSize: 20}}>
                      {user?.first_name} {user?.last_name}
                    </Text>
                    <Text style={{color: 'lightgrey'}}>Show profile</Text>
                  </View>
                </View>
                <Feather
                  name="chevron-right"
                  size={20}
                  color="black"
                  style={{marginRight: 10}}
                />
              </TouchableOpacity>
            ) : (
              <Button
                style={{marginTop: 20}}
                onPress={() => navigation.navigate('Login')}
                title={'Log In'}
              />
            )}
            {!isAuthenticated && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 30,
                }}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      fontSize: 12,
                      marginLeft: 4,
                      textDecorationLine: 'underline',
                    }}>
                    SignUp
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            {isAuthenticated && (
              <TouchableOpacity
                style={tw`flex-row items-center justify-center border border-gray-200 bg-white shadow-md rounded-lg p-6`}
                onPress={() => navigation.navigate('StartEarning')}>
                <View style={tw`flex-2 gap-2`}>
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    SnappStay your place
                  </Text>
                  <Text style={{width: '80%'}}>
                    it's simple to get set up and start earning
                  </Text>
                </View>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('@assets/Rectangle2.png')}
                />
              </TouchableOpacity>
            )}
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                Account settings
              </Text>
              {isAuthenticated ? (
                <>
                  <CustomBtn
                    rightIcon={
                      <Ionicons
                        name="person-circle-outline"
                        size={20}
                        color="black"
                        style={{marginRight: 10}}
                      />
                    }
                    onPress={() => navigation.navigate('PersonalInfo')}
                    centerText="Personal Information"
                  />
                  <CustomBtn
                    rightIcon={
                      <MaterialIcons
                        name="payments"
                        size={20}
                        color="black"
                        style={{marginRight: 10}}
                      />
                    }
                    onPress={() => navigation.navigate('EditPayment')}
                    centerText="Payment and payouts"
                  />
                  <CustomBtn
                    rightIcon={
                      <MaterialIcons
                        name="translate"
                        size={20}
                        color="black"
                        style={{marginRight: 10}}
                      />
                    }
                    onPress={() => navigation.navigate('Translation')}
                    centerText="Translation"
                  />
                  <CustomBtn
                    rightIcon={
                      <Ionicons
                        name="notifications-outline"
                        size={20}
                        color="black"
                        style={{marginRight: 10}}
                      />
                    }
                    onPress={() => navigation.navigate('Notifications')}
                    centerText="Notifications"
                  />
                  <CustomBtn
                    rightIcon={
                      <AntDesign
                        name="lock1"
                        size={20}
                        color="black"
                        style={{marginRight: 10}}
                      />
                    }
                    onPress={() => navigation.navigate('PrivacyAndSharing')}
                    centerText="Privacy and sharing"
                  />
                  <CustomBtn
                    rightIcon={
                      <Feather
                        name="info"
                        size={20}
                        color="black"
                        style={{marginRight: 10}}
                      />
                    }
                    onPress={() => navigation.navigate('HelpCenter')}
                    centerText="Get help"
                  />
                </>
              ) : (
                <>
                  <CustomBtn
                    rightIcon={
                      <Feather
                        name="info"
                        size={20}
                        color="black"
                        style={{marginRight: 10}}
                      />
                    }
                    onPress={() => navigation.navigate('HelpCenter')}
                    centerText="Get help"
                  />
                </>
              )}
              {isAuthenticated ? (
                <TouchableOpacity
                  style={{marginTop: 20}}
                  onPress={handleLogout}>
                  <Text
                    style={{
                      color: 'black',
                      textDecorationLine: 'underline',
                      fontWeight: '400',
                    }}>
                    Log out
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
