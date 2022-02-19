import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {Unlock, User} from 'react-native-feather';
import InputBox from '../components/InputBox';

export default function ChangePassword({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={10.587}
            height={18.519}
            fill="#242424"
            viewBox="0 0 10.587 18.519">
            <Path
              data-name="Icon ionic-ios-arrow-back"
              d="M14.442 15.451l7.007-7a1.323 1.323 0 10-1.874-1.871l-7.939 7.933a1.321 1.321 0 00-.039 1.825l7.972 7.988a1.323 1.323 0 101.874-1.869z"
              transform="translate(-11.251 -6.194)"
            />
          </Svg>
        </TouchableOpacity>
        <Text
          style={{
            color: '#283244',
            fontSize: 20,
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}>
          Change Password
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          flex: 1,
          paddingHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{paddingVertical: 20}}>
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
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{
            marginBottom: 30,
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
      <Image
        source={require('../assets/changePassword.png')}
        style={{width: '100%'}}
      />
    </SafeAreaView>
  );
}
