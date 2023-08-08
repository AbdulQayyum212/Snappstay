import {useNavigation} from '@react-navigation/native';
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
const Policy = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(false);
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);
  const [selected5, setSelected5] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                color: 'black',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              Cancellation policy
            </Text>
            <Text
              style={{
                color: 'black',
                marginTop: 10,
              }}>
              Standard cancellation policy
            </Text>
            <Text style={{marginTop: 10, fontSize: 15}}>
              Choose the policy that will apply to stays under 28 nights.
            </Text>
            <View>
              <View style={{marginTop: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() => {
                      if (!selected) {
                        setSelected(true);
                        setSelected1(false);
                        setSelected2(false);
                        setSelected3(false);
                        setSelected4(false);
                        setSelected5(false);
                      } else {
                        setSelected(false);
                      }
                    }}
                    style={[
                      {
                        height: 24,
                        width: 24,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: '#000',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10,
                      },
                    ]}>
                    {selected ? (
                      <View
                        style={{
                          height: 12,
                          width: 12,
                          borderRadius: 6,
                          backgroundColor: '#000',
                        }}
                      />
                    ) : null}
                  </TouchableOpacity>
                  <View>
                    <Text
                      style={{
                        // fontSize: 180,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      Flexible
                    </Text>
                    <Text>Full refund 1 day prior to arrival</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    paddingVertical: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (!selected1) {
                        setSelected1(true);
                        setSelected(false);
                        setSelected2(false);
                        setSelected3(false);
                        setSelected4(false);
                        setSelected5(false);
                      } else {
                        setSelected1(false);
                      }
                    }}
                    style={[
                      {
                        height: 24,
                        width: 24,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: '#000',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10,
                      },
                    ]}>
                    {selected1 ? (
                      <View
                        style={{
                          height: 12,
                          width: 12,
                          borderRadius: 6,
                          backgroundColor: '#000',
                        }}
                      />
                    ) : null}
                  </TouchableOpacity>
                  <View>
                    <Text
                      style={{
                        // fontSize: 180,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      Flexible or Non-refundable
                    </Text>
                    <Text>
                      In addition to Flexible, offer a non-refundable
                      option—guests pay 10% less, but you keep your payout no
                      matter when they cancel.
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    paddingVertical: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (!selected2) {
                        setSelected2(true);
                        setSelected(false);
                        setSelected1(false);
                        setSelected3(false);
                        setSelected4(false);
                        setSelected5(false);
                      } else {
                        setSelected2(false);
                      }
                    }}
                    style={[
                      {
                        height: 24,
                        width: 24,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: '#000',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10,
                      },
                    ]}>
                    {selected2 ? (
                      <View
                        style={{
                          height: 12,
                          width: 12,
                          borderRadius: 6,
                          backgroundColor: '#000',
                        }}
                      />
                    ) : null}
                  </TouchableOpacity>
                  <View>
                    <Text
                      style={{
                        // fontSize: 180,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      Moderate
                    </Text>
                    <Text>Full refund 5 days prior to arrival</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    paddingVertical: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (!selected3) {
                        setSelected3(true);
                        setSelected1(false);
                        setSelected2(false);
                        setSelected4(false);
                        setSelected5(false);
                      } else {
                        setSelected3(false);
                      }
                    }}
                    style={[
                      {
                        height: 24,
                        width: 24,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: '#000',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10,
                      },
                    ]}>
                    {selected3 ? (
                      <View
                        style={{
                          height: 12,
                          width: 12,
                          borderRadius: 6,
                          backgroundColor: '#000',
                        }}
                      />
                    ) : null}
                  </TouchableOpacity>
                  <View>
                    <Text
                      style={{
                        // fontSize: 180,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      Moderate or Non-refundable
                    </Text>
                    <Text>
                      In addition to Moderate, offer a non-refundable
                      option—guests pay 10% less, but you keep your payout no
                      matter when they cancel.
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    paddingVertical: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (!selected4) {
                        setSelected4(true);
                        setSelected1(false);
                        setSelected2(false);
                        setSelected3(false);
                        setSelected5(false);
                        setSelected(false);
                      } else {
                        setSelected(false);
                      }
                    }}
                    style={[
                      {
                        height: 24,
                        width: 24,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: '#000',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10,
                      },
                    ]}>
                    {selected4 ? (
                      <View
                        style={{
                          height: 12,
                          width: 12,
                          borderRadius: 6,
                          backgroundColor: '#000',
                        }}
                      />
                    ) : null}
                  </TouchableOpacity>
                  <View>
                    <Text
                      style={{
                        // fontSize: 180,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      Firm
                    </Text>
                    <Text>
                      Full refund for cancellations up to 30 days before
                      check-in. If booked fewer than 30 days before check-in,
                      full refund for cancellations made within 48 hours of
                      booking and at least 14 days before check-in. After that,
                      50% refund up to 7 days before check-in. No refund after
                      that.
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    paddingVertical: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (!selected5) {
                        setSelected5(true);
                        setSelected1(false);
                        setSelected2(false);
                        setSelected3(false);
                        setSelected4(false);
                        setSelected(false);
                      } else {
                        setSelected(false);
                      }
                    }}
                    style={[
                      {
                        height: 24,
                        width: 24,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: '#000',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10,
                      },
                    ]}>
                    {selected5 ? (
                      <View
                        style={{
                          height: 12,
                          width: 12,
                          borderRadius: 6,
                          backgroundColor: '#000',
                        }}
                      />
                    ) : null}
                  </TouchableOpacity>
                  <View>
                    <Text
                      style={{
                        // fontSize: 180,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      Firm or Non-refundable
                    </Text>
                    <Text>
                      In addition to Firm, offer a non-refundable option—guests
                      pay 10% less, but you keep your payout no matter when they
                      cancel.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
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
            onPress={() => navigation.navigate('MyTabs')}
            style={{
              backgroundColor: 'black',
              paddingHorizontal: 6,
              width: 60,
              alignItems: 'center',
              borderRadius: 7,
              paddingVertical: 5,
              marginTop: 40,
              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <Text style={{color: 'white', fontSize: 10}}>confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Policy;
