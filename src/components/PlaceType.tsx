import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {LeftIconBtn} from './Button';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import tw from 'twrnc';
const PlaceType = ({pickImg, setInput, input}: any) => {
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
          What type of House will guests have?
        </Text>
        <TouchableWithoutFeedback
          onPress={() =>
            setInput((prev: any) => ({...prev, place_type: 'entire'}))
          }>
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              borderColor: input?.place_type === 'entire' ? 'black' : 'grey',
              borderWidth: 1,
              paddingVertical: 20,
              paddingHorizontal: 20,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 18, color: 'black'}}>An entire place</Text>
            <Text style={{fontSize: 13, color: 'grey'}}>
              Guests have the whole place to themselves.
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() =>
            setInput((prev: any) => ({...prev, place_type: 'private'}))
          }>
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              borderColor: input?.place_type === 'private' ? 'black' : 'grey',
              borderWidth: 1,
              paddingVertical: 20,
              paddingHorizontal: 20,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 18, color: 'black'}}>A private room</Text>
            <Text style={{fontSize: 13, color: 'grey'}}>
              Guests sleep in a private room but some areas may be shared with
              you or others.
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() =>
            setInput((prev: any) => ({...prev, place_type: 'shared'}))
          }>
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              borderColor: input?.place_type === 'shared' ? 'black' : 'grey',
              borderWidth: 1,
              paddingVertical: 20,
              paddingHorizontal: 20,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 18, color: 'black'}}>A shared room</Text>
            <Text style={{fontSize: 13, color: 'grey'}}>
              Guests sleep in a room or common area that may be shared with you
              or others.
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default PlaceType;
