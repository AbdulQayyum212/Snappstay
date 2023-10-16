import {ModalHeader} from '@components/Header';
import {useNavigation} from '@react-navigation/native';
import {selectAuthState} from '@stores/store';
import React, {useRef, useState} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Avatar} from 'react-native-ui-lib';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';
import tw from 'twrnc';

export default function EditProfileModel() {
  const {isAuthenticated, user, error, isLoggingIn} =
    useSelector(selectAuthState);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [img, setImg] = useState<any>({});
  const ref = useRef<any>(null);
  const pickImg = async () => {
    ref?.current.close();
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImg(image);
      console.log('image', image);
    });
    // const res = await launchImageLibrary(
    //   {mediaType: 'photo', selectionLimit: 1},
    //   value => {
    //     setImg(value?.assets[0]);
    //     // setImg([...img, value?.assets[0]]);
    //   },
    // );
    console.log('==================================== img', img);
  };
  const openCamera = async () => {
    ref.current.close();
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log('image', image);
      setImg(image);
    });
    // const res = await launchCamera({mediaType: 'photo'}, value => {
    //   console.log('Camera', value);
    //   setImg(value?.assets[0]);
    //   // setImg([...img, value?.assets[0]]);
    // });
  };
  if (user == null) return navigation.goBack();
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={tw`absolute right-0`}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Edit</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styles.centeredView}>
          <View style={[tw`pt-[${insets.top}+px]`, styles.modalView]}>
            <ModalHeader
              // style={{paddingHorizontal: 10}}
              modalVisible
              CenterText="Edit Profile"
              rightText="Save"
              rightOnPress={() => setModalVisible(false)}
              leftOnPress={() => setModalVisible(false)}
            />
            {/* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 1,
            paddingVertical: 8,
          }}>
          <View style={{width: '20%'}}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <EvilIcons
                name={modalVisible ? 'close' : 'chevron-left'}
                size={20}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              width: '60%',
              textAlign: 'center',
              color: 'black',
              fontWeight: 'bold',
            }}>
            Edit Profile
          </Text>
          <View style={{width: '20%', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              // onPress={() => setModalVisible(true)}
            >
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}
            <View>
              <View style={{padding: 20, alignItems: 'center'}}>
                <Avatar
                  size={220}
                  source={
                    img != undefined
                      ? {uri: img?.path}
                      : require('@assets/bgimage.png')
                  }
                  // label={IT}
                />
                <TouchableOpacity
                  // onPress={pickImg}
                  // onPress={openCamera}
                  onPress={() => ref.current.open()}
                  style={{
                    position: 'absolute',
                    right: 15,
                    bottom: 0,
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                  }}>
                  <Entypo name={'camera'} size={20} color="black" />
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    borderBottomColor: 'lightgrey',
                    borderBottomWidth: 1,
                    paddingVertical: 20,
                  }}>
                  <View style={tw`gap-2`}>
                    <Text style={{color: 'black'}}>About me</Text>
                    <Text style={{color: 'gray'}}>
                      {user.bio || 'Please Add Bio'}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        textDecorationLine: 'underline',
                      }}>
                      Add
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    borderBottomColor: 'lightgrey',
                    borderBottomWidth: 1,
                    paddingVertical: 20,
                  }}>
                  <View style={tw`gap-2`}>
                    <Text style={{color: 'black'}}>Location</Text>
                    <Text style={{color: 'gray'}}>
                      {user.full_address || 'Please Add Address'}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        textDecorationLine: 'underline',
                      }}>
                      Add
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    borderBottomColor: 'lightgrey',
                    borderBottomWidth: 1,
                    paddingVertical: 20,
                  }}>
                  <View style={tw`gap-2`}>
                    <Text style={{color: 'black'}}>Tax</Text>
                    <Text style={{color: 'gray'}}>
                      {user.tax_id || 'Please Add Tax Id'}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        textDecorationLine: 'underline',
                      }}>
                      Add
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    borderBottomColor: 'lightgrey',
                    borderBottomWidth: 1,
                    paddingVertical: 20,
                  }}>
                  <Text style={{color: 'black'}}>Language</Text>
                  <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        textDecorationLine: 'underline',
                      }}>
                      Add
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            </View>
            <RBSheet
              ref={ref}
              height={170}
              openDuration={250}
              customStyles={{
                container: {
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                },
              }}>
              <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
                <TouchableOpacity
                  onPress={openCamera}
                  style={{
                    width: '100%',
                    paddingVertical: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'black', fontSize: 20}}>Take Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={pickImg}
                  style={{
                    width: '100%',
                    paddingVertical: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'black', fontSize: 20}}>
                    Choose Image
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => ref?.current.close()}
                  style={{
                    width: '100%',
                    paddingVertical: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'black', fontSize: 20}}>Close</Text>
                </TouchableOpacity>
              </View>
            </RBSheet>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

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
