import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Stepper} from 'react-native-ui-lib';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const DateEdit = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderBottomWidth: 1,
          borderBottomColor: 'lightgrey',
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flex: 1,
            // borderWidth: 1,
            // width: 30,
            // height: 30,
            // alignItems: 'center',
            // justifyContent: 'center',
            // borderRadius: 50,
            // borderColor: 'lightgrey',
          }}>
          <EvilIcons name={'chevron-left'} size={25} color="black" />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
            }}>
            Date Edit
          </Text>
        </View>
        <View style={{flex: 1}} />
      </View>
      <View style={{padding: 20, flex: 1}}>
        <Calendar
          onDayPress={day => {
            console.log('====================================', day.dateString);
            setSelected(day.dateString);
          }}
          showWeekNumbers
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
        />
      </View>
    </View>
  );
};
export default DateEdit;
