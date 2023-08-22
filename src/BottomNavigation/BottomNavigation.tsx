import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image} from 'react-native';
import Home from '../Screen/Home';
import HotelView from '../Screen/HotelView';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SnappCover from '../Screen/SnappCover';
import Template from '../Screen/Template';
import Profile from '../Screen/Profile';
import Explore from '../Screen/Ui/Explore';
import Login from '../Screen/AuthScreen/login';
import WishList from '../Screen/Ui/WishList';
import Trips from '../Screen/Ui/Trips';
import Inbox from '../Screen/Ui/Inbox';

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
                source={require('../assets/u_search.png')}
              />
              {/* <MaterialCommunityIcons name="home" size={20} /> */}
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
                source={require('../assets/likeIcon.png')}
              />
              {/* <MaterialCommunityIcons name="home" size={20} /> */}
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
                source={require('../assets/trips.png')}
              />
              {/* <MaterialCommunityIcons name="home" size={20} /> */}
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
                source={require('../assets/u_comment-alt.png')}
              />
              {/* <MaterialCommunityIcons name="home" size={20} /> */}
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
                source={require('../assets/u_user-circle.png')}
              />
              {/* <MaterialCommunityIcons name="home" size={20} /> */}
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
