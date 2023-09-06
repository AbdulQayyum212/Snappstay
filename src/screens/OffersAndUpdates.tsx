import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const OffersAndUpdates = () => {
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 20}}>
          <View>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 20}}>
              Travel tips and offers
            </Text>
            <Text>
              Inspire your next trip with personalized recommendations and
              special offers.
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
                  Inspiration and offers
                </Text>
                <Text style={{width: 300, fontSize: 13}}>On:Email and SMS</Text>
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
                  Trip Planning
                </Text>
                <Text style={{width: 300, fontSize: 13}}>On:Email and SMS</Text>
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
              SnappStay Update
            </Text>
            <Text>
              Stay up to date on the latest news from SnappStay, and let us know
              how we can improve.
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
                  News and programs
                </Text>
                <Text style={{width: 300, fontSize: 13}}>On:Email and SMS</Text>
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
                  Feedback
                </Text>
                <Text style={{width: 300, fontSize: 13}}>On:Email and SMS</Text>
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
                  Travel regulations
                </Text>
                <Text style={{width: 300, fontSize: 13}}>On:Email and SMS</Text>
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
              Unsubscribe from all offers and updates
            </Text>
            <Text>
              You'll continue to get notifications about your account activity.
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
                  All offers and update
                </Text>
                <Text style={{width: 300, fontSize: 13}}>Customer</Text>
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

export default OffersAndUpdates;

const styles = StyleSheet.create({});
