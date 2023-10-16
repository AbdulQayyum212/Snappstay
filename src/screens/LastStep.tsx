import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

const LastStep = ({setInput}: any) => {
  const [toggleCheckBox, setToggleCheckBox] = useState<number>(0);
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      name: 'Security camera(s)',
    },
    {
      id: 2,
      name: 'Weapons',
    },
    {
      id: 3,
      name: 'Dangerous animals',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              width: 200,
            }}>
            Just one last step!
          </Text>
          <Text style={{marginTop: 20, fontSize: 17}}>
            Does your place have any of these?
          </Text>
          <View>
            <View style={{marginTop: 20}}>
              <View>
                <FlatList
                  data={data}
                  renderItem={({item}) => {
                    return (
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingVertical: 10,
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: 17,
                          }}>
                          {item?.name}
                        </Text>
                        <CheckBox
                          tintColor="black"
                          disabled={false}
                          value={toggleCheckBox == item?.id ? true : false}
                          onValueChange={newValue => {
                            if (item.id === 1) {
                              setInput((prev: any) => ({
                                ...prev,
                                security_camera: 'Yes',
                              }));
                              setToggleCheckBox(item?.id);
                            } else if (item.id === 2) {
                              setInput((prev: any) => ({
                                ...prev,
                                weapon: 'Yes',
                              }));
                              setToggleCheckBox(item?.id);
                            } else {
                              setInput((prev: any) => ({
                                ...prev,
                                animals: 'Yes',
                              }));
                              setToggleCheckBox(item?.id);
                            }
                          }}
                        />
                      </View>
                    );
                  }}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  borderWidth: 1,
                  marginTop: 20,
                  borderColor: '#717171',
                }}
              />
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 20,
                  }}>
                  <Text
                    style={{
                      color: '#717171',
                      fontWeight: 'bold',
                      fontSize: 17,
                    }}>
                    Important things to know
                  </Text>
                </View>
                <Text style={{width: 350}}>
                  Be sure to comply with your local laws and review Snapp
                  nondiscrimination policy and guest and Host fees.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View />
      </View>
    </View>
  );
};
export default LastStep;
