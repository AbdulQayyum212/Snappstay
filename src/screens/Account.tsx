import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Account = () => {
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 20}}>
          <View>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 20}}>
              Account Activity and policies
            </Text>
            <Text>
              Confirm your booking and account activity, and learn about
              important SnappStay policies.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 30,
                marginBottom: 20,
              }}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 17,
                    width: 200,
                  }}>
                  Account Activity
                </Text>
                <Text style={{width: 300, fontSize: 13}}>
                  On:Email, push, and SMS
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Text
                    style={{
                      textDecorationLine: 'underline',
                      color: 'black',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 30,
                marginBottom: 20,
              }}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 17,
                    width: 200,
                  }}>
                  Guest policies
                </Text>
                <Text style={{width: 300, fontSize: 13}}>
                  On:Email, push, and SMS
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Text
                    style={{
                      textDecorationLine: 'underline',
                      color: 'black',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
              marginTop: 20,
            }}
          />
          <View style={{marginTop: 20}}>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 20}}>
              Reminders
            </Text>
            <Text>
              Get important reminder about your reservation listings, and
              account Activity.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 30,
                marginBottom: 20,
              }}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 17,
                    width: 200,
                  }}>
                  Reminder
                </Text>
                <Text style={{width: 300, fontSize: 13}}>On:Push and SMS</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Text
                    style={{
                      textDecorationLine: 'underline',
                      color: 'black',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
              marginTop: 20,
            }}
          />
          <View style={{marginTop: 20}}>
            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                fontSize: 20,
                width: '70%',
              }}>
              Guest and Host message
            </Text>
            <Text>
              Keep and touch with your Host or guests before and during your
              trip.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 30,
                marginBottom: 20,
              }}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 17,
                    width: 200,
                  }}>
                  Message
                </Text>
                <Text style={{width: 300, fontSize: 13}}>
                  On:Email and Push{' '}
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Text
                    style={{
                      textDecorationLine: 'underline',
                      color: 'black',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({});
