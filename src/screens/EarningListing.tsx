import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectUserState} from '@stores/store';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {FlatList} from 'react-native-gesture-handler';
import ListItem from '@components/ListItem';
import AddToFavorite from '@components/AddToFavorite';
import {AnimatedImage, Carousel, Image, View} from 'react-native-ui-lib';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function EarningListing() {
  const {userData} = useSelector(selectUserState);
  const navigation = useNavigation();

  console.log(JSON.stringify(userData?.user_earnings));
  return (
    <SafeAreaView>
      <View style={tw`p-2 flex-row items-center gap-4 `}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw` items-center justify-center shadow-md bg-white px-2 w-10 h-10 left-1  p-2 rounded-full z-10`}>
          <EvilIcons name={'chevron-left'} size={20} color="black" />
        </TouchableOpacity>
        <Text style={tw`text-xl font-semibold flex-1`}>Earnings</Text>
      </View>
      <FlatList
        contentContainerStyle={{
          paddingBottom: 100,
          flexGrow: 1,
          justifyContent: 'center',
          paddingHorizontal: 8,
        }}
        ListHeaderComponentStyle={{paddingHorizontal: -8}}
        data={userData?.user_earnings}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('EarningDetails', {Earning: item})
            }
            key={item.id + 'list-item'}
            style={tw`shadow-md bg-white border border-gray-200 rounded-xl  my-2 overflow-hidden`}>
            <View style={tw`flex-row gap-2 p-2 my-2`}>
              <View style={tw`gap-2 flex-1`}>
                <Text style={{fontSize: 15, color: 'black'}}>
                  Host : {''}
                  <Text style={tw`font-bold`}>
                    {item?.host_details.last_name}{' '}
                    {item?.host_details.last_name}
                  </Text>
                </Text>
                <Text style={{fontSize: 15, color: 'black'}}>
                  Guest : {''}
                  <Text style={tw`font-bold`}>
                    {item?.guest_details.last_name}{' '}
                    {item?.guest_details.last_name}
                  </Text>
                </Text>
                <Text style={{fontSize: 15, color: 'black'}}>
                  CheckIn : {''}
                  <Text style={tw`font-bold`}>{item?.check_in}</Text>
                </Text>
                <Text style={{fontSize: 15, color: 'black'}}>
                  CheckOut : {''}
                  <Text style={tw`font-bold`}>{item?.check_out}</Text>
                </Text>

                <Text style={{fontSize: 15, color: 'black'}}>
                  Total : {''}
                  <Text style={tw`font-bold`}>{item?.total_amount}$</Text>
                </Text>
                <View style={tw`flex-row items-center gap-2`}>
                  <View style={tw`flex-row items-center gap-1`}>
                    <Ionicons name="person" size={20} />
                    <Text>{item.guests || 0} Guest</Text>
                  </View>
                  <View style={tw`flex-row items-center gap-1`}>
                    <MaterialIcons
                      name="night-shelter"
                      size={20}
                      style={{marginLeft: 10}}
                    />
                    <Text>{item.nights || 0} nights</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
