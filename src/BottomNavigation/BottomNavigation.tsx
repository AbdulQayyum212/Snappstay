import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import HotelView from '../Screen/HotelView';
import {View, Image} from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SnappCover from '../Screen/SnappCover';
import Template from '../Screen/Template';
import Profile from '../Screen/Profile';
import Explore from '../Screen/Ui/Explore';
import Login from '../Screen/AuthScreen/login';

const MyTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
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
        component={HotelView}
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
        component={SnappCover}
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
        component={Template}
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
