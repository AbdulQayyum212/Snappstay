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
import OffersAndUpdates from '@screens/OffersAndUpdates';
import Account from '@screens/Account';

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

const NotificationsTabNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Offers and updates" component={OffersAndUpdates} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};
export default NotificationsTabNavigation;
