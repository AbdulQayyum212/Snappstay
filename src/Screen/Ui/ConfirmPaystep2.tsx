import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  Platform,
} from 'react-native';
import {TextField} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button} from '../../components/Button';

const ConfirmPaystep2 = () => {
  const [dis, setDis] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
          paddingVertical: 15,
          borderBottomWidth: 1,
          borderBottomColor: 'lightgrey',
          backgroundColor: 'white',
        }}>
        <View style={{width: '20%'}} />
        <View style={{width: '60%'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              //   width: 160,
            }}>
            Your reservation is Confirm!
          </Text>
        </View>
        <View style={{width: '10%'}}>
          <TouchableOpacity
            // onPress={() => navigation.goBack()}
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              backgroundColor: 'white',
              //   marginRight: 10,
            }}>
            <AntDesign name={'upload'} size={15} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 20, backgroundColor: 'white'}}>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              width: '100%',
              paddingVertical: 20,
            }}>
            <Image
              style={{width: 130, height: 100, borderRadius: 10}}
              source={require('../../assets/Rectangle.png')}
            />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 'bold',
                  marginBottom: 5,
                }}>
                Ciputra World
              </Text>
              <Text>Romanium St. Barcelona</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  marginTop: 25,
                  // alignSelf: 'flex-start',
                  // justifyContent: 'flex-end',
                }}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../assets/u_star.png')}
                />
                <Text>4.94</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: 10, backgroundColor: 'white', padding: 20}}>
          <Text style={{fontSize: 18, color: 'black'}}>Meet your host</Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
              //   justifyContent: 'space-between',
            }}>
            <View style={{width: 50, height: 50, borderRadius: 50}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 50}}
                source={require('../../assets/Rectangle.png')}
              />
            </View>
            <Text
              style={{
                marginLeft: 10,
                color: 'black',
                width: '70%',
              }}>
              Stay & fun is here to hrlp you if you have any question.
            </Text>
          </View>
          <View>
            <View
              style={{
                width: '100%',
                height: 140,
                borderWidth: 1,
                borderColor: 'lightgrey',
                borderRadius: 10,
                paddingHorizontal: 10,
              }}>
              <TextField
                style={{marginTop: Platform.OS === 'ios' ? 10 : 0}}
                onChangeText={e => setDis(e)}
                placeholder="Hi Saty & Fun I'll be visiting Question"
              />
            </View>
            <TouchableOpacity
              disabled={dis == '' ? true : false}
              style={{
                borderWidth: 1,
                borderColor: dis == '' ? 'lightgrey' : 'black',
                width: 120,
                borderRadius: 5,
                paddingVertical: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <Text style={{color: dis == '' ? 'lightgrey' : 'black'}}>
                Send message
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 10, backgroundColor: 'white', padding: 20}}>
          <Text style={{fontSize: 18, color: 'black'}}>
            Last step:share you travel plans
          </Text>
          <Text style={{marginTop: 10}}>
            Share your itinerary with anyone else who might want to know your
            plans.
          </Text>
          <View
            style={{
              marginTop: 30,
              marginBottom: 20,
            }}>
            <View
              style={{
                width: '100%',
                height: 50,
                borderWidth: 1,
                borderColor: 'lightgrey',
                borderRadius: 10,
                paddingHorizontal: 10,
                marginBottom: 10,
              }}>
              <TextField style={{height: 50}} placeholder="Add First Name" />
            </View>
            <View
              style={{
                width: '100%',
                height: 50,
                borderWidth: 1,
                borderColor: 'lightgrey',
                borderRadius: 10,
                paddingHorizontal: 10,
                marginBottom: 10,
              }}>
              <TextField style={{height: 50}} placeholder="Add Last Name" />
            </View>
            <View
              style={{
                width: '100%',
                height: 50,
                borderWidth: 1,
                borderColor: 'lightgrey',
                borderRadius: 10,
                paddingHorizontal: 10,
                marginBottom: 10,
                justifyContent: 'center',
              }}>
              <TextField
                style={{height: 50}}
                keyboardType="numeric"
                placeholder="Add Phone Number"
              />
            </View>
            <View
              style={{
                width: '100%',
                height: 50,
                borderWidth: 1,
                borderColor: 'lightgrey',
                borderRadius: 10,
                paddingHorizontal: 10,
                marginBottom: 10,
              }}>
              <TextField style={{height: 50}} placeholder="Add Email Addrees" />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: 'white',
          }}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 17,
                  color: 'black',
                  fontWeight: '500',
                  marginRight: 5,
                  textDecorationLine: 'underline',
                }}>
                Skip
              </Text>
            </View>
          </View>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('MyTabs')}
            style={{
              backgroundColor: 'rgb(183, 43, 95)',
              paddingVertical: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              width: 100,
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <Text style={{color: 'white'}}>Submit</Text>
          </TouchableOpacity> */}
          <Button
            onPress={() => navigation.navigate('MyTabs')}
            style={{marginTop: 20, paddingVertical: 10, width: 100}}
            title={'Submit'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ConfirmPaystep2;
