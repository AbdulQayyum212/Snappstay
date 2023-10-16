import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React from 'react';
import {Chip} from 'react-native-ui-lib';
import tw from 'twrnc';

const DescribeYourHouse = ({setDescribeYourHouse, describeYourHouse}: any) => {
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
          Next, let's describe your House
        </Text>
        <Text
          style={{
            color: 'grey',
            fontWeight: '500',
            marginBottom: 20,
            // marginTop: 10,
          }}>
          Choose up to 2 highlights. We'll use these to get your description
          started.
        </Text>
        <ScrollView>
          <View style={tw`flex-row gap-2 flex-wrap`}>
            {Object.entries(describeYourHouse).map(
              ([key, value]: [key: string, value: any]) => (
                <Chip
                  id={key}
                  style={{
                    paddingVertical: 10,
                    borderRadius: 20,
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10,
                    borderWidth: 1,
                    borderColor: value.selected ? 'black' : 'grey',
                  }}
                  leftElement={
                    <Image
                      style={{width: 20, height: 20, marginRight: 10}}
                      source={value.image}
                    />
                  }
                  label={key}
                  onPress={() => {
                    if (
                      Object.values(describeYourHouse).filter(x => x.selected)
                        .length < 2
                    ) {
                      setDescribeYourHouse((prev: any) =>
                        Object.fromEntries(
                          Object.entries(prev).map(([k, v]) => [
                            k,
                            key == k ? {...v, selected: !v.selected} : v,
                          ]),
                        ),
                      );
                    } else {
                      setDescribeYourHouse((prev: any) =>
                        Object.fromEntries(
                          Object.entries(prev).map(([k, v]) => [
                            k,
                            key == k ? {...v, selected: false} : v,
                          ]),
                        ),
                      );
                    }
                  }}
                />
              ),
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DescribeYourHouse;
