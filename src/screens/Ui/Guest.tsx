import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Stepper} from 'react-native-ui-lib';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const Guest = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
            Guest Edit
          </Text>
        </View>
        <View style={{flex: 1}} />
      </View>
      <View style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
            paddingVertical: 10,
          }}>
          <View>
            <Text style={{color: 'black'}}>Adults</Text>
            <Text style={{fontSize: 12}}>ages 13 or above</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Stepper minValue={0} small={true} />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
            paddingVertical: 10,
          }}>
          <View>
            <Text style={{color: 'black'}}>Children</Text>
            <Text style={{fontSize: 12}}>ages 2-12</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Stepper minValue={0} small={true} />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
            paddingVertical: 10,
          }}>
          <View>
            <Text style={{color: 'black'}}>Infants</Text>
            <Text style={{fontSize: 12}}>under 2</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Stepper minValue={0} small={true} />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
            paddingVertical: 10,
          }}>
          <View>
            <Text style={{color: 'black'}}>Pets</Text>
            <Text style={{fontSize: 12}}>Bringing a services animal</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Stepper minValue={0} small={true} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default Guest;
