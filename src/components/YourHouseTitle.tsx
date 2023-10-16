import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {TextField} from 'react-native-ui-lib';

const YourHouseTitle = ({setInput, input}: any) => {
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
          Now, let's give your House a title
        </Text>
        <Text
          style={{
            color: 'grey',
            fontWeight: '500',
            marginBottom: 20,
            // marginTop: 10,
          }}>
          Short titles work best. Have fun with it—you can always change it
          later.
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
              value={input.title}
              onChangeText={t => setInput((prev: any) => ({...prev, title: t}))}
              style={{
                height: 200,
                textAlignVertical: 'top',
              }}
              placeholder="Enter title"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default YourHouseTitle;
