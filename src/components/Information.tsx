import {addListingType} from '@type/addListingType';
import React from 'react';
import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {Chip} from 'react-native-ui-lib';
import tw from 'twrnc';
const Information = ({
  informationState,
  setInformationState,
  setInput,
}: {
  informationState: {
    [key: string]: {image: any; title: string; selected: boolean};
  };
  setInformationState: React.Dispatch<
    React.SetStateAction<{
      [key: string]: {
        image: any;
        title: string;
        selected: boolean;
      };
    }>
  >;
  setInput: React.Dispatch<React.SetStateAction<addListingType>>;
}) => {
  return (
    <View style={tw`flex-row gap-2 flex-wrap`}>
      {Object.entries(informationState).map(
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
              setInput((prev: any) => ({...prev, property_type: key}));
              setInformationState(prev =>
                Object.fromEntries(
                  Object.entries(prev).map(([k, v]) => [
                    k,
                    key == k ? {...v, selected: true} : {...v, selected: false},
                  ]),
                ),
              );
            }}
          />
        ),
      )}
    </View>
  );
};

export default Information;
