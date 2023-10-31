import {
  BillingDetails,
  CardField,
  PaymentSheetError,
  useConfirmPayment,
  useStripe,
} from '@stripe/stripe-react-native';
import tw from 'twrnc';
import React, {useEffect, useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import LottieView from 'lottie-react-native';
import CreditCardForm, {Button, FormModel} from 'rn-credit-card';
import {useSelector} from 'react-redux';
import {selectAuthState} from '@stores/store';
const PaymentScreen = () => {
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [loading, setLoading] = useState(false);
  const {token} = useSelector(selectAuthState);

  const fetchPaymentSheetParams = async () => {
    var formdata = new FormData();
    formdata.append('amount', '123');
    const response = await fetch(`https://docudash.net/api/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer 64|d0fTkjpOVVsJteHUiZ3VhzPpyd0ieweo7TE17feO',
      },
      body: formdata,
    });
    const data = await response.json();
    const {paymentIntent, ephemeralKey, customer} = data.Details;
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const {paymentIntent, ephemeralKey, customer} =
      await fetchPaymentSheetParams();

    const {error} = await initPaymentSheet({
      merchantDisplayName: 'Example, Inc.',
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

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Button
        // variant="primary"
        disabled={!loading}
        title="Checkout"
        onPress={openPaymentSheet}
      />
    </SafeAreaView>
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
