import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';

const CreatePrice = () => {
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
              fontSize: 35,
              fontWeight: 'bold',
              width: 200,
            }}>
            Now, set your price
          </Text>
          <Text style={{marginTop: 20, fontSize: 20, width: 200}}>
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
                  var pr = price;
                  if (pr > 23) {
                    --pr;
                    setPrice(pr);
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
                  {`$${price}`}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  var pr = price;
                  if (pr < 38) {
                    ++pr;
                    setPrice(pr);
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
              <Text
                style={{
                  textDecorationLine: 'underline',
                  marginTop: 10,
                  color: 'BLACK',
                }}>
                Get details
              </Text>
            </View>
          </View>
        </View>
        <View />
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 5,
              width: 60,
              alignItems: 'center',
              borderRadius: 7,
              paddingVertical: 5,
              marginTop: 40,
              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <Text style={{color: 'black'}}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('LastStep')}
            style={{
              backgroundColor: 'black',
              paddingHorizontal: 5,
              width: 60,
              alignItems: 'center',
              borderRadius: 7,
              paddingVertical: 5,
              marginTop: 40,
              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <Text style={{color: 'white'}}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default CreatePrice;
