import {
  BillingDetails,
  CardField,
  useConfirmPayment,
  useStripe,
} from '@stripe/stripe-react-native';
import tw from 'twrnc';
import React, {useState} from 'react';
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
const PaymentScreen = () => {
  const {confirmPayment} = useStripe();
  const formMethods = useForm<FormModel>({
    // to trigger the validation on the blur event
    mode: 'onBlur',
    defaultValues: {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
    },
  });
  const {handleSubmit, formState} = formMethods;
  const [email, setEmail] = useState('');
  const [saveCard, setSaveCard] = useState(false);
  const [isComplete, setComplete] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);

  // const {confirmPayment, loading} = useConfirmPayment();
  const submit = async () => {
    // const { error, paymentIntent } = await confirmPayment(secret, {
    //   paymentMethodType: 'USBankAccount',
    // });
  };
  const onSubmit = async (model: FormModel) => {
    // const { error, paymentIntent } = await confirmPayment(secret,model )
    Alert.alert('Success: ' + JSON.stringify(model, null, 2));
  };
  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        currency: 'usd',
        items: ['id-1'],
        // request_three_d_secure: 'any',
      }),
    });
    const {clientSecret} = await response.json();

    return clientSecret;
  };

  const handlePayPress = async () => {
    setComplete(false);
    setInputDisabled(true);
    // 1. fetch Intent Client Secret from backend
    const clientSecret = await fetchPaymentIntentClientSecret();

    // 2. Gather customer billing information (ex. email)
    const billingDetails: BillingDetails = {
      email: 'email@stripe.com',
      phone: '+48888000888',
      address: {
        city: 'Houston',
        country: 'US',
        line1: '1459  Circle Drive',
        line2: 'Texas',
        postalCode: '77063',
      },
    }; // mocked data for tests

    // 3. Confirm payment with card details
    // The rest will be done automatically using webhooks
    const {error, paymentIntent} = await confirmPayment(
      clientSecret,
      {
        paymentMethodType: 'Card',
        paymentMethodData: {billingDetails},
      },
      {setupFutureUsage: saveCard ? 'OffSession' : undefined},
    );

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
      console.log('Payment confirmation error', error.message);
    } else if (paymentIntent) {
      Alert.alert(
        'Success',
        `The payment was confirmed successfully! currency: ${paymentIntent.currency}`,
      );
      console.log('Success from promise', paymentIntent);
    }
    setComplete(true);
    setInputDisabled(false);
  };
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
      <FormProvider {...formMethods}>
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView
            style={styles.avoider}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <CreditCardForm
              LottieView={LottieView}
              horizontalStart
              overrides={{
                labelText: {
                  marginTop: 16,
                },
              }}
            />
          </KeyboardAvoidingView>
          {formState.isValid && (
            <Button
              style={styles.button}
              title={'CONFIRM PAYMENT'}
              onPress={handleSubmit(handlePayPress)}
            />
          )}
        </SafeAreaView>
      </FormProvider>
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
