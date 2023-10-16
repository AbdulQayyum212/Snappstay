import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {TextField} from 'react-native-ui-lib';

const YourHousedescription = ({input, setInput}: any) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{padding: 20}}>
        <Text
          style={{
            color: 'black',
            fontWeight: '500',
            marginBottom: 10,
            marginTop: 10,
            fontSize: 20,
          }}>
          Create your description
        </Text>
        <Text
          style={{
            color: 'grey',
            fontWeight: '500',
            marginBottom: 20,
            // marginTop: 10,
          }}>
          Share what makes your House special.
        </Text>
        <View>
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
              value={input.description}
              onChangeText={t =>
                setInput((prev: any) => ({...prev, description: t}))
              }
              style={{
                height: 200,
                textAlignVertical: 'top',
              }}
              placeholder="Enter description"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default YourHousedescription;
