import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {CardField, useStripe} from '@stripe/stripe-react-native';
import tw from 'twrnc';
const PaymentScreen = () => {
  const {confirmPayment} = useStripe();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <CardField
        postalCodeEnabled={true}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
          placeholderColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={cardDetails => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
        }}
      />
    </SafeAreaView>
  );
};

export default PaymentScreen;
