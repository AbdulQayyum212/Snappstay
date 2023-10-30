import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import PaymentScreen from './PaymentScreen';
const Stripe = () => {
  return (
    <StripeProvider
      publishableKey={
        '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'
      }
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <PaymentScreen />
    </StripeProvider>
  );
};

export default Stripe;
