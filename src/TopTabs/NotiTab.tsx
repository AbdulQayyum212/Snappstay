import React from 'react';
import {
  Animated,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

function MyTabBar({state, descriptors, navigation, position}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '70%',
        paddingHorizontal: 20,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              marginTop: 20,
              marginRight: 5,
              borderBottomColor: 'black',
              borderBottomWidth: isFocused ? 5 : 0,
              //   marginLeft: 10,
              alignItems: 'center',
            }}>
            <Animated.Text
              style={{
                // opacity,
                color: isFocused ? 'black' : 'grey',
                fontSize: 13,
                marginTop: 10,
                fontWeight: '400',
                marginBottom: 10,
              }}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
      <View
        style={{
          backgroundColor: '#DDD',
          height: 2,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          width: 400,
        }}
      />
    </View>
  );
}
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
const NotiTab = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Offers and updates" component={OffersAndUpdates} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};
export default NotiTab;
