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
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {CodeField} from 'react-native-confirmation-code-field';
import InputVerfication from '../components/InputVerfication';

function SignUp1({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/signup1.png')}
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
            SIGN UP
          </Text>
          <InputBox
            placeholder="Enter your phone number"
            error={false}
            errorMessage="Enter phone number"
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp2');
            }}
            style={{
              backgroundColor: '#FE516C',
              padding: 13,
              width: '100%',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <Text style={{color: '#ffffff'}}>Next</Text>
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
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}
              style={{marginLeft: 5}}>
              <Text
                style={{
                  color: '#FE516C',
                  textDecorationColor: '#FE516C',
                  textDecorationLine: 'underline',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
function SignUp2({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/signup2.png')}
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
            LAST 4 DIGITS OF OTP
          </Text>
          <InputVerfication />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}
              style={{marginRight: 5}}>
              <Text
                style={{
                  color: '#FE516C',
                  textDecorationColor: '#FE516C',
                  textDecorationLine: 'underline',
                }}>
                Resend OTP
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: '#0E0E17',
              }}>
              2:00
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp3');
            }}
            style={{
              backgroundColor: '#FE516C',
              padding: 13,
              width: '100%',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <Text style={{color: '#ffffff'}}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
function SignUp3({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/signup3.png')}
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
            ENTER PASSWORD
          </Text>
          <InputBox
            placeholder="Password"
            error={false}
            errorMessage="Enter password"
            secureTextEntry={true}
          />
          <InputBox
            placeholder="Confirm Password"
            error={false}
            errorMessage="Enter confirm password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={{
              backgroundColor: '#FE516C',
              padding: 13,
              width: '100%',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <Text style={{color: '#ffffff'}}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
const Tab = createMaterialTopTabNavigator();

export default function SignUp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          display: 'none',
        },
      }}>
      <Tab.Screen name="SignUp1" component={SignUp1} />
      <Tab.Screen name="SignUp2" component={SignUp2} />
      <Tab.Screen name="SignUp3" component={SignUp3} />
    </Tab.Navigator>
  );
}
