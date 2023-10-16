import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {TextField} from 'react-native-ui-lib';
import RadioBtn from './RadioBtn';
import SelectDropdown from 'react-native-select-dropdown';
import {Chip} from 'react-native-ui-lib';
import tw from 'twrnc';
// interface typeValue {
//   selected: boolean;
//   image: ImageSourcePropType;
// }
const Information = ({
  setInformationState,
  informationState,
  countries,
  selectCode,
  setSelectCode,
  setInput,
}: any) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{padding: 20}}>
        <ScrollView>
          {/* {Object.entries(informationState).map(
            ([k, v]: [k: string, v: any]) => (
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
                  
                  </View>
                </View>
              </View>
            ),
          )} */}
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
                          key == k
                            ? {...v, selected: true}
                            : {...v, selected: false},
                        ]),
                      ),
                    );

                    // ...Object.entries(informationState).map(([k, v]) =>
                    //     key == k
                    //       ? {[k]: {...v, selected: !v.selected}}
                    //       :{ [k]: {...v, selected: false}},
                    //   ),

                    // setInformationState((prev: any) => ({
                    //   ...prev,
                    //   [key]: {
                    //     ...value,
                    //     selected: !value.selected,
                    //   },
                    // }));
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

export default Information;
