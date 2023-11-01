import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import tw from 'twrnc';

export default function DateSelector() {
  const [dateModal, setDateModal] = useState(false);

  const [state, setState] = useState({
    selectedStartDate: null,
    selectedEndDate: null,
  });
  const minDate = new Date(); // Today
  const maxDate = new Date(2017, 6, 3);
  const startDate = state.selectedStartDate
    ? state.selectedStartDate.toString()
    : '';
  const endDate = state.selectedEndDate ? state.selectedEndDate.toString() : '';

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setState(prev => ({...prev, selectedEndDate: date}));
    } else {
      setState(prev => ({
        ...prev,
        selectedStartDate: date,
        selectedEndDate: null,
      }));
    }
  };
  return (
    <>
      <TouchableOpacity onPress={() => setDateModal(true)}>
        <View style={tw`flex-row justify-between items-center py-2`}>
          <View style={tw`gap-1`}>
            <Text style={tw`text-black font-bold text-lg`}>Dates</Text>
            <Text style={tw`text-xs font-semibold`}>feb 17-18</Text>
          </View>
          <View style={tw`flex-row`}>
            <Text style={tw`underline text-black font-bold`}>Edit</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={dateModal}>
        <View style={styles.centeredView}>
          <View style={tw`bg-white gap-4 items-center p-4 w-full rounded-lg`}>
            <View
              style={tw`flex-row items-center border-gray-300 py-2 border-b-2`}>
              <TouchableOpacity
                onPress={() => {
                  setDateModal(false);
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
                  Selected Date
                </Text>
              </View>
            </View>
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={minDate}
              // maxDate={maxDate}
              todayBackgroundColor="#f2e6ff"
              selectedDayColor="#7300e6"
              selectedDayTextColor="#FFFFFF"
              onDateChange={onDateChange}
            />
            <TouchableOpacity
              // onPress={CheckOut}
              onPress={() => {
                console.log('state', state);

                setDateModal(false);
              }}
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
}

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
