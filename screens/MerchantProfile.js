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

function BranchesCard() {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#FE516C',
        padding: 14,
        borderRadius: 10,
        marginVertical: 6,
      }}>
      <View>
        <Text style={{fontSize: 14, color: '#242424', fontWeight: 'bold'}}>
          Branch Name
        </Text>
        <Text style={{fontSize: 12, color: '#740E86'}}>5 Miles Away</Text>
      </View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16.143}
        height={23.062}
        viewBox="0 0 16.143 23.062">
        <Path
          data-name="Icon material-location-on"
          d="M15.572 3A8.066 8.066 0 007.5 11.072c0 6.054 8.072 14.99 8.072 14.99s8.072-8.937 8.072-14.99A8.066 8.066 0 0015.572 3zm0 10.954a2.883 2.883 0 112.883-2.883 2.884 2.884 0 01-2.883 2.883z"
          transform="translate(-7.5 -3)"
          fill="#fe516c"
        />
      </Svg>
    </TouchableOpacity>
  );
}

export default function MerchantProfile({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/mechantBg.png')}>
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
              navigation.navigate('OfferDetails');
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
        </View>
        <View style={{paddingHorizontal: 20, width: '100%'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              margiTop: 14,
            }}>
            <View style={{width: 150, height: 150}}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={require('../assets/logo.png')}
              />
            </View>
            <Text
              style={{
                color: '#283244',
                fontSize: 20,
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}>
              Merchant Name
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#3D3D3D',
              padding: 15,
              borderRadius: 10,
              marginVertical: 14,
            }}>
            <View
              style={{
                width: '70%',
                backgroundColor: '#740E86',
                borderRadius: 50,
                paddingVertical: 3,
                paddingHorizontal: 10,
                marginVertical: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: '#ffffff', fontWeight: 'bold'}}>Points</Text>
              <Text
                style={{color: '#ffffff', fontWeight: 'bold', fontSize: 13}}>
                452 pts
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                backgroundColor: '#84E6FD',
                borderRadius: 50,
                paddingVertical: 3,
                paddingHorizontal: 10,
                marginVertical: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: '#2B2B2B', fontWeight: 'bold'}}>Points</Text>
              <Text
                style={{color: '#2B2B2B', fontWeight: 'bold', fontSize: 13}}>
                455 pts
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
              style={{
                width: '49%',
                padding: 12,
                borderRadius: 10,
                backgroundColor: '#740E86',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 90,
              }}>
              <View style={{width: 40, height: 40}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={require('../assets/InvoiceUploadedPic.png')}
                />
              </View>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                  style={{fontSize: 20, color: '#ffffff', fontWeight: 'bold'}}>
                  504
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#E970FF',
                    textTransform: 'uppercase',
                  }}>
                  Invoices
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#E970FF',
                    textTransform: 'uppercase',
                  }}>
                  Uploaded
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '49%',
                padding: 12,
                borderRadius: 10,
                backgroundColor: '#FE516C',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 90,
              }}>
              <View style={{width: 40, height: 40}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={require('../assets/PurchasePic.png')}
                />
              </View>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                  style={{fontSize: 20, color: '#ffffff', fontWeight: 'bold'}}>
                  802
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#FFC7CF',
                    textTransform: 'uppercase',
                  }}>
                  Purchases
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: '#283244',
              fontSize: 16,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginVertical: 10,
            }}>
            our branches
          </Text>
        </View>

        <ScrollView style={{width: '100%', paddingHorizontal: 20}}>
          <BranchesCard />
          <BranchesCard />
          <BranchesCard />
          <BranchesCard />
          <BranchesCard />
          <BranchesCard />
          <BranchesCard />
          <BranchesCard />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
