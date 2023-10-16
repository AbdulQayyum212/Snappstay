// VerifyScreen.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  ScrollView,
  FlatList,
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
import {Button, LeftIconBtn} from '@components/Button';
import tw from 'twrnc';
import {SignUpCredentials} from '@type/auth';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import Fontisto from 'react-native-vector-icons/Fontisto';
import usePostRequest from '@hooks/usePostRequest';
import axios from 'axios';

const value = {
  first_name: 'Ubaid Ur Rehma',
  last_name: 'Syed',
  phone: '03112260532',
  email: 's.u.shah688499@gmail.com',
  password: '123456',
  conf_password: '123456',
};

interface verifyState {
  utility: ImageOrVideo | null;
  photo_front: ImageOrVideo | null;
  photo_back: ImageOrVideo | null;
  ssn: string;
  dob: string;
  tax_id: string;
}

const VerifyScreen = () => {
  const dispatch = useDispatch<any>();
  const navigation = useNavigation();
  const {isSigningUp} = useSelector(selectSignupState);

  const {responseData, loading, error, makePostRequest} = usePostRequest(
    'https://www.snappstay.com/api/user/verify',
  );

  const [credentials, setCredentials] = useState<verifyState>({
    utility: null,
    photo_front: null,
    photo_back: null,
    ssn: '54212121',
    dob: '28-06-1995',
    tax_id: '898989',
  });

  const pickImg = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      multiple: false,
    }).then(Img => {
      setCredentials(prev => ({...prev, utility: Img}));
    });
  };
  const pickImgFront = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      multiple: false,
    }).then(Img => {
      setCredentials(prev => ({...prev, photo_front: Img}));
    });
  };
  const pickImgBack = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      multiple: false,
    }).then(Img => {
      setCredentials(prev => ({...prev, photo_back: Img}));
    });
  };

  const handleVerify = async () => {
    // if (credentials.photo_front == null) return;
    // if (credentials.photo_back == null) return;
    // if (credentials.utility == null) return;
    const formData = new FormData();
    if (credentials.utility != null) {
      formData.append('utility', {
        uri: credentials.utility.path,
        type: credentials.utility.mime,
        name: credentials.utility.path.split('/').pop(),
      });
    }
    if (credentials.photo_front != null) {
      formData.append('photo_front', {
        uri: credentials.photo_front.path,
        type: credentials.photo_front.mime,
        name: credentials.photo_front.path.split('/').pop(),
      });
    }

    if (credentials.photo_back != null)
      formData.append('photo_back', {
        uri: credentials.photo_back.path,
        type: credentials.photo_back.mime,
        name: credentials.photo_back.path.split('/').pop(),
      });
    formData.append('ssn', credentials.ssn);
    formData.append('dob', credentials.dob);
    formData.append('tax_id', credentials.tax_id);

    makePostRequest(formData);
  };

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{backgroundColor: 'white', padding: 20}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw` items-center justify-center shadow-md bg-white px-2 w-10 h-10 left-1  p-2 rounded-full z-10`}>
            <EvilIcons name={'chevron-left'} size={20} color="black" />
          </TouchableOpacity>
          <View>
            <View style={tw`gap-2`}>
              <Text style={{color: 'black', fontSize: 35, fontWeight: 'bold'}}>
                Verify
              </Text>

              <View style={tw`gap-2`}>
                <Text
                  style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                  Utility
                </Text>
                {credentials.utility == null ? (
                  <View
                    style={{
                      borderWidth: 1,
                      height: 250,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 20,
                      borderStyle: 'dashed',
                    }}>
                    <Feather name="image" size={50} color={'black'} />
                    <Text style={{textAlign: 'center', marginTop: 30}}>
                      Drag and drop the images to customize the gallery order.
                      Click on the star icon to set the featured image
                    </Text>
                    <Text>(Minimum size 1440 x 900 px)</Text>
                    <LeftIconBtn
                      onPress={pickImg}
                      style={{
                        width: '60%',
                        alignItems: 'center',
                        marginTop: 10,
                        justifyContent: 'center',
                        paddingVertical: 15,
                      }}
                      Lefticon={
                        <Feather
                          name="upload"
                          size={20}
                          style={{marginRight: 10}}
                          color="white"
                        />
                      }
                      title={'Select and upload'}
                    />
                  </View>
                ) : (
                  <View
                    style={{
                      marginTop: 20,
                      borderRadius: 5,
                      overflow: 'hidden',
                      marginRight: 12,
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: 115,
                      height: 115,
                    }}>
                    <Image
                      style={{width: 115, height: 115}}
                      source={{uri: credentials.utility?.path}}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        setCredentials(prev => ({...prev, utility: null}));
                      }}
                      style={{
                        position: 'absolute',
                        top: 3,
                        right: 3,
                        width: 12,
                        height: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        borderRadius: 50,
                      }}>
                      <Fontisto name="close-a" size={5} color={'red'} />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <View style={tw`gap-2`}>
                <Text
                  style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                  Photo Front
                </Text>
                {credentials.photo_front == null ? (
                  <View
                    style={{
                      borderWidth: 1,
                      height: 250,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 20,
                      borderStyle: 'dashed',
                    }}>
                    <Feather name="image" size={50} color={'black'} />
                    <Text style={{textAlign: 'center', marginTop: 30}}>
                      Drag and drop the images to customize the gallery order.
                      Click on the star icon to set the featured image
                    </Text>
                    <Text>(Minimum size 1440 x 900 px)</Text>
                    <LeftIconBtn
                      onPress={pickImgFront}
                      style={{
                        width: '60%',
                        alignItems: 'center',
                        marginTop: 10,
                        justifyContent: 'center',
                        paddingVertical: 15,
                      }}
                      Lefticon={
                        <Feather
                          name="upload"
                          size={20}
                          style={{marginRight: 10}}
                          color="white"
                        />
                      }
                      title={'Select and upload'}
                    />
                  </View>
                ) : (
                  <View
                    style={{
                      marginTop: 20,
                      borderRadius: 5,
                      overflow: 'hidden',
                      marginRight: 12,
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: 115,
                      height: 115,
                    }}>
                    <Image
                      style={{width: 115, height: 115}}
                      source={{uri: credentials.photo_front?.path}}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        setCredentials(prev => ({...prev, photo_front: null}));
                      }}
                      style={{
                        position: 'absolute',
                        top: 3,
                        right: 3,
                        width: 12,
                        height: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        borderRadius: 50,
                      }}>
                      <Fontisto name="close-a" size={5} color={'red'} />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <View style={tw`gap-2`}>
                <Text
                  style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                  Back Front
                </Text>
                {credentials.photo_back == null ? (
                  <View
                    style={{
                      borderWidth: 1,
                      height: 250,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 20,
                      borderStyle: 'dashed',
                    }}>
                    <Feather name="image" size={50} color={'black'} />
                    <Text style={{textAlign: 'center', marginTop: 30}}>
                      Drag and drop the images to customize the gallery order.
                      Click on the star icon to set the featured image
                    </Text>
                    <Text>(Minimum size 1440 x 900 px)</Text>
                    <LeftIconBtn
                      onPress={pickImgBack}
                      style={{
                        width: '60%',
                        alignItems: 'center',
                        marginTop: 10,
                        justifyContent: 'center',
                        paddingVertical: 15,
                      }}
                      Lefticon={
                        <Feather
                          name="upload"
                          size={20}
                          style={{marginRight: 10}}
                          color="white"
                        />
                      }
                      title={'Select and upload'}
                    />
                  </View>
                ) : (
                  <View
                    style={{
                      marginTop: 20,
                      borderRadius: 5,
                      overflow: 'hidden',
                      marginRight: 12,
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: 115,
                      height: 115,
                    }}>
                    <Image
                      style={{width: 115, height: 115}}
                      source={{uri: credentials.photo_back?.path}}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        setCredentials(prev => ({...prev, photo_back: null}));
                      }}
                      style={{
                        position: 'absolute',
                        top: 3,
                        right: 3,
                        width: 12,
                        height: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        borderRadius: 50,
                      }}>
                      <Fontisto name="close-a" size={5} color={'red'} />
                    </TouchableOpacity>
                  </View>
                )}
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
                <Text style={{fontSize: 10, marginTop: 10}}>SSN</Text>
                <TextField
                  value={credentials.ssn}
                  onChangeText={text =>
                    setCredentials({...credentials, ssn: text})
                  }
                  placeholder="SSN"
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
                <Text style={{fontSize: 10, marginTop: 10}}>Date of Birth</Text>
                <TextField
                  value={credentials.dob}
                  onChangeText={text =>
                    setCredentials({...credentials, dob: text})
                  }
                  placeholder="Date of Birth"
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
                <Text style={{fontSize: 10, marginTop: 10}}>Tax Id</Text>
                <TextField
                  value={credentials.tax_id}
                  onChangeText={text =>
                    setCredentials({...credentials, tax_id: text})
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
            </View>

            <Text style={{marginTop: 30}}>
              Make Sure Your uploading the right Document
            </Text>
            <Button
              style={{marginTop: 20}}
              onPress={handleVerify}
              disabled={loading}
              title={'Sign Up'}
            />
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

export default VerifyScreen;
