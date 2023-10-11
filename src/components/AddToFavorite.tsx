import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Property} from '@type/property';
import Entypo from 'react-native-vector-icons/Entypo';
import {TextField} from 'react-native-ui-lib';
import {ModalHeader} from './Header';
import {Button} from './Button';
import {useNavigation} from '@react-navigation/native';

export default function AddToFavorite({item}: {item: Property}) {
  const navigation = useNavigation();
  const [heart, setHeart] = useState<number>();
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState<string>('');
  return (
    <View>
      <View style={{position: 'absolute', top: 10, left: 10}}>
        <TouchableOpacity
          onPress={() => {
            if (heart != item?.id) {
              setHeart(item?.id);
              setModalVisible(true);
            } else {
              setHeart(item?.id);
            }
          }}>
          <Entypo
            name={heart === item?.id ? 'heart' : 'heart-outlined'}
            size={20}
            color={heart === item?.id ? 'red' : 'white'}
          />
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ModalHeader
              modalVisible
              CenterText="Name this wishlist"
              leftOnPress={() => {
                // setHeart();
                setModalVisible(false);
              }}
            />
            {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 6,
              }}>
              <View style={{width: '20%'}}>
                <TouchableOpacity
                  onPress={() => {
                    setHeart();
                    setModalVisible(false);
                  }}
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
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Name this wishlist
              </Text>
              <View style={{width: '20%'}} />
            </View> */}
            <View
              style={{
                width: '100%',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  width: '100%',
                  marginTop: 20,
                  borderRadius: 10,
                  height: 50,
                }}>
                <TextField
                  onChangeText={e => setName(e)}
                  placeholder="Name"
                  style={{paddingLeft: 10, height: 50}}
                />
              </View>
              <Text style={{color: 'black', marginTop: 10}}>
                50 characters maximum
              </Text>
            </View>
            <View
              style={{borderColor: 'lightgrey', borderWidth: 1, marginTop: 20}}
            />
            <Button
              style={{marginTop: 20}}
              onPress={() => navigation.navigate('Login')}
              title={'Create'}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    padding: 10,
    backgroundColor: ' rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    borderRadius: 20,
    width: '100%',
    height: 270,
    padding: 20,
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
