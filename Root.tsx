import {View, Text, Platform, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Loading} from '@stores/store';
import StackNavigation from '@navigation/StackNavigation';

const Root = () => {
  const loader = useSelector(Loading);
  console.log('loader', loader.loading);
  return (
    <View>
      {/* {loader.loading && (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
          }}>
          <Text>Loader...</Text>
        </View>
      )} */}
    </View>
  );
};

export default Root;
