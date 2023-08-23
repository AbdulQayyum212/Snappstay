import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  Switch,
} from 'react-native';
import {Button} from '../../components/Button';

const Notifi = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <Image
        style={{width: 70, height: 70, tintColor: 'black'}}
        source={require('../../assets/notifications.png')}
      />
      <Text
        style={{
          marginTop: 20,
          color: 'black',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Turn on notifications?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          //   backgroundColor: 'red',
          justifyContent: 'space-between',
          marginTop: 25,
        }}>
        <Text style={{width: 200}}>
          Get travel deals, personalized recommendation,and more
        </Text>
        <Switch
          trackColor={{false: '#767577', true: 'black'}}
          thumbColor={isEnabled ? 'black' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={{marginTop: 20}}>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('MyTabs')}
          style={{
            backgroundColor: 'rgb(183, 43, 95)',
            paddingVertical: 13,
            alignItems: 'center',
            borderRadius: 10,
            width: 150,
          }}>
          <Text style={{color: 'white'}}>Yes, Notify me</Text>
        </TouchableOpacity> */}
        <Button
          style={{marginTop: 20, width: 150}}
          onPress={() => navigation.navigate('MyTabs')}
          title={'Yes, Notify me'}
        />
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('MyTabs')}
          style={{
            // backgroundColor: 'rgb(183, 43, 95)',
            borderWidth: 1,
            paddingVertical: 13,
            alignItems: 'center',
            borderRadius: 10,
            width: 100,
            marginTop: 20,
          }}>
          <Text style={{color: 'black'}}>Skip</Text>
        </TouchableOpacity> */}
        <Button
          style={{marginTop: 20, width: 100}}
          onPress={() => navigation.navigate('MyTabs')}
          title={'Skip'}
        />
      </View>
    </View>
  );
};
export default Notifi;
