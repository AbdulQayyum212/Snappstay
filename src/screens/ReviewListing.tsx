import {Header} from '@components/Header';
import {useNavigation} from '@react-navigation/native';
import {
  selectAuthState,
  selectProfileState,
  selectUserState,
} from '@stores/store';
import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import tw from 'twrnc';

const ReviewListing = () => {
  const navigation = useNavigation();
  const {userData} = useSelector(selectUserState);

  return (
    <SafeAreaView style={tw`h-full`}>
      <Header
        // centerText={'Please Review'}
        onPress={() => navigation.goBack()}></Header>
      <View style={tw`mx-4 gap-2`}>
        <Text
          style={{
            color: 'black',
            fontSize: 35,
            fontWeight: 'bold',
            width: 200,
          }}>
          Review your Booking
        </Text>
        <Text style={{marginTop: 20, fontSize: 20}}>
          How Was Your Stay Review To Let other People Know
        </Text>
        {userData?.guestReviews.map(x => (
          <TouchableOpacity
            onPress={() =>
              x.review_status == 'No'
                ? navigation.navigate('ReviewsDetails', {Review: x})
                : () => {}
            }
            style={tw`bg-white w-full p-2 rounded-lg shadow-md`}>
            <View style={tw`gap-2`}>
              <Text style={tw`text-md font-bold`}>
                {x.property_details[0]?.description}
              </Text>
              <Text
                style={tw`text-sm absolute right-0 top-0 ${
                  x.review_status == 'No' ? 'bg-green-500' : 'bg-red-200'
                }`}>
                {x.review_status == 'No' ? 'Review' : 'Reviewed'}
              </Text>
            </View>
            <View>
              <Text style={tw`text-sm`}>
                <Text style={{color: 'black'}}>From: {x.check_in}</Text>
                <Text style={{color: 'black'}}>To: {x.check_out}</Text>
              </Text>

              <Text style={{color: 'black'}}>Stay Duration: {x.nights}</Text>
              <Text style={{color: 'black'}}>Paid: $ {x.total_amount}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View />
      </View>
    </SafeAreaView>
  );
};
export default ReviewListing;
