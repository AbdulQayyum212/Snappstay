import {Button} from '@components/Button';
import {selectAuthState} from '@stores/store';
import {StripeProvider, useStripe} from '@stripe/stripe-react-native';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import tw from 'twrnc';
// import FormData from 'form-data';

const PaymentScreen = ({price}: {price: number}) => {
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [loading, setLoading] = useState(false);
  const {token} = useSelector(selectAuthState);
  const [amount, setAmount] = useState(0);

  // useEffect(() => {
  //   initializePaymentSheet();
  // }, [price]);

  useEffect(() => {
    if (price) {
      setAmount(price);
      setLoading(true);
    }
  }, [price]);

  const fetchPaymentSheetParams = async () => {
    console.log(String(amount).replace(/[^\d.]/g, ''), 'amount');

    var formData = new FormData();
    formData.append('amount', String(amount).replace(/[^\d.]/g, ''));
    formData.append('description', amount);
    const response = await fetch(
      // `https://www.snappstay.com/api/payment-sheet`,
      `https://docudash.net/api/payment-sheet`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          // Authorization: `Bearer ${token}`,
          Authorization: 'Bearer 64|d0fTkjpOVVsJteHUiZ3VhzPpyd0ieweo7TE17feO',
        },
        body: formData,
      },
    );

    const data = await response.json();
    console.log(data);
    const {paymentIntent, ephemeralKey, customer, publishableKey} =
      data.Details;
    return {
      paymentIntent,
      ephemeralKey,
      customer,
      publishableKey,
    };
  };

  const initializePaymentSheet = async () => {
    setLoading(true);
    const {paymentIntent, ephemeralKey, customer, publishableKey} =
      await fetchPaymentSheetParams();

    const {error} = await initPaymentSheet({
      merchantDisplayName: 'SnappStay, Inc.',
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,

      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      },
    });
    if (!error) {
      setLoading(true);
      openPaymentSheet();
    }
  };

  const openPaymentSheet = async () => {
    const {error} = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  return (
    <StripeProvider
      publishableKey={
        'pk_test_51NGLKgENH01nEXEQS9Gnq8NlhNxD5nZ6rXpa9Fr1q5DOyupUahN1k22hE4y9azhfErdmPoMyn6oZzItFyMexZBnl00gAWDSY7G'
      }
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <Button
        disabled={!loading}
        style={tw`mb-10`}
        onPress={initializePaymentSheet}
        title={'Confirm and pay'}
      />
    </StripeProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avoider: {
    flex: 1,
    padding: 36,
  },
  button: {
    margin: 36,
    marginTop: 0,
  },
});
export default PaymentScreen;
