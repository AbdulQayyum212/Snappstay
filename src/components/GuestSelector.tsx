import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import tw from 'twrnc';
import {Stepper} from 'react-native-ui-lib';
const GuestSelector = () => {
  const [guestModal, setGuestModal] = useState(false);
  const [adults, setAdults] = useState(0);

  return (
    <>
      <TouchableOpacity onPress={() => setGuestModal(true)}>
        <View style={tw`flex-row justify-between items-center py-2`}>
          <View style={tw`gap-1`}>
            <Text style={tw`text-black font-bold text-lg`}>Guests</Text>
            <Text style={tw`text-xs font-semibold`}>1 guest</Text>
          </View>
          <View style={tw`flex-row`}>
            <Text style={tw`underline text-black font-bold`}>Edit</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={guestModal}>
        <View style={styles.centeredView}>
          <View style={tw`bg-white gap-4 items-center p-4 w-full rounded-lg`}>
            <View
              style={tw`flex-row items-center border-gray-300 py-2 border-b-2`}>
              <TouchableOpacity
                onPress={() => {
                  setGuestModal(false);
                }}
                style={{
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                }}>
                <EvilIcons name={'close'} size={20} color="black" />
              </TouchableOpacity>
              <View style={tw`flex-1 items-center`}>
                <Text style={tw`text-lg  text-centers font-semibold`}>
                  Guest
                </Text>
              </View>
            </View>
            <View style={{padding: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                  paddingVertical: 10,
                }}>
                <View>
                  <Text style={{color: 'black'}}>Adults</Text>
                  <Text style={{fontSize: 12}}>ages 13 or above</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Stepper
                      onValueChange={(v: number) => {
                        console.log('Stepper', v);
                        setAdults(v);
                      }}
                      value={adults}
                      minValue={0}
                      small={true}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                  paddingVertical: 10,
                }}>
                <View>
                  <Text style={{color: 'black'}}>Children</Text>
                  <Text style={{fontSize: 12}}>ages 2-12</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Stepper minValue={0} small={true} />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                  paddingVertical: 10,
                }}>
                <View>
                  <Text style={{color: 'black'}}>Infants</Text>
                  <Text style={{fontSize: 12}}>under 2</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Stepper minValue={0} small={true} />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                  paddingVertical: 10,
                }}>
                <View>
                  <Text style={{color: 'black'}}>Pets</Text>
                  <Text style={{fontSize: 12}}>Bringing a services animal</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Stepper minValue={0} small={true} />
                </View>
              </View>
            </View>
            <TouchableOpacity
              // onPress={CheckOut}
              //   onPress={}
              style={{
                backgroundColor: 'black',
                paddingVertical: 15,
                alignItems: 'center',
                width: '100%',
                borderRadius: 10,
                paddingHorizontal: 10,
              }}>
              <Text style={{color: 'white'}}>Check Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    shadowColor: '#000',
    padding: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    // flex: 1,
    // margin: 20,
    borderRadius: 20,
    width: '100%',
    // padding: 35,
    height: 500,
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
export default GuestSelector;
