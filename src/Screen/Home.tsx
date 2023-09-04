import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { TextField } from 'react-native-ui-lib';
const Home = () => {
  const navigation = useNavigation();
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [open, setOpen] = useState(false);
  const data = [
    {
      name: 'Apartments',
      img: require('../assets/hotel.png'),
      bgcolor: '#FC6171',
    },
    {
      name: 'Resort',
      img: require('../assets/resort.png'),
      bgcolor: '#30BDB2',
    },
    {
      name: 'Villas',
      img: require('../assets/villa.png'),
      bgcolor: 'black',
    },
  ];
  const data1 = [
    {
      name: 'Apartments',
      img: require('../assets/bgimage.png'),
      bgcolor: '#FC6171',
    },
    {
      name: 'Resort',
      img: require('../assets/bgimage.png'),
      bgcolor: '#30BDB2',
    },
    {
      name: 'Villas',
      img: require('../assets/bgimage.png'),
      bgcolor: 'black',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 50,
          paddingHorizontal: 10,
        }}>
        <View />
        <View>
          <Text>New York</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              style={{width: 30, height: 30}}
              source={require('../assets/notifications.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 15}}>
          <Image
            style={{width: '100%', height: 500}}
            source={require('../assets/bgimage.png')}
          />
        </View>

        <View style={{padding: 20, position: 'absolute', top: -20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              shadowColor: '#000',
              borderRadius: 10,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              padding: 10,
            }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                  height: 35,
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                  borderRadius: 20,
                  paddingHorizontal: 7,
                  backgroundColor: '#FBFBFB',
                }}>
                <Image
                  style={{width: 20, height: 20, marginRight: 10}}
                  source={require('../assets/icon.png')}
                />
                <TextField
                  style={{
                    height: 35,
                    width: '92%',
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                  placeholder="search..."
                />
              </View>
              <TouchableOpacity>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../assets/Righticon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              shadowColor: '#000',
              borderRadius: 20,
              marginTop: 10,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              padding: 10,
            }}>
            <TouchableOpacity
              onPress={() => setOpen(true)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                borderColor: 'lightgrey',
                justifyContent: 'space-between',
                borderWidth: 1,
                borderRadius: 20,
                paddingHorizontal: 10,
                backgroundColor: '#FBFBFB',
                paddingVertical: 8,
                marginRight: 10,
              }}>
              {checkIn ? (
                <View>
                  <Text style={{fontSize: 10}}>Check-In</Text>
                  <Text style={{fontSize: 11}}>{checkIn}</Text>
                </View>
              ) : (
                <View>
                  <Text style={{fontSize: 10}}>Check-In</Text>
                  <Text style={{fontSize: 10}}>mm/dd/yyyy</Text>
                </View>
              )}
              <Image
                style={{width: 20, height: 20}}
                source={require('../assets/calendar.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setOpen(true)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 10,
                flex: 1,
                borderColor: 'lightgrey',
                justifyContent: 'space-between',
                borderWidth: 1,
                borderRadius: 20,
                paddingHorizontal: 10,
                backgroundColor: '#FBFBFB',
                paddingVertical: 8,
              }}>
              {checkOut ? (
                <View>
                  <Text style={{fontSize: 10}}>Check-out</Text>
                  <Text style={{fontSize: 11}}>{checkOut}</Text>
                </View>
              ) : (
                <View>
                  <Text style={{fontSize: 10}}>Check-out</Text>
                  <Text style={{fontSize: 10}}>mm/dd/yyyy</Text>
                </View>
              )}
              <Image
                style={{width: 20, height: 20}}
                source={require('../assets/calendar.png')}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',

                flex: 1,
                borderColor: 'lightgrey',
                justifyContent: 'space-between',
                borderWidth: 1,
                borderRadius: 20,
                paddingHorizontal: 10,
                backgroundColor: '#FBFBFB',
                paddingVertical: 13,
              }}>
              <View>
                <Text style={{fontSize: 10}}>Guest</Text>
              </View>
              <Image
                style={{width: 20, height: 20, marginRight: 10}}
                source={require('../assets/traveling.png')}
              />
            </View>
          </View>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{position: 'absolute', top: 470}}
          data={data}
          renderItem={({item}) => {
            return (
              <View style={{paddingHorizontal: 10}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Welcome')}
                  style={{
                    width: 150,
                    backgroundColor: item?.bgcolor,
                    borderRadius: 10,
                    paddingVertical: 14,
                    paddingHorizontal: 10,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                  }}>
                  <Image style={{width: 20, height: 20}} source={item?.img} />
                  <Text style={{color: 'white'}}>{item?.name}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <View style={{padding: 30, flex: 1}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            Best Deals
          </Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data1}
          renderItem={({item}) => {
            return (
              <View style={{paddingHorizontal: 10}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Property')}
                  style={{
                    width: 200,
                    borderRadius: 10,
                    paddingVertical: 14,
                  }}>
                  <Image
                    resizeMode="cover"
                    style={{width: 200, height: 150, borderRadius: 10}}
                    source={item?.img}
                  />
                  <Text style={{color: 'black'}}>{item?.name}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <DatePicker
          modal
          open={open}
          date={new Date()}
          // maximumDate={
          //   checkIn
          //     ? new Date(checkIn)
          //     : checkOut
          //     ? new Date(checkOut)
          //     : new Date()
          // }
          onConfirm={date => {
            setOpen(false);
            if (checkIn === null) {
              setCheckIn(moment(date).format('MM/DD/YYYY'));
            } else {
              setCheckOut(moment(date).format('MM/DD/YYYY'));
            }
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
