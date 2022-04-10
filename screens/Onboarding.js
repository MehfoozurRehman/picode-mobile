import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';

const Tab = createMaterialTopTabNavigator();

function Onboarding1({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/onboarding1.png')}
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
      <View style={{paddingHorizontal: 20, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#283244',
            marginBottom: 10,
          }}>
          Heading Here
        </Text>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#828282'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Onboarding2');
          }}
          style={{
            backgroundColor: '#561488',
            marginLeft: 'auto',
            padding: 12,
            width: 120,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{color: '#ffffff'}}>Next</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={{position: 'absolute', bottom: 70, right: 70}}>
        <Text
          style={{
            color: '#0E0E17',
            textDecorationColor: '#0E0E17',
            textDecorationLine: 'underline',
          }}>
          Skip
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
function Onboarding2({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/onboarding2.png')}
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
      <View style={{paddingHorizontal: 20, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: 10,
          }}>
          Heading Here
        </Text>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#F7F7F7'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{
            backgroundColor: '#ffffff',
            marginLeft: 'auto',
            padding: 12,
            width: 120,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{color: '#561488'}}>Next</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={{position: 'absolute', bottom: 70, right: 70}}>
        <Text
          style={{
            color: '#ffffff',
            textDecorationColor: '#0E0E17',
            textDecorationLine: 'underline',
          }}>
          Skip
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default function Onboarding() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          display: 'none',
        },
      }}>
      <Tab.Screen name="Onboarding1" component={Onboarding1} />
      <Tab.Screen name="Onboarding2" component={Onboarding2} />
    </Tab.Navigator>
  );
}
