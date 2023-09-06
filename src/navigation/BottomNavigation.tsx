import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '@screens/Profile';
import Explore from '@screens/Ui/Explore';
import Inbox from '@screens/Ui/Inbox';
import Trips from '@screens/Ui/Trips';
import WishList from '@screens/Ui/WishList';
import React from 'react';

const MyTabs = () => {
  const Tab = createBottomTabNavigator();
  // d0364e
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? 'black' : 'lightgrey',
                }}
                source={require('@assets/u_search.png')}
              />
            </View>
          ),
        }}
        name="Explore"
        component={Explore}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? 'black' : 'lightgrey',
                }}
                source={require('@assets/likeIcon.png')}
              />
            </View>
          ),
        }}
        name="Wishlists"
        component={WishList}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? 'black' : 'lightgrey',
                }}
                source={require('@assets/trips.png')}
              />
            </View>
          ),
        }}
        name="Trips"
        component={Trips}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? 'black' : 'lightgrey',
                }}
                source={require('@assets/u_comment-alt.png')}
              />
            </View>
          ),
        }}
        name="inbox"
        component={Inbox}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? 'black' : 'lightgrey',
                }}
                source={require('@assets/u_user-circle.png')}
              />
            </View>
          ),
        }}
        name="Log In"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
