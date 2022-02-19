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
import Swiper from 'react-native-swiper';

function StoreEntry() {
  return (
    <TouchableOpacity style={{alignItems: 'center', marginRight: 18}}>
      <Image
        source={require('../assets/userPic.png')}
        style={{borderRadius: 50, width: 50, height: 50}}
      />
      <Text style={{color: '#2F2F2F', fontSize: 12}}>20%</Text>
    </TouchableOpacity>
  );
}

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

export default function Home({navigation}) {
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
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 10,
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={25.425}
            height={18.344}
            viewBox="0 0 25.425 16.344">
            <G data-name="Group 496" fill="#740e86">
              <Path
                data-name="Path 708"
                d="M24.506 23.491H.919c-.508 0-.919.185-.919.413v2.2c0 .228.412.413.919.413h23.587c.508 0 .919-.185.919-.413V23.9c0-.224-.412-.409-.919-.409z"
                transform="translate(-20 -25.11) translate(20 1.619)"
              />
              <Path
                data-name="Path 709"
                d="M16.942 204.68H.635c-.351 0-.635.185-.635.413v2.2c0 .228.285.413.635.413h16.307c.351 0 .635-.185.635-.413v-2.2c.001-.228-.284-.413-.635-.413z"
                transform="translate(-20 -25.11) translate(20 -172.91)"
              />
              <Path
                data-name="Path 710"
                d="M12.291 385.862H.461a.439.439 0 00-.461.413v2.2a.439.439 0 00.461.413h11.83a.439.439 0 00.461-.413v-2.2a.439.439 0 00-.461-.413z"
                transform="translate(-20 -25.11) translate(20 -347.434)"
              />
            </G>
          </Svg>
        </TouchableOpacity>
        <Image
          source={require('../assets/logo.png')}
          style={{width: 50, height: 50}}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Image
            source={require('../assets/userPic.png')}
            style={{borderRadius: 50, width: 40, height: 40}}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: '#283244',
          fontSize: 16,
          fontWeight: 'bold',
          marginHorizontal: 20,
        }}>
        TOP 10
      </Text>
      <ScrollView
        horizontal={true}
        style={{
          marginVertical: 10,
          maxHeight: 70,
          minHeight: 70,
          marginHorizontal: 20,
        }}>
        <StoreEntry />
        <StoreEntry />
        <StoreEntry />
        <StoreEntry />
        <StoreEntry />
        <StoreEntry />
        <StoreEntry />
        <StoreEntry />
      </ScrollView>
      <ScrollView style={{width: '100%', paddingHorizontal: 20}}>
        <Swiper
          style={{height: 170, marginBottom: 30}}
          showsButtons={false}
          loop={true}
          paginationStyle={{
            marginBottom: -20,
          }}
          activeDotColor="#6829A4"
          autoPlay={true}>
          <Image
            source={require('../assets/banner.png')}
            style={{width: '100%', borderRadius: 10, height: 170}}
          />
          <Image
            source={require('../assets/banner.png')}
            style={{width: '100%', borderRadius: 10, height: 170}}
          />
          <Image
            source={require('../assets/banner.png')}
            style={{width: '100%', borderRadius: 10, height: 170}}
          />
          <Image
            source={require('../assets/banner.png')}
            style={{width: '100%', borderRadius: 10, height: 170}}
          />
          <Image
            source={require('../assets/banner.png')}
            style={{width: '100%', borderRadius: 10, height: 170}}
          />
          <Image
            source={require('../assets/banner.png')}
            style={{width: '100%', borderRadius: 10, height: 170}}
          />
          <Image
            source={require('../assets/banner.png')}
            style={{width: '100%', borderRadius: 10, height: 170}}
          />
          <Image
            source={require('../assets/banner.png')}
            style={{width: '100%', borderRadius: 10, height: 170}}
          />
          <Image
            source={require('../assets/banner.png')}
            style={{width: '100%', borderRadius: 10, height: 170}}
          />
        </Swiper>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text
            style={{
              color: '#283244',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            TOP 10
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Merchants');
            }}>
            <Text
              style={{
                color: '#FE516C',
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              SEE ALL
            </Text>
          </TouchableOpacity>
        </View>
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </ScrollView>
      <View
        style={{
          backgroundColor: '#740E86',
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
        }}>
        <TouchableOpacity style={{alignItems: 'center', width: '20%'}}>
          <Image
            source={require('../assets/walletIcon.png')}
            style={{width: 40, height: 40}}
          />
          <Text style={{color: '#ffffff', fontSize: 10}}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            backgroundColor: '#ffffff',
            position: 'absolute',
            borderRadius: 50,
            bottom: -30,
            left: '40%',
            padding: 10,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/scan.png')}
            style={{width: 30, height: 30}}
          />
          <Text style={{color: '#2E2E2E', fontSize: 10, textAlign: 'center'}}>
            Scan & Upload Invoice
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center', width: '20%'}}>
          <Image
            source={require('../assets/walletIcon.png')}
            style={{width: 40, height: 40}}
          />
          <Text style={{color: '#ffffff', fontSize: 10}}>Receipts</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
