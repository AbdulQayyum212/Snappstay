import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const CreatePrice = ({setInput, input}: any) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [price, setPrice] = useState(31);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              width: 200,
            }}>
            Now, set your price
          </Text>
          <Text style={{marginTop: 20, fontSize: 17, width: 200}}>
            You can change it anytime.
          </Text>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <TouchableOpacity
                onPress={() => {
                  var pr = input.price;
                  if (pr > 23) {
                    --pr;
                    setInput((prev: any) => ({...prev, price: pr}));
                  }
                }}
                style={{
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  marginRight: 10,
                }}>
                <Text style={{fontWeight: 'bold', color: 'black'}}>-</Text>
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  paddingVertical: 15,
                  borderRadius: 10,
                }}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
                  {`$${input.price}`}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  var pr = input.price;
                  if (pr < 38) {
                    ++pr;
                    setInput((prev: any) => ({...prev, price: pr}));
                  }
                }}
                style={{
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  marginLeft: 10,
                }}>
                <Text style={{fontWeight: 'bold', color: 'black'}}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
                  Terms & Conditions
                </Text>
                <CheckBox
                  tintColor="black"
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
              </View>
              <Text style={{width: 250}}>
                I accept Snappstay.com Terms & Conditions
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
                  Get booked faster
                </Text>
                <CheckBox
                  tintColor="black"
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
              </View>
              <Text style={{width: 250}}>
                Offer 20% off on your first 3 bookings to help your place stand
                out.
              </Text>
            </View>
          </View>
        </View>
        <View />
      </View>
    </View>
  );
};
export default CreatePrice;
