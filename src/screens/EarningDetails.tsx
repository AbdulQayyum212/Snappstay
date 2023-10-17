import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import tw from 'twrnc';
import ListItem from '@components/ListItem';
import {RootStackScreenProps} from '@type/navigation';
import {Image} from 'react-native-ui-lib';

export default function EarningDetails() {
  const route = useRoute<RootStackScreenProps<'EarningDetails'>['route']>();
  const Earning = route.params.Earning;
  const property = Earning.property_details[0];
  const {guest_details, host_details} = Earning;
  return (
    <SafeAreaView style={tw`h-full`}>
      <ScrollView>
        <View style={tw`px-2 gap-2`}>
          <ListItem item={property} />
          <View style={{borderWidth: 1, borderColor: '#999999'}} />
          <Text style={tw`font-bold text-black`}>Host Details</Text>
          <View
            style={tw`flex-row items-center justify-between border rounded-lg  p-2`}>
            <View style={tw`flex-1 gap-2`}>
              <Text style={tw`font-bold text-black`}>
                {`Room in ${property.address} hosted by ${host_details.first_name} ${host_details.last_name}`}
              </Text>
              <Text style={{color: '#999999'}}>
                {property.guests} guests · {property.bedrooms} bedrooms ·{' '}
                {property.beds} beds · {property.bathrooms} private bath
              </Text>
            </View>
            <View style={{width: 50, height: 50, borderRadius: 50}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 50}}
                source={{
                  uri:
                    'https://www.snappstay.com/public/images/' +
                    host_details.photo,
                }}
              />
            </View>
          </View>
          <View style={{borderWidth: 1, borderColor: '#999999'}} />
          <Text style={tw`font-bold text-black`}>Guest Details</Text>
          <View
            style={tw`flex-row items-center justify-between border rounded-lg  p-2`}>
            <View style={tw`flex-1 gap-2`}>
              <Text style={tw`text-xs color-black`}>
                Full Name : {''}
                <Text style={tw`font-bold`}>
                  {guest_details.last_name} {guest_details.last_name}
                </Text>
              </Text>
              <Text style={tw`text-xs color-black`}>
                Stay : {''}
                <Text style={tw`font-bold`}>
                  {Earning.guests} guests ·{Earning.nights} Nights stay
                </Text>
              </Text>
              <Text style={tw`text-xs color-black`}>
                Check-In - Checkout : {''}
                <Text style={tw`font-bold`}>
                  {Earning.check_in} - {Earning.check_out}
                </Text>
              </Text>
            </View>
            <View style={{width: 50, height: 50, borderRadius: 50}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 50}}
                source={{
                  uri:
                    'https://www.snappstay.com/public/images/' +
                    guest_details.photo,
                }}
              />
            </View>
          </View>
          <View style={{borderWidth: 1, borderColor: '#999999'}} />
          <Text style={tw`font-bold text-black`}>Earning Details</Text>
          <View
            style={tw`flex-row items-center justify-between border rounded-lg p-2`}>
            <View style={tw`flex-1 gap-2`}>
              <Text style={tw`text-xs color-black`}>
                Room Price X nights : {''}
              </Text>
              <Text style={tw`text-xs color-black`}>Room Changes : {''}</Text>
              <Text style={tw`text-xs color-black`}>Tax : {''}</Text>
              <Text style={tw`text-xs color-black`}>Service : {''}</Text>
              <View style={{borderWidth: 1, borderColor: '#999999'}} />
              <Text style={tw`text-xs color-black`}>Total : {''}</Text>
            </View>
            <View style={tw`w-1/3 gap-2 `}>
              <Text style={tw`font-semibold text-xs text-right`}>
                {parseFloat(property.price).toFixed(2)}$ * {Earning.nights}
              </Text>
              <Text style={tw`font-semibold text-xs text-right`}>
                {parseFloat(Earning.room_charges).toFixed(2)}$
              </Text>
              <Text style={tw`font-semibold text-xs text-right`}>
                {parseFloat(Earning.tax).toFixed(2)}$
              </Text>
              <Text style={tw`font-semibold text-xs text-right`}>
                {parseFloat(Earning.service).toFixed(2)}$
              </Text>
              <View style={{borderWidth: 1, borderColor: '#999999'}} />
              <Text style={tw`font-bold text-xs text-right`}>
                {parseFloat(Earning.total_amount).toFixed(2)}$
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
