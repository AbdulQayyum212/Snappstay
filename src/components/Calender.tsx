import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {Calendar} from 'react-native-calendars';

const Calender = ({setSelected, setInput, input}: any) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{padding: 20}}>
        <Calendar
          onDayPress={day => {
            console.log('====================================', day.dateString);
            setSelected(day.dateString);
            const myState = {...input};
            {
              myState.calender = day.dateString;
            }
            setInput(myState);
          }}
          showWeekNumbers
          markedDates={{
            [input?.calender]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: 'orange',
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Calender;
