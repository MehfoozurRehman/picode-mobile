import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import InputBox from '../components/InputBox';

export default function Login({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/login.png')}
        style={{
          width: '100%',
          height: Dimensions.get('window').height,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <Image
          source={require('../assets/logo.png')}
          style={{position: 'absolute', top: 50, width: 100, height: 100}}
        />
        <View style={{width: '100%', padding: 20}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#283244',
              marginBottom: 15,
            }}>
            LOGIN
          </Text>
          <InputBox
            placeholder="Phone number"
            error={false}
            errorMessage="Enter phone number"
          />
          <InputBox
            placeholder="Password"
            error={false}
            errorMessage="Enter password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}
            style={{marginLeft: 'auto'}}>
            <Text
              style={{
                color: '#0E0E17',
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={{
              backgroundColor: '#561488',
              padding: 13,
              width: '100%',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <Text style={{color: '#ffffff'}}>Login</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#0E0E17',
              }}>
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}
              style={{marginLeft: 5}}>
              <Text
                style={{
                  color: '#561488',
                  textDecorationColor: '#561488',
                  textDecorationLine: 'underline',
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
