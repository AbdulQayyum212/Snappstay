import {Header} from '@components/Header';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HelpCenter = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}>
          <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
            Help Center
          </Text>
          <Text style={{fontSize: 15, marginTop: 10}}>
            Get the support, tools, and information you need to be help
          </Text>
          <View
            style={{
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 20,
              borderRadius: 7,
              flexDirection: 'row',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              backgroundColor: 'white',
              marginTop: 20,
              // alignItems: 'center',
            }}>
            <MaterialIcons
              name="add-ic-call"
              color="red"
              size={20}
              style={{marginRight: 10}}
            />
            <View>
              <Text style={{color: 'red', fontWeight: 'bold'}}>
                Call local emergency services
              </Text>
              <Text style={{width: '70%'}}>
                Get the phone number you need if someone is in danger or
                injured.
              </Text>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              Your security checklist
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // backgroundColor: 'red',
                height: 110,
              }}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 100}}>
                1
              </Text>
              <View>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  TASK REMINING
                </Text>
                <Text style={{width: '70%', color: 'black'}}>
                  Add important information to your account and build trust with
                  snappStay
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '50%',
                paddingHorizontal: 20,
                paddingVertical: 20,
                borderRadius: 7,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                backgroundColor: 'white',
                marginTop: 20,
                // alignItems: 'center',
              }}>
              <Entypo
                size={20}
                name="open-book"
                color="black"
                style={{marginBottom: 10}}
              />
              <Text>Fill in your personal info</Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                Travel help tips
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    width: '45%',
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    borderRadius: 7,
                    shadowColor: '#000',
                    alignItems: 'center',
                    // marginRight: 10,
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                    backgroundColor: 'white',
                    marginTop: 20,
                    // alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 100, height: 200}}
                    source={require('@assets/Capture3.png')}
                  />
                  <Text style={{color: 'black', marginTop: 10, fontSize: 15}}>
                    Guests:Advice on traveling help
                  </Text>
                </View>
                <View
                  style={{
                    width: '45%',
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    borderRadius: 7,
                    shadowColor: '#000',
                    alignItems: 'center',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                    backgroundColor: 'white',
                    marginTop: 20,
                    // alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 100, height: 200}}
                    source={require('@assets/Capture4.png')}
                  />
                  <Text style={{color: 'black', marginTop: 10, fontSize: 17}}>
                    Host:Guidance on host help
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  //   Capture3.png
};
export default HelpCenter;
