import {View, Text} from 'react-native';
import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
import image from '../assets/Animation.json';
import {Button} from './Button';
const NotFound = ({onPress}) => {
  const animationRef = useRef<LottieView>(null);
  useEffect(() => {
    animationRef.current?.play();

    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, []);
  return (
    <View>
      <View
        style={{
          //   flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',

          //   height: 500,
          //   backgroundColor: 'red',
        }}>
        <LottieView
          style={{width: '100%', height: 200}}
          ref={animationRef}
          source={image}
          autoPlay
          loop
          resizeMode="cover"
        />
        <Button
          style={{marginTop: 20, width: '50%'}}
          onPress={onPress}
          // disabled={isLoggingIn}
          title={'Reset'}
        />
      </View>
    </View>
  );
};

export default NotFound;
