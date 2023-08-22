import React from 'react';
import {Animated, View, TouchableOpacity, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

function MyTabBar({state, descriptors, navigation, position}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '70%',
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
const Reviews = () => {
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Text>Hello</Text>
    </View>
  );
};
const ReviewsTab = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="From guests" component={Reviews} />
      <Tab.Screen name="From hosts" component={Reviews} />
    </Tab.Navigator>
  );
};
export default ReviewsTab;
