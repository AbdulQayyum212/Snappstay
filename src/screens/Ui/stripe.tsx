import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import PaymentScreen from './PaymentScreen';
const Stripe = () => {
  return (
    <StripeProvider
      publishableKey={
        'pk_test_51HGKPqIWIZ8VIh8kpJyb9bSxJA2c2oNdFoxomZnk1NM86avP5UG5sVgjgd9t2yCKym7iDQt3UB359ur6qn43pGrQ00h602PHCZ'
      }
      // merchantIdentifier="merchant.identifier" // required for Apple Pay
      // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <PaymentScreen />
    </StripeProvider>
  );
};

export default Stripe;
