import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

const LastStep = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState('');
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
              fontSize: 35,
              fontWeight: 'bold',
              width: 200,
            }}>
            Just one last step!
          </Text>
          <Text style={{marginTop: 20, fontSize: 20}}>
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
                          onValueChange={newValue =>
                            setToggleCheckBox(item?.id)
                          }
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
                <Text style={{width: 250}}>
                  Be sure to comply with your local laws and review Snapp
                  nondiscrimination policy and guest and Host fees.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View />
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 5,
              width: 60,
              alignItems: 'center',
              borderRadius: 7,
              paddingVertical: 5,
              marginTop: 40,
              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <Text style={{color: 'black'}}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewListing')}
            style={{
              backgroundColor: 'black',
              paddingHorizontal: 5,
              width: 60,
              alignItems: 'center',
              borderRadius: 7,
              paddingVertical: 5,
              marginTop: 40,
              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <Text style={{color: 'white'}}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default LastStep;
