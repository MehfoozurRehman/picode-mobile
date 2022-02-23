import {View, SafeAreaView, ImageBackground} from 'react-native';
import React from 'react';

export default function Registered() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/registeredPic.png')}></ImageBackground>
    </SafeAreaView>
  );
}
