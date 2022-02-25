import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {Unlock, User} from 'react-native-feather';

export default function Profile({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
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
          Profile
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          flex: 1,
          paddingHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{paddingVertical: 20, alignItems: 'center'}}>
          <Image
            source={require('../assets/userPic.png')}
            style={{width: 150, height: 150, borderRadius: 150}}
          />
          <Text
            style={{
              textTransform: 'uppercase',
              fontSize: 20,
              marginVertical: 15,
              color: '#283244',
              fontWeight: '500',
            }}>
            Dayyan Shahid
          </Text>
          <View
            style={{
              width: '100%',
              backgroundColor: '#ffffff',
              borderRadius: 8,
              padding: 15,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EditProfile');
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                paddingBottom: 10,
                borderBottomColor: '#DEDEDE',
                borderBottomWidth: 1,
                marginBottom: 10,
              }}>
              <User size={18} color="#802590" style={{marginRight: 10}} />
              <Text style={{fontSize: 14, color: '#283244'}}>
                Edit Profile Info
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ChangePassword');
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
              }}>
              <Unlock size={18} color="#802590" style={{marginRight: 10}} />
              <Text style={{fontSize: 14, color: '#283244'}}>
                Change Password
              </Text>
            </TouchableOpacity>
          </View>
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
          <Text style={{color: '#ffffff'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
