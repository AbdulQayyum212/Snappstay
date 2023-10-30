import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import PaymentScreen from './PaymentScreen';
const Stripe = () => {
  return (
    <StripeProvider
      publishableKey={'abx'}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <PaymentScreen />
    </StripeProvider>
  );
};

export default Stripe;
