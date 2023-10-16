import {View, Text, TouchableWithoutFeedback, SafeAreaView} from 'react-native';
import React from 'react';

const FirstReservation = ({setInput, input}: any) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{padding: 20}}>
        <Text
          style={{
            color: 'black',
            fontWeight: '500',
            marginBottom: 10,
            marginTop: 10,
            fontSize: 20,
          }}>
          Choose who to welcome for your first reservation
        </Text>
        <Text
          style={{
            color: 'grey',
            fontWeight: '500',
            marginBottom: 20,
            // marginTop: 10,
          }}>
          After your first guest, anyone can book your . Learn more
        </Text>
        <TouchableWithoutFeedback
          onPress={() =>
            setInput((prev: any) => ({...prev, guest_type: 'guest'}))
          }>
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              borderColor: input.guest_type === 'guest' ? 'black' : 'grey',
              borderWidth: 1,
              paddingVertical: 20,
              paddingHorizontal: 20,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 18, color: 'black'}}>Snappstay Guests</Text>
            <Text style={{fontSize: 13, color: 'grey'}}>
              Get reservations faster when you welcome anyone from the Snappstay
              Community.
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() =>
            setInput((prev: any) => ({...prev, guest_type: 'luxury'}))
          }>
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              borderColor: input.guest_type === 'luxury' ? 'black' : 'grey',
              borderWidth: 1,
              paddingVertical: 20,
              paddingHorizontal: 20,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 18, color: 'black'}}>
              Luxury Snapp Guests
            </Text>
            <Text style={{fontSize: 13, color: 'grey'}}>
              Get reservations faster when you welcome anyone from the Snappstay
              Community.
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default FirstReservation;
