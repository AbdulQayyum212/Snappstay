import {Button} from '@components/Button';
import EditProfileModel from '@components/EditProfileModel';
import {Header, ModalHeader} from '@components/Header';
import {useNavigation} from '@react-navigation/native';
import {selectAuthState} from '@stores/store';
import React, {useRef, useState} from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Avatar, Icon} from 'react-native-ui-lib';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';
import tw from 'twrnc';

const ProfileStep2 = () => {
  const {isAuthenticated, user, error, isLoggingIn} =
    useSelector(selectAuthState);

  const year = new Date(user?.created_at).getFullYear();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: 'white'}}>
      <Header
        // rightOnPress={() => setModalVisible(true)}
        // rightText="Edit"
        onPress={() => navigation.goBack()}
      />
      {/* <View
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
        <TouchableOpacity onPress={() => setModalVisible(true)}>
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
      <View style={{flex: 1, padding: 20}}>
        <View style={{}}>
          <Avatar
            size={100}
            source={require('@assets/bgimage.png')}
            // label={IT}
          />
          <View style={{marginLeft: 5, marginTop: 10}}>
            <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
              Hi, i'm {user?.first_name}
            </Text>
            <Text style={{color: 'grey', fontSize: 18, fontWeight: 'bold'}}>
              Joined {year}
            </Text>

            <EditProfileModel />
          </View>
          <View
            style={{borderColor: 'lightgrey', borderWidth: 1, marginTop: 30}}
          />
          <View style={{marginTop: 20}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              {' '}
              Identity verification
            </Text>
            <Text style={{fontSize: 16, marginLeft: 5, marginTop: 5}}>
              Show others you'r really you with the identity verification badge.{' '}
            </Text>
          </View>

          <Button
            style={{marginTop: 20, width: 170, paddingVertical: 15}}
            // onPress={() => navigation.navigate('Login')}
            title={'Get the badge'}
          />
          <Text style={{marginTop: 10}}>
            Some info is show in it's original language{' '}
          </Text>
          <Text
            style={{
              marginTop: 10,
              textDecorationLine: 'underline',
              color: 'black',
              fontWeight: 'bold',
            }}>
            Translate
          </Text>
          <Text style={{marginTop: 30, fontWeight: 'bold', fontSize: 20}}>
            User Name{' '}
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              Confirmed
            </Text>
          </Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Image
              style={{
                width: 15,
                height: 15,
                marginRight: 20,
                tintColor: 'black',
              }}
              source={require('@assets/check.png')}
            />
            <Text style={{color: 'black'}}>Email address </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Image
              style={{
                width: 15,
                height: 15,
                marginRight: 20,
                tintColor: 'black',
              }}
              source={require('@assets/check.png')}
            />
            <Text style={{color: 'black'}}>Phone Number </Text>
          </View>
          <View
            style={{borderColor: 'lightgrey', borderWidth: 1, marginTop: 40}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    shadowColor: '#000',
    // padding: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    flex: 1,
    // margin: 20,
    // borderRadius: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: '100%',
    // padding: 35,
    height: 500,
    // padding: 20,
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // alignItems: 'center',
    // shadowColor: '#000',
    // padding: 20,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default ProfileStep2;
