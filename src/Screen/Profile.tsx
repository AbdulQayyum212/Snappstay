import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Avatar} from 'react-native-ui-lib';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Profile = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(true);
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
      <View style={{flex: 1}}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
          Profile
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {user ? null : (
            <Text
              style={{
                color: 'grey',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Log in to start planning your next trip
            </Text>
          )}
          {user ? (
            <TouchableOpacity
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
                <Avatar
                  size={60}
                  source={{
                    uri: 'https://lh3.googleusercontent.com/-cw77lUnOvmI/AAAAAAAAAAI/AAAAAAAAAAA/WMNck32dKbc/s181-c/104220521160525129167.jpg',
                  }}
                  // label={IT}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={{color: 'black', fontSize: 20}}>User Name</Text>
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
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={{
                width: '100%',
                paddingVertical: 15,
                backgroundColor: 'rgb(183, 43, 95)',
                borderRadius: 10,
                alignItems: 'center',
                marginTop: 30,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Log In</Text>
            </TouchableOpacity>
          )}
          {user ? null : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 30,
              }}>
              <Text>
                Don't have an account?
                {/* <Text
            style={{
              // fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
              textDecorationLine: 'underline',
            }}>
            SignUp
          </Text> */}
              </Text>
              <TouchableOpacity>
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
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Airbnb your place
              </Text>
              <Text>it's simple to get set up and start earning</Text>
            </View>
            <Image
              style={{width: 50, height: 50}}
              source={require('../assets/Rectangle2.png')}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              Account settings
            </Text>
            {user ? (
              <>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    paddingVertical: 7,
                    // borderBottomWidth: 1,
                    // borderBottomColor: 'lightgrey',
                    marginBottom: 5,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons
                      name="person-circle-outline"
                      size={20}
                      color="black"
                      style={{marginRight: 10}}
                    />
                    <Text style={{color: 'black'}}>Personal Information</Text>
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
                    paddingVertical: 7,
                    // borderBottomWidth: 1,
                    // borderBottomColor: 'lightgrey',
                    marginBottom: 5,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons
                      name="payments"
                      size={20}
                      color="black"
                      style={{marginRight: 10}}
                    />
                    <Text style={{color: 'black'}}>Payment and payouts</Text>
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
                    paddingVertical: 7,
                    // borderBottomWidth: 1,
                    // borderBottomColor: 'lightgrey',
                    marginBottom: 5,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons
                      name="security"
                      size={20}
                      color="black"
                      style={{marginRight: 10}}
                    />
                    <Text style={{color: 'black'}}>Login & Security</Text>
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
                    paddingVertical: 7,
                    // borderBottomWidth: 1,
                    // borderBottomColor: 'lightgrey',
                    marginBottom: 5,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign
                      name="filetext1"
                      size={20}
                      color="black"
                      style={{marginRight: 10}}
                    />
                    <Text style={{color: 'black'}}>Texes</Text>
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
                    paddingVertical: 7,
                    // borderBottomWidth: 1,
                    // borderBottomColor: 'lightgrey',
                    marginBottom: 5,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons
                      name="translate"
                      size={20}
                      color="black"
                      style={{marginRight: 10}}
                    />
                    <Text style={{color: 'black'}}>Translation</Text>
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
                    paddingVertical: 7,
                    // borderBottomWidth: 1,
                    // borderBottomColor: 'lightgrey',
                    marginBottom: 5,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons
                      name="notifications-outline"
                      size={20}
                      color="black"
                      style={{marginRight: 10}}
                    />
                    <Text style={{color: 'black'}}>Notifications</Text>
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
                    paddingVertical: 7,
                    // borderBottomWidth: 1,
                    // borderBottomColor: 'lightgrey',
                    marginBottom: 5,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign
                      name="lock1"
                      size={20}
                      color="black"
                      style={{marginRight: 10}}
                    />
                    <Text style={{color: 'black'}}>Privacy and sharing</Text>
                  </View>
                  <Feather
                    name="chevron-right"
                    size={20}
                    color="black"
                    style={{marginRight: 10}}
                  />
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    paddingVertical: 7,
                    // borderBottomWidth: 1,
                    // borderBottomColor: 'lightgrey',
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
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 8,
                    paddingVertical: 7,
                    borderTopWidth: 1,
                    borderTopColor: 'lightgrey',
                    marginBottom: 20,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
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
                </TouchableOpacity>
              </>
            )}
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                Legal
              </Text>
            </View>
            {user ? (
              <TouchableOpacity style={{marginTop: 20}}>
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
  );
};
export default Profile;
