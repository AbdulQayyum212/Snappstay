import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import tw from 'twrnc';
import {Stepper} from 'react-native-ui-lib';
import {Property} from '@type/property';
const GuestSelector = ({property}: {property: Property}) => {
  const [guestModal, setGuestModal] = useState(false);
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  return (
    <>
      <TouchableOpacity onPress={() => setGuestModal(true)}>
        <View style={tw`flex-row justify-between items-center py-2`}>
          <View style={tw`gap-1`}>
            <Text style={tw`text-black font-bold text-lg`}>Guests</Text>
            <Text style={tw`text-xs font-semibold`}>
              {Object.values(guests).reduce((x, i) => i + x, 0)} guest
            </Text>
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
                <Text
                  style={tw`text-lg  text-centers font-semibold text-black`}>
                  Guest
                </Text>
              </View>
            </View>
            <View style={tw`gap-8 w-full`}>
              <View style={tw`flex-row justify-between items-center`}>
                <View>
                  <Text style={tw`text-black text-lg`}>Adults</Text>
                  <Text style={tw`text-xs text-black`}>ages 13 or above</Text>
                </View>
                <Stepper
                  onValueChange={(v: number) => {
                    setGuests(prev => ({...prev, adults: v}));
                  }}
                  value={guests.adults}
                  maxValue={
                    property.guests -
                    (guests.children + guests.infants + guests.pets)
                  }
                  minValue={0}
                  small={true}
                />
              </View>
              <View style={tw`flex-row justify-between items-center`}>
                <View>
                  <Text style={tw`text-black text-lg`}>Children</Text>
                  <Text style={tw`text-xs text-black`}>ages 2-12</Text>
                </View>
                <Stepper
                  minValue={0}
                  small={true}
                  maxValue={
                    property.guests -
                    (guests.adults + guests.infants + guests.pets)
                  }
                  value={guests.children}
                  onValueChange={(v: number) => {
                    setGuests(prev => ({...prev, children: v}));
                  }}
                />
              </View>
              <View style={tw`flex-row justify-between items-center`}>
                <View>
                  <Text style={tw`text-black text-lg`}>Infants</Text>
                  <Text style={tw`text-xs text-black`}>under 2</Text>
                </View>
                <Stepper
                  minValue={0}
                  small={true}
                  value={guests.infants}
                  maxValue={
                    property.guests -
                    (guests.adults + guests.children + guests.pets)
                  }
                  onValueChange={(v: number) => {
                    setGuests(prev => ({...prev, infants: v}));
                  }}
                />
              </View>
              {property.animals != 'No' && (
                <View style={tw`flex-row justify-between items-center`}>
                  <View>
                    <Text style={tw`text-black text-lg`}>Pets</Text>
                    <Text style={tw`text-xs text-black`}>
                      Bringing a services animal
                    </Text>
                  </View>
                  <Stepper
                    minValue={0}
                    small={true}
                    maxValue={
                      property.guests -
                      guests.adults +
                      guests.children +
                      guests.infants
                    }
                    value={guests.pets}
                    onValueChange={(v: number) => {
                      setGuests(prev => ({...prev, pets: v}));
                    }}
                  />
                </View>
              )}
            </View>
            <TouchableOpacity
              // onPress={CheckOut}
              onPress={() => setGuestModal(false)}
              style={{
                backgroundColor: 'black',
                paddingVertical: 15,
                alignItems: 'center',
                width: '100%',
                borderRadius: 10,
                paddingHorizontal: 10,
              }}>
              <Text style={{color: 'white'}}>Save</Text>
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
