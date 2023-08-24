import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, View, Text, Switch} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

const Translation = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderBottomWidth: 1,
          borderBottomColor: 'lightgrey',
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flex: 1,
          }}>
          <EvilIcons name={'chevron-left'} size={25} color="black" />
        </TouchableOpacity>
        <View style={{flex: 1}} />
        <View style={{flex: 1}} />
      </View>
      <View style={{padding: 20}}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
          Translation
        </Text>
        <Text style={{fontSize: 20, marginTop: 10}}>
          Automatically translate the Review, desription, and message written by
          guest and Host to English, turn this feature off ifyou'd like to show
          the original language.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 50,
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>Translation</Text>
          <Switch
            trackColor={{false: '#767577', true: 'black'}}
            thumbColor={isEnabled ? 'white' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Translation;
