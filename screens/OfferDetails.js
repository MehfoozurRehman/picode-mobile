import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

export default function OfferDetails({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ImageBackground
        source={require('../assets/offerDetailsPic.png')}
        style={{flex: 1}}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FE516C',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={10.587}
              height={18.519}
              fill="#ffffff"
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
              color: '#ffffff',
              fontSize: 20,
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}>
            Offer Details
          </Text>
        </View>
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <Text
            style={{
              fontSize: 140,
              color: '#ffffff',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 20,
            }}>
            30%
          </Text>
          <Text style={{fontSize: 14, color: '#ffffff', textAlign: 'justify'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel
            quaerat est itaque consectetur, omnis quas facere natus ut inventore
            minus blanditiis reiciendis accusantium pariatur recusandae quisquam
            expedita repellendus, dolore, quidem non sunt voluptatem. Illum eum
            ea debitis in sed. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ea vel quaerat est itaque consectetur, omnis quas
            facere natus ut inventore minus blanditiis reiciendis accusantium
            pariatur recusandae quisquam expedita repellendus, dolore, quidem
            non sunt voluptatem. Illum eum ea debitis in sed.
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Merchant');
            }}
            style={{
              marginBottom: 30,
              backgroundColor: '#740E86',
              padding: 13,
              width: '100%',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <Text style={{color: '#ffffff', fontWeight: 'bold'}}>
              Go To Merchant
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
