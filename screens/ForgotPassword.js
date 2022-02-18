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

export default function ForgotPassword({navigation}) {
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
            FORGOT PASSWORD
          </Text>
          <InputBox
            placeholder="Previous Password"
            error={false}
            errorMessage="Enter previous password"
            secureTextEntry={true}
          />
          <InputBox
            placeholder="New Password"
            error={false}
            errorMessage="Enter new Password"
            secureTextEntry={true}
          />
          <InputBox
            placeholder="Re-Enter New Password"
            error={false}
            errorMessage="Enter re-enter new password"
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
            <Text style={{color: '#ffffff'}}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
