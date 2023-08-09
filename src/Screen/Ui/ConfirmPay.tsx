import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Confetti from 'react-native-confetti';
const ConfirmPay = () => {
  const navigation = useNavigation();
  const [done, setDone] = useState(false);
  const confetti = useRef();
  useEffect(() => {
    if (done) {
      confetti.current?.startConfetti();
    }
  }, [done]);
  if (done) {
    setTimeout(() => {
      navigation.navigate('ConfirmPaystep2');
    }, 10000);
  }
  return (
    <View style={{flex: 1}}>
      {done ? (
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
      ) : (
        <>
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{paddingHorizontal: 20, backgroundColor: 'white'}}>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <Image
                  style={{width: 130, height: 100, borderRadius: 10}}
                  source={require('../../assets/Rectangle.png')}
                />
                <View style={{marginLeft: 10}}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'black',
                      fontWeight: 'bold',
                      marginBottom: 5,
                    }}>
                    Ciputra World
                  </Text>
                  <Text>Romanium St. Barcelona</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      marginTop: 25,
                      // alignSelf: 'flex-start',
                      // justifyContent: 'flex-end',
                    }}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={require('../../assets/u_star.png')}
                    />
                    <Text>4.94</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  marginTop: 30,
                }}
              />
              <View
                style={{
                  paddingVertical: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'black'}}>
                  Your booking is protected by{' '}
                </Text>
                <Text style={{color: 'red', fontWeight: 'bold'}}>
                  Snapp{' '}
                  <Text style={{color: 'black', fontWeight: 'bold'}}>Stay</Text>
                </Text>
              </View>
            </View>
            <View
              style={{marginTop: 10, backgroundColor: 'white', padding: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                Your Trips
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 30,
                  marginBottom: 20,
                }}>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 17,
                      width: 200,
                    }}>
                    Dates
                  </Text>
                  <Text style={{width: 300, fontSize: 13}}>feb 17-18</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('DateEdit')}>
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
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 30,
                  marginBottom: 20,
                }}>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 17,
                      width: 200,
                    }}>
                    Guests
                  </Text>
                  <Text style={{width: 300, fontSize: 13}}>1 guest</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Guest')}>
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
            </View>
            <View
              style={{marginTop: 10, backgroundColor: 'white', padding: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                Price details
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 30,
                  marginBottom: 20,
                }}>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 17,
                      width: 200,
                    }}>
                    $63.97 x 1 night
                  </Text>
                  <Text style={{width: 300, fontSize: 13}}>cleaning fee</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text>$63.97</Text>
                  <Text>$10.66</Text>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  marginTop: 20,
                  marginBottom: 20,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                  marginBottom: 10,
                }}>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 17,
                      width: 200,
                    }}>
                    Total (USD)
                  </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text>$74.63</Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        textDecorationLine: 'underline',
                        color: 'black',
                        fontWeight: 'bold',
                        marginTop: 10,
                      }}>
                      More info
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{marginTop: 10, backgroundColor: 'white', padding: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                Pay with
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 30,
                  marginBottom: 20,
                }}>
                <View>
                  <Image
                    style={{width: 50, height: 50}}
                    source={require('../../assets/masterLogo.png')}
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
                  marginTop: 15,
                  marginBottom: 20,
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
            </View>
            <View
              style={{marginTop: 10, backgroundColor: 'white', padding: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                Cancellation Policy
              </Text>
              <Text>
                Free Cancellation before feb 12. After that, the reservation in
                non-refoundable.
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Learn more
                </Text>
              </Text>
            </View>
            <View
              style={{marginTop: 10, backgroundColor: 'white', padding: 20}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                  marginBottom: 5,
                }}>
                Grount Rule
              </Text>
              <Text>
                we ask every guest to rememeber a few simple things about what
                makes a great guest.
              </Text>
            </View>
            <View
              style={{marginTop: 10, backgroundColor: 'white', padding: 20}}>
              <Text>
                By selecting the button below , i agree to the{' '}
                <Text style={{color: 'black', textDecorationLine: 'underline'}}>
                  Host's House Rule, Ground Rule for Guests, Snappstay Rebooking
                  And Refund Policy
                </Text>{' '}
                and the snappstay can{' '}
                <Text style={{color: 'black', textDecorationLine: 'underline'}}>
                  Change may payment method
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
              <TouchableOpacity
                onPress={() => setDone(true)}
                style={{
                  backgroundColor: 'rgb(183, 43, 95)',
                  paddingVertical: 10,
                  alignItems: 'center',
                  borderRadius: 10,
                  width: '100%',
                  paddingHorizontal: 20,
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <Text style={{color: 'white'}}>Confirm and pay</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};
export default ConfirmPay;
