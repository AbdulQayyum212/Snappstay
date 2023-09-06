import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {TextField} from 'react-native-ui-lib';
const Calender = () => {
  const navigation = useNavigation();
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
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
                fontSize: 35,
                fontWeight: 'bold',
                width: 200,
              }}>
              Set up your calendar
            </Text>
            <Text style={{marginTop: 20, fontSize: 20, width: 300}}>
              Use availability settings to customize how and when you want to
              host.
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              How long can guests stay?
            </Text>
            <View>
              <View style={{marginTop: 20}}>
                <View style={{marginBottom: 20}}>
                  <Text>Minimum stay</Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      paddingVertical: 5,
                      borderRadius: 10,
                      marginTop: 10,
                      paddingHorizontal: 10,
                    }}>
                    <TextField placeholder="1 night" />
                  </View>
                </View>
                <View style={{marginBottom: 20}}>
                  <Text>Minimum stay</Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      paddingVertical: 5,
                      borderRadius: 10,
                      marginTop: 10,
                      paddingHorizontal: 10,
                    }}>
                    <TextField placeholder="365 nights" />
                  </View>
                </View>
                <View style={{marginBottom: 20}}>
                  <Text style={{color: 'black'}}>
                    How far into the future can guests book?
                  </Text>
                  <SelectDropdown
                    data={countries}
                    renderCustomizedButtonChild={() => {
                      return (
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <Text>12 months in advance</Text>
                          <Image
                            style={{width: 10, height: 10, marginRight: 10}}
                            source={require('@assets/frame1.png')}
                          />
                        </View>
                      );
                    }}
                    buttonStyle={{
                      width: '100%',
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      paddingVertical: 5,
                      backgroundColor: 'white',
                      borderRadius: 10,
                      marginTop: 10,
                    }}
                    buttonTextStyle={{color: 'lightgrey'}}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      return item;
                    }}
                  />
                  <Text style={{marginTop: 5}}>
                    Your listing isn't available after 1 year from today.
                  </Text>
                </View>
                <View style={{marginBottom: 20}}>
                  <Text style={{color: 'black'}}>
                    How much time do you need between booking and check-in?
                  </Text>
                  <SelectDropdown
                    data={countries}
                    defaultButtonText="Same day"
                    renderCustomizedButtonChild={() => {
                      return (
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <Text>Same day</Text>
                          <Image
                            style={{width: 10, height: 10, marginRight: 10}}
                            source={require('@assets/frame1.png')}
                          />
                        </View>
                      );
                    }}
                    buttonTextStyle={{color: 'lightgrey'}}
                    buttonStyle={{
                      width: '100%',
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      paddingVertical: 5,
                      backgroundColor: 'white',
                      borderRadius: 10,
                      marginTop: 10,
                    }}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      return item;
                    }}
                  />
                  <Text style={{marginTop: 5}}>Same day, until 8:59 AM</Text>
                </View>
                <Text style={{fontSize: 18, color: 'black'}}>
                  Customizing specific dates
                </Text>
                <Text>
                  To set your availability for specific dates or multiple weeks
                  at once, use your calendar.
                </Text>
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
            onPress={() => navigation.navigate('Policy')}
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
            <Text style={{color: 'white', fontSize: 10}}>confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Calender;
