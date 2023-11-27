import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import tw from 'twrnc';

export default function DateSelector({
  state,
  setState,
}: {
  state: {
    selectedStartDate: Date;
    selectedEndDate: Date | null;
    days: number;
  };
  setState: React.Dispatch<
    React.SetStateAction<{
      selectedStartDate: Date;
      selectedEndDate: Date | null;
      days: number;
    }>
  >;
}) {
  const [dateModal, setDateModal] = useState(false);

  const minDate = new Date(); // Today
  const maxDate = new Date(2017, 6, 3);

  const onDateChange = (date: any, type: string) => {
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

  const removeSecondMonth = () => {
    const startDate = state.selectedStartDate
      ? moment(state.selectedStartDate).format('MMM D')
      : '';
    const endDate = state.selectedEndDate
      ? moment(state.selectedEndDate).format('MMM D')
      : '';

    const inputString = `${startDate}-${endDate}`;
    const word = inputString.substring(0, 3);
    const firstIndex = inputString.indexOf(word);
    if (firstIndex !== -1) {
      const secondIndex = inputString.indexOf(word, firstIndex + 1);
      if (secondIndex !== -1) {
        // Remove the second occurrence of the specified word
        return (
          inputString.slice(0, secondIndex) +
          inputString.slice(secondIndex + word.length)
        );
      }
    }
    return inputString;
  };
  return (
    <>
      <TouchableOpacity onPress={() => setDateModal(true)}>
        <View style={tw`flex-row justify-between items-center py-2`}>
          <View style={tw`gap-1`}>
            <Text style={tw`text-black font-bold text-lg`}>Dates</Text>
            <Text style={tw`text-xs font-semibold`}>{removeSecondMonth()}</Text>
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
                  var fromDate = moment(state.selectedStartDate);
                  var toDate = moment(state.selectedEndDate);
                  let days = toDate.diff(fromDate, 'days');
                  if (!state.selectedEndDate) return;
                  setState(prev => ({...prev, days: days == 0 ? 1 : days}));
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
                <Text
                  style={tw`text-lg  text-centers font-semibold text-black`}>
                  Selected Date
                </Text>
              </View>
            </View>
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              selectedStartDate={state.selectedStartDate}
              selectedEndDate={state.selectedEndDate}
              minDate={minDate}
              // maxDate={maxDate}
              todayBackgroundColor="#f2e6ff"
              selectedDayColor="black"
              selectedDayTextColor="#FFFFFF"
              onDateChange={onDateChange}
            />
            <TouchableOpacity
              // onPress={CheckOut}
              onPress={() => {
                var fromDate = moment(state.selectedStartDate);
                var toDate = moment(state.selectedEndDate);
                let days = toDate.diff(fromDate, 'days');
                if (!state.selectedEndDate) return;
                setState(prev => ({...prev, days: days == 0 ? 1 : days}));
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
