import {Button} from '@components/Button';
import {useNavigation} from '@react-navigation/native';
import {selectAuthState} from '@stores/store';
import {StripeProvider, useStripe} from '@stripe/stripe-react-native';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import tw from 'twrnc';
// import FormData from 'form-data';

const PaymentScreen = ({price}: {price: number}) => {
  const navigation = useNavigation();
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
    console.log('token', token);

    console.log(String(amount).replace(/[^\d.]/g, ''), 'amount');

    var formData = new FormData();
    formData.append('amount', String(amount).replace(/[^\d.]/g, ''));
    formData.append('description', amount);
    const response = await fetch(
      // `https://www.snappstay.com/api/payment-sheet`,
      'https://www.snappstay.com/api/payment-sheet',
      // `https://docudash.net/api/payment-sheet`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
          // Authorization: 'Bearer 64|d0fTkjpOVVsJteHUiZ3VhzPpyd0ieweo7TE17feO',
        },
        body: formData,
      },
    );
    const data = await response.json();
    console.log('response', data);

    const {
      paymentIntent,
      ephemeralKey,
      customer,
      publishableKey,
      client_secret,
    } = data.Details;
    return {
      paymentIntent,
      ephemeralKey,
      customer,
      publishableKey,
      client_secret,
    };
  };

  const initializePaymentSheet = async () => {
    setLoading(true);
    const {
      paymentIntent,
      ephemeralKey,
      customer,
      publishableKey,
      client_secret,
    } = await fetchPaymentSheetParams();

    console.log('ephemeralKey', ephemeralKey);
    const {error} = await initPaymentSheet({
      merchantDisplayName: 'SnappStay, Inc.',
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: client_secret,

      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      // allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      },
    });
    if (!error) {
      setLoading(false);
      openPaymentSheet();
    }
    console.log(error);
  };

  const openPaymentSheet = async () => {
    const {error} = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
      navigation.navigate('MyTabs');
    }
  };

  return (
    <StripeProvider
      // publishableKey={
      //   'pk_test_51NGLKgENH01nEXEQS9Gnq8NlhNxD5nZ6rXpa9Fr1q5DOyupUahN1k22hE4y9azhfErdmPoMyn6oZzItFyMexZBnl00gAWDSY7G'
      // }
      // // merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      // merchantIdentifier="merchant.com.Docudash"
      publishableKey={
        'pk_test_51HGKPqIWIZ8VIh8kpJyb9bSxJA2c2oNdFoxomZnk1NM86avP5UG5sVgjgd9t2yCKym7iDQt3UB359ur6qn43pGrQ00h602PHCZ'
      }>
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
