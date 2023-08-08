import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white', flex: 1, padding: 20}}>
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
              source={require('../assets/sliders.png')}
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
            source={require('../assets/icon.png')}
          />
          <TextInput
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
            source={require('../assets/mail.png')}
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
            source={require('../assets/notifications.png')}
          />
        </TouchableOpacity>
        <View style={{marginLeft: 10}}>
          <TouchableOpacity>
            <Image
              style={{width: 30, height: 30}}
              source={require('../assets/profile.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1}}>
        <Image
          style={{width: '100%', height: 100}}
          source={require('../assets/cover.png')}
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
              source={require('../assets/profile.png')}
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
                  <TextInput placeholder="User Name" />
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
                  <TextInput placeholder="Your Name" />
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
                  <TextInput
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
                  <TextInput placeholder="Email Address" />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View> */}
      <View>
        <Text style={{color: 'black', fontSize: 35, fontWeight: 'bold'}}>
          Profile
        </Text>
        <Text
          style={{
            color: 'lightgrey',
            fontSize: 15,
            fontWeight: 'bold',
            // width: 200,
            // marginTop: 10,
          }}>
          Log in to start planning your next trip
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            width: '100%',
            paddingVertical: 13,
            backgroundColor: 'rgb(183, 43, 95)',
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Log In</Text>
        </TouchableOpacity>
        <Text style={{marginTop: 30}}>
          Don't have an account?{' '}
          <Text
            style={{
              // fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
              textDecorationLine: 'underline',
            }}>
            SignUp
          </Text>
        </Text>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            marginTop: 20,
            padding: 20,
            paddingVertical: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text>Airbnb your place</Text>
            <Text>it's simple to get set up and start earning</Text>
          </View>
          <Image
            style={{width: 50, height: 50}}
            source={require('../assets/Rectangle2.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingVertical: 16,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
            marginBottom: 5,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather
              name="settings"
              size={20}
              color="black"
              style={{marginRight: 10}}
            />
            <Text style={{color: 'black'}}>Setting</Text>
          </View>
          <Feather
            name="chevron-right"
            size={20}
            color="black"
            style={{marginRight: 10}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingVertical: 16,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
            marginBottom: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather
              name="info"
              size={20}
              color="black"
              style={{marginRight: 10}}
            />
            <Text style={{color: 'black'}}>Get help</Text>
          </View>
          <Feather
            name="chevron-right"
            size={20}
            color="black"
            style={{marginRight: 10}}
          />
        </View>
      </View>
    </View>
  );
};
export default Profile;
