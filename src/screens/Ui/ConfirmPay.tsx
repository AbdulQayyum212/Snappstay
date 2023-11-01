import {Button} from '@components/Button';
import {useNavigation, useRoute} from '@react-navigation/native';
import {loaderFalse, loaderTrue} from '@stores/actions/LoaderAction';
import {selectAuthState} from '@stores/store';
import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Confetti from 'react-native-confetti';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useDispatch, useSelector} from 'react-redux';
import {baseUrl} from '../../Config/apiCaller';
import {Calendar} from 'react-native-calendars';
import {Stepper} from 'react-native-ui-lib';
import {ToastError} from '../../Config/Constants';
import Toast, {ErrorToast} from 'react-native-toast-message';
import moment from 'moment';
import {
  BillingDetails,
  CardField,
  PaymentSheetError,
  useConfirmPayment,
  useStripe,
} from '@stripe/stripe-react-native';
import tw from 'twrnc';
import DateSelector from '@components/DateSelector';
import GuestSelector from '@components/GuestSelector';
import {RootStackScreenProps} from '@type/navigation';
const ConfirmPay = () => {
  const dispatch = useDispatch();
  const {token} = useSelector(selectAuthState);
  const route = useRoute<RootStackScreenProps<'ConfirmPay'>['route']>();
  const property = route.params.property;
  const navigation = useNavigation();
  const [done, setDone] = useState(false);
  const confetti = useRef<Confetti>(null);

  const [adults, setAdults] = useState(0);
  const [selectedToDate, setSelectedToDate] = useState('');
  const [calculation, setCalculation] = useState<any>('');

  const [state, setState] = useState<{
    selectedStartDate: Date;
    selectedEndDate: Date | null;
    days: number;
  }>({
    selectedStartDate: new Date(),
    selectedEndDate: new Date(),
    days: 1,
  });

  useEffect(() => {
    if (done) {
      confetti.current?.startConfetti();
    }
  }, [done]);
  const CheckOut = () => {
    if (!state.selectedEndDate) return;

    console.log('fromDate', state.days);
    const obj = {
      property_id: property.id,
      days: state.days,
    };
    dispatch(loaderTrue());
    axios
      .post(baseUrl + 'check/amount', obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async response => {
        console.log('res', response);
        if (response.status === 200) {
          setCalculation(response.data);
        }
      })
      .catch(error => {
        dispatch(loaderFalse());
        console.error('Fetch error:', error);
        // Handle other types of errors, like network issues
      });
  };

  useEffect(() => {
    CheckOut();
  }, [state.days]);

  if (done)
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Confetti ref={confetti} />
        <Text style={{color: 'black', fontSize: 25}}>
          we're getting yor trip ready
        </Text>
      </View>
    );

  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderBottomWidth: 1,
          borderBottomColor: 'lightgrey',
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flex: 1,
            // borderWidth: 1,
            // width: 30,
            // height: 30,
            // alignItems: 'center',
            // justifyContent: 'center',
            // borderRadius: 50,
            // borderColor: 'lightgrey',
          }}>
          <EvilIcons name={'chevron-left'} size={25} color="black" />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
            }}>
            Confirm and pay
          </Text>
        </View>
        <View style={{flex: 1}} />
      </View>
      <ScrollView style={tw`p-4 my-4 `} showsVerticalScrollIndicator={false}>
        <View style={tw`bg-white gap-4`}>
          <View style={tw`flex-row gap-2`}>
            <Image
              style={{width: 130, height: 100, borderRadius: 10}}
              source={
                property
                  ? {
                      uri:
                        'https://www.snappstay.com/public/images/' +
                        property.property_photos[0].photo,
                    }
                  : require('@assets/Rectangle.png')
              }
            />
            <View style={tw`flex-1`}>
              <View style={tw`flex-1`}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: 'bold',
                    marginBottom: 5,
                  }}>
                  {property.house_title}
                </Text>
                <Text
                  // numberOfLines={1}
                  style={{color: 'grey', width: 230}}>
                  {property?.address}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                }}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('@assets/u_star.png')}
                />
                <Text>4.94</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'lightgrey',
            }}
          />
          <Text style={{color: 'black'}}>
            Your booking is protected by{' '}
            <Text style={{color: 'red', fontWeight: 'bold'}}>
              Snapp{' '}
              <Text style={{color: 'black', fontWeight: 'bold'}}>Stay</Text>
            </Text>
          </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Your Trips
          </Text>
          <DateSelector state={state} setState={setState} />
          <GuestSelector />
          <Text style={tw`text-black text-xl font-bold capitalize `}>
            Price details:
          </Text>
          <View style={tw`flex-row items-center`}>
            <View style={tw`flex-1 gap-2`}>
              <Text style={tw`text-black font-bold text-lg`}>
                ${property?.price} x {state.days} night
              </Text>
              <Text style={tw`text-sm`}>Service charges</Text>
              <Text style={tw`text-sm`}>Total Tax</Text>
            </View>
            <View style={tw`items-end gap-2`}>
              <Text style={tw`text-black font-bold text-lg`}>
                ${calculation?.room_charges ?? '00.00'}
              </Text>
              <Text>
                {calculation?.service_charges
                  ? `$${calculation?.service_charges}`
                  : '$00.00'}
              </Text>

              <Text>
                {calculation?.total_tax
                  ? `$${calculation?.total_tax}`
                  : '$00.00'}
              </Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'lightgrey',
            }}
          />
          <View style={tw`flex-row`}>
            <View style={tw`flex-1`}>
              <Text style={tw`font-bold text-black text-lg`}>Total (USD)</Text>
            </View>
            <View style={tw`items-end gap-2`}>
              <Text style={tw`font-bold text-black text-lg`}>
                {calculation?.total_amount
                  ? `$${calculation?.total_amount}`
                  : '$00.00'}
              </Text>
              <TouchableOpacity>
                <Text style={tw`underline text-black font-semibold`}>
                  More info
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Pay with
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Image
                style={{width: 50, height: 50}}
                source={require('@assets/masterLogo.png')}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'lightgrey',
            }}
          />
          <TouchableOpacity>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: 'black',
                fontWeight: 'bold',
              }}>
              Enter a coupon
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Cancellation Policy
          </Text>
          <Text>
            Free Cancellation before feb 12. After that, the reservation in
            non-refundable.
            <Text
              style={{
                textDecorationLine: 'underline',
                color: 'black',
                fontWeight: 'bold',
              }}>
              Learn more
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginBottom: 5,
            }}>
            Ground Rule
          </Text>
          <Text>
            we ask every guest to remember a few simple things about what makes
            a great guest.
          </Text>
          <Text>
            By selecting the button below , i agree to the{' '}
            <Text style={{color: 'black', textDecorationLine: 'underline'}}>
              Host's House Rule, Ground Rule for Guests, Snappstay ReBooking And
              Refund Policy
            </Text>{' '}
            and the snappstay can{' '}
            <Text style={{color: 'black', textDecorationLine: 'underline'}}>
              Change my payment method
            </Text>{' '}
            if i'm responsible for damage.
          </Text>
          <Text style={{marginTop: 20}}>
            i'm also agree to the{' '}
            <Text style={{color: 'blue', textDecorationLine: 'underline'}}>
              updated team of service payment team of service
            </Text>
            , and i acknowledge the{' '}
            <Text style={{color: 'blue', textDecorationLine: 'underline'}}>
              Privacy Policy
            </Text>
          </Text>
          <Button
            onPress={() => {
              if (calculation === '')
                return Toast.show(ToastError('Date is Required'));
            }}
            title={'Confirm and pay'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    shadowColor: '#000',
    padding: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    // flex: 1,
    // margin: 20,
    borderRadius: 20,
    width: '100%',
    // padding: 35,
    height: 500,
    padding: 20,
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // alignItems: 'center',
    // shadowColor: '#000',
    // padding: 20,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default ConfirmPay;
// function dispatch(arg0: any) {
//   throw new Error('Function not implemented.');
// }
