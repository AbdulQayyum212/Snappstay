import {Button} from '@components/Button';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Confetti from 'react-native-confetti';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const Done = () => {
  const navigation = useNavigation();
  const confetti = useRef<Confetti>(null);
  useEffect(() => {
    confetti.current?.startConfetti();
  }, []);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Confetti ref={confetti} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 15,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Trips')}
          style={{
            flex: 1,
          }}>
          <EvilIcons name={'close'} size={25} color="black" />
        </TouchableOpacity>
        <View style={{flex: 1}} />
        <View>
          {/* <Text
            style={{
              textDecorationLine: 'underline',
              color: 'black',
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            Save & exit
          </Text> */}
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          padding: 20,
        }}>
        <AntDesign name="checkcircleo" size={100} color="black" />
        <Text
          style={{
            fontSize: 25,
            marginTop: 20,
            textAlign: 'center',
            color: 'black',
            fontWeight: 'bold',
          }}>
          Glad to hear you loved Stay & Fun's place!
        </Text>
        <Button
          onPress={() => navigation.navigate('Trips')}
          // onPress={() => navigation.navigate('MyTabs')}
          style={{marginTop: 20, paddingVertical: 15, width: 100}}
          title={'Done'}
        />
      </View>
    </View>
  );
};
export default Done;
