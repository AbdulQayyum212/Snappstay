import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import PaymentScreen from './PaymentScreen';
const Stripe = () => {
  return (
    <StripeProvider
      publishableKey={'pk_test_TYooMQauvdEDq54NiTphI7jx'}
      // merchantIdentifier="merchant.identifier" // required for Apple Pay
      // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <PaymentScreen />
    </StripeProvider>
  );
};

export default Stripe;
