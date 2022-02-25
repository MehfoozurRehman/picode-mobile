import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

export default function ScanInvoice({navigation}) {
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
          }}>
          Scan Invoices
        </Text>
      </View>
      <ScrollView style={{width: '100%', paddingHorizontal: 20}}>
        <View
          style={{
            width: '100%',
            maxHeight: '60%',
            backgroundColor: '#D2D1D4',
            marginVertical: 40,
            borderRadius: 20,
            height: Dimensions.get('window').height,
          }}></View>
        <TouchableOpacity
          style={{
            width: 80,
            height: 80,
            backgroundColor: '#FE516C',
            borderRadius: 80,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={43.658}
            height={40.3}
            viewBox="0 0 43.658 40.3">
            <G data-name="Icon ionic-md-qr-scanner" fill="#fff">
              <Path
                data-name="Path 850"
                d="M8.412 10.818a1.253 1.253 0 011.28-1.28h7.115V4.5H9.8a6.374 6.374 0 00-6.423 6.318v7.115h5.035z"
                transform="translate(-3.375 -4.5)"
              />
              <Path
                data-name="Path 851"
                d="M30.719 4.5h-7.094v5.037h7.052a1.306 1.306 0 011.343 1.28v7.115h5.037v-7.114A6.309 6.309 0 0030.719 4.5z"
                transform="translate(-3.375 -4.5) translate(9.975)"
              />
              <Path
                data-name="Path 852"
                d="M32.021 29.51a1.253 1.253 0 01-1.28 1.28h-7.116v5.142h7.115a6.374 6.374 0 006.318-6.423V22.5h-5.037z"
                transform="translate(-3.375 -4.5) translate(9.975 8.866)"
              />
              <Path
                data-name="Path 853"
                d="M9.693 30.791a1.253 1.253 0 01-1.28-1.28V22.5H3.375v7.01A6.463 6.463 0 009.8 35.933h7.01v-5.142z"
                transform="translate(-3.375 -4.5) translate(0 8.866)"
              />
            </G>
          </Svg>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
