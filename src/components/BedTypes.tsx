import {View, Text, SafeAreaView, Alert} from 'react-native';
import React from 'react';
import CheckBoxBtn from './CheckBoxBtn';
import {Button, Stepper} from 'react-native-ui-lib';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const BedTypes = ({setInput, input}: any) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', padding: 10}}>
      <View style={{padding: 10}}>
        <Text
          style={{
            color: 'black',
            fontWeight: '500',
            marginBottom: 10,
            marginTop: 10,
            fontSize: 20,
          }}>
          Share some basics about your House
        </Text>
        <Text
          style={{
            color: 'grey',
            fontWeight: '500',
            marginBottom: 20,
            // marginTop: 10,
          }}>
          You'll add more details later, like bed types.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
            paddingVertical: 10,
          }}>
          <View>
            <Text style={{color: 'black'}}>Guest</Text>
            {/* <Text style={{fontSize: 12}}>ages 13 or above</Text> */}
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Stepper
                onValueChange={(v: number) =>
                  setInput((prev: any) => ({...prev, guests: v}))
                }
                minValue={0}
                small={true}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
            paddingVertical: 10,
          }}>
          <View>
            <Text style={{color: 'black'}}>Bedroom</Text>
            {/* <Text style={{fontSize: 12}}>ages 2-12</Text> */}
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Stepper
                onValueChange={(v: number) =>
                  setInput((prev: any) => ({...prev, Bedrooms: v}))
                }
                minValue={0}
                small={true}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
            paddingVertical: 10,
          }}>
          <View>
            <Text style={{color: 'black'}}>Beds</Text>
            {/* <Text style={{fontSize: 12}}>under 2</Text> */}
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Stepper
                onValueChange={(v: number) =>
                  setInput((prev: any) => ({...prev, beds: v}))
                }
                minValue={0}
                small={true}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
            paddingVertical: 10,
          }}>
          <View>
            <Text style={{color: 'black'}}>Bathrooms</Text>
            {/* <Text style={{fontSize: 12}}>under 2</Text> */}
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Stepper
                onValueChange={(v: number) =>
                  setInput((prev: any) => ({...prev, bathrooms: v}))
                }
                minValue={0}
                small={true}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
            paddingVertical: 10,
          }}>
          <View>
            <Text style={{color: 'black'}}>Pets</Text>
            {/* <Text style={{fontSize: 12}}>Bringing a services animal</Text> */}
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Button
              onPress={() => {
                setInput((prev: any) => ({...prev, pets: 'No'}));
              }}
              // label="disabled outline + icon"
              outline
              outlineColor={input.pets === 'No' ? 'black' : 'grey'}
              // disabled
              iconStyle={{width: 13, height: 13}}
              iconSource={require('@assets/pngtree-vector-cancel-icon-png-image_925820.png')}
              style={{width: 25, height: 25, marginRight: 45}}
            />
            <Button
              onPress={() => {
                setInput((prev: any) => ({...prev, pets: 'Yes'}));
              }}
              // label="disabled outline + icon"
              outline
              outlineColor={input.pets === 'Yes' ? 'black' : 'grey'}
              // disabled
              iconStyle={{width: 13, height: 13}}
              iconSource={require('@assets/check.png')}
              style={{width: 25, height: 25}}
            />
            {/* <Button
              // label="disabled outline + icon"
              outline
              // disabled
              iconSource={<AntDesign name="close" />}
              style={{width: 30, height: 30}}
            /> */}
            {/* <Stepper minValue={0} small={true} /> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BedTypes;
