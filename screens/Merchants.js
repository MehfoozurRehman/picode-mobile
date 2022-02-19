import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import MarqueeText from 'react-native-marquee';
import Svg, {G, Path} from 'react-native-svg';

function StoreCard() {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#B1A4D0',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 10,
      }}>
      <Image
        source={require('../assets/userPic.png')}
        style={{borderRadius: 50, width: 50, height: 50, marginRight: 10}}
      />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          Merchants Name Here
        </Text>
        <Text>Profits</Text>
      </View>
      <View
        style={{
          backgroundColor: '#ffffff',
          width: 50,
          height: 50,
          borderRadius: 5,
          marginLeft: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#740E86'}}>Pts/Rs</Text>
        <Text style={{color: '#740E86', fontWeight: 'bold', fontSize: 15}}>
          45%
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default function Merchants({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={{backgroundColor: '#740E86', paddingVertical: 10}}>
        <MarqueeText
          style={{fontSize: 16, color: '#ffffff'}}
          duration={20000}
          marqueeOnStart
          loop>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry and typesetting industry. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry and typesetting industry. Lorem
          Ipsum is simply dummy text of the printing and typesetting industry
          and typesetting industry.
        </MarqueeText>
      </View>
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
          Merchants
        </Text>
      </View>
      <ScrollView style={{width: '100%', paddingHorizontal: 20}}>
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </ScrollView>
    </SafeAreaView>
  );
}
