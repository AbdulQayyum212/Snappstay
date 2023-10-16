import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import {Chip, TextField} from 'react-native-ui-lib';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import tw from 'twrnc';
const Amenities = ({publishListing, setPublishListing}: any) => {
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
          Tell guests what your House has to offer
        </Text>
        <Text
          style={{
            color: 'grey',
            fontWeight: '500',
            marginBottom: 20,
            // marginTop: 10,
          }}>
          You can add more amenities after you publish your listing.
        </Text>
        <ScrollView>
          {Object.entries(publishListing).map(([k, v]: [k: string, v: any]) => (
            <View id={k}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '500',
                  marginBottom: 20,
                  marginTop: 10,
                }}>
                {k}
              </Text>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: 'Red',
                  }}>
                  <View style={tw`flex-row gap-2 flex-wrap`}>
                    {Object.entries(v).map(
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
                              style={{width: 30, height: 30}}
                              source={value.image}
                            />
                          }
                          label={key}
                          onPress={() =>
                            setPublishListing((prev: any) => ({
                              ...prev,
                              [k]: {
                                ...v,
                                ...{
                                  [key]: {...value, selected: !value.selected},
                                },
                              },
                            }))
                          }
                        />
                      ),
                    )}
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Amenities;
