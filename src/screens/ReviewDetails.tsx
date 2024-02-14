import {Header} from '@components/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  selectAuthState,
  selectProfileState,
  selectUserState,
} from '@stores/store';
import {RootStackScreenProps} from '@type/navigation';
import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {TextField} from 'react-native-ui-lib';
import {useDispatch, useSelector} from 'react-redux';
import tw from 'twrnc';

const ReviewDetails = () => {
  const navigation = useNavigation();
  const {Review} =
    useRoute<RootStackScreenProps<'ReviewsDetails'>['route']>().params;
  const [payload, setPayload] = useState({rating: '', review: ''});
  const dispatch = useDispatch();

  const saveReview = () => {
    if (payload.rating == '' || payload.review == '') {
      Toast.show({
        text1: payload.rating == '' ? 'Please add Rating' : 'Please add Review',
        type: 'error',
      });
      return;
    }
    const formdata = new FormData();
    formdata.append('booking_id', Review.id);
    formdata.append('property_id', Review.property_details[0].id);
    formdata.append('rating', payload.rating);
    formdata.append('review', payload.review);
    fetch('https://www.snappstay.com/api/create/property', {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
  };

  return (
    <SafeAreaView style={tw`h-full `}>
      <Header
        centerText={'Please Review'}
        onPress={() => navigation.goBack()}></Header>
      <View style={tw`mx-4 gap-2 flex-1 justify-center`}>
        <Text style={tw`text-lg  text-center`}>
          Review your Booking for
          <Text style={tw`text-black font-bold `}>
            {' ' + Review.property_details[0].description}
          </Text>
        </Text>

        <Text style={{marginTop: 20, fontSize: 20}}>
          How Was Your Stay Review To Let other People Know
        </Text>
        <TextField
          style={tw`bg-white shadow-sm h-10 rounded-md p-2`}
          value={payload.rating}
          onChangeText={t => {
            setPayload(prev => {
              return {...prev, rating: t};
            });
          }}
          placeholder="Rating"
        />
        <TextField
          style={tw`bg-white shadow-sm h-50 rounded-md p-2`}
          value={payload.review}
          multiline
          onChangeText={t => {
            setPayload(prev => {
              return {...prev, review: t};
            });
          }}
          placeholder="How was your stay?"
        />
        <TouchableOpacity
          onPress={saveReview}
          style={{
            backgroundColor: 'black',
            paddingHorizontal: 5,
            width: 120,
            alignItems: 'center',
            borderRadius: 7,
            paddingVertical: 10,
            marginTop: 40,
            alignSelf: 'flex-end',
            justifyContent: 'flex-end',
          }}>
          <Text style={{color: 'white'}}>Save Review</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ReviewDetails;
