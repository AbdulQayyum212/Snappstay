import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {TextField} from 'react-native-ui-lib';

const Bedroom = ({setInput, input}: any) => {
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
            Bedroom name
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
              value={input?.bedroomName}
              onChangeText={t => {
                const myState = {...input};
                {
                  myState.bedroomName = t;
                }
                setInput(myState);
              }}
              placeholder="Ex. Master Room or Room 1"
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
            Number of guests
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
              value={input?.numberOfGuest}
              onChangeText={t => {
                const myState = {...input};
                {
                  myState.numberOfGuest = t;
                }
                setInput(myState);
              }}
              placeholder="Enter the number of guests for this room"
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
            Number of beds
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
              value={input?.numberOfBed}
              onChangeText={t => {
                const myState = {...input};
                {
                  myState.numberOfBed = t;
                }
                setInput(myState);
              }}
              placeholder="Enter the number of beds"
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
            Bed type
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
              value={input?.bedType}
              onChangeText={t => {
                const myState = {...input};
                {
                  myState.bedType = t;
                }
                setInput(myState);
              }}
              placeholder="Enter the bed type"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Bedroom;
