import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {TextField} from 'react-native-ui-lib';
import RadioBtn from './RadioBtn';
import SelectDropdown from 'react-native-select-dropdown';
import Feather from 'react-native-vector-icons/Feather';
const TermsRules = ({
  policy,
  setInput,
  input,
  selectPolicy,
  setSelectPolicy,
}: any) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{padding: 20}}>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              marginBottom: 20,
              marginTop: 10,
            }}>
            Cancellation Policy
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'lightgrey',
              width: '100%',
              // paddingHorizontal: 10,
              borderRadius: 10,
            }}>
            <SelectDropdown
              data={policy}
              renderCustomizedButtonChild={() => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingVertical: 15,
                      width: '100%',
                    }}>
                    <View>
                      {/* <Text style={{fontSize: 10}}>Country/Region</Text> */}
                      <Text style={{color: 'black'}}>{selectPolicy}</Text>
                    </View>
                    <Feather name="chevron-down" size={20} />
                  </View>
                );
              }}
              buttonStyle={{
                width: '100%',
                borderWidth: 1,
                borderColor: 'lightgrey',
                backgroundColor: 'white',
                borderRadius: 10,
                //   marginTop: 10,
              }}
              dropdownStyle={{borderRadius: 10}}
              buttonTextStyle={{color: 'lightgrey'}}
              onSelect={(selectedItem, index) => {
                setSelectPolicy(selectedItem);
                console.log(selectedItem, 'selectedItem');
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              marginBottom: 20,
              marginTop: 10,
            }}>
            Minimum days of a booking
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'lightgrey',
              width: '100%',
              paddingHorizontal: 10,
              borderRadius: 10,
              height: 50,
            }}>
            <TextField
              style={{height: 50}}
              value={input?.minimumDayOfABooking}
              onChangeText={t => {
                const myState = {...input};
                {
                  myState.minimumDayOfABooking = t;
                }
                setInput(myState);
              }}
              placeholder="Enter the minimum days of a booking (Only number)"
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              marginBottom: 20,
              marginTop: 10,
            }}>
            Maximum days of a booking
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'lightgrey',
              width: '100%',
              paddingHorizontal: 10,
              borderRadius: 10,
              height: 50,
            }}>
            <TextField
              style={{height: 50}}
              value={input?.maximumDayOfABooking}
              onChangeText={t => {
                const myState = {...input};
                {
                  myState.maximumDayOfABooking = t;
                }
                setInput(myState);
              }}
              placeholder="Enter the maximum days of booking (Only number)"
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              marginBottom: 20,
              marginTop: 10,
            }}>
            Smoking allowed?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioBtn
              containerStyle={{marginBottom: 10, marginRight: 10}}
              label="Yes"
            />
            <RadioBtn containerStyle={{marginBottom: 10}} label="No" />
            {/* <RadioButton
                    containerStyle={{marginBottom: 10, marginRight: 10}}
                    value={null}
                    color="lightgrey"
                    label={'Yes'}
                  />
                  <RadioButton
                    containerStyle={{marginBottom: 10}}
                    value={null}
                    color="lightgrey"
                    label={'No'}
                  /> */}
          </View>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              marginBottom: 20,
              marginTop: 10,
            }}>
            Pets allowed?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioBtn
              containerStyle={{marginBottom: 10, marginRight: 10}}
              label="Yes"
            />
            <RadioBtn containerStyle={{marginBottom: 10}} label="No" />
            {/* <RadioButton
                    containerStyle={{marginBottom: 10, marginRight: 10}}
                    value={null}
                    color="lightgrey"
                    label={'No'}
                  />
                  <RadioButton
                    containerStyle={{marginBottom: 10}}
                    value={null}
                    color="lightgrey"
                    label={'No'}
                  /> */}
          </View>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              marginBottom: 20,
              marginTop: 10,
            }}>
            Party allowed?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioBtn
              containerStyle={{marginBottom: 10, marginRight: 10}}
              label="Yes"
            />
            <RadioBtn containerStyle={{marginBottom: 10}} label="No" />
            {/* <RadioButton
                    containerStyle={{marginBottom: 10, marginRight: 10}}
                    value={null}
                    color="lightgrey"
                    label={'Yes'}
                  />
                  <RadioButton
                    containerStyle={{marginBottom: 10}}
                    value={null}
                    color="lightgrey"
                    label={'No'}
                  /> */}
          </View>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              marginBottom: 20,
              marginTop: 10,
            }}>
            Children allowed?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioBtn
              containerStyle={{marginBottom: 10, marginRight: 10}}
              label="Yes"
            />
            <RadioBtn containerStyle={{marginBottom: 10}} label="No" />
            {/* <RadioButton
                    containerStyle={{marginBottom: 10, marginRight: 10}}
                    value={null}
                    color="lightgrey"
                    label={'Yes'}
                  />
                  <RadioButton
                    containerStyle={{marginBottom: 10}}
                    value={null}
                    color="lightgrey"
                    label={'No'}
                  /> */}
          </View>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              marginBottom: 20,
              marginTop: 10,
            }}>
            Additional rules information (Optional)
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'lightgrey',
              width: '100%',
              paddingHorizontal: 10,
              borderRadius: 10,
              height: 200,
            }}>
            <TextField
              value={input?.additionalRulesInformation}
              onChangeText={t => {
                const myState = {...input};
                {
                  myState.additionalRulesInformation = t;
                }
                setInput(myState);
              }}
              multiline
              placeholder="Additional rules information (Optional)"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TermsRules;
