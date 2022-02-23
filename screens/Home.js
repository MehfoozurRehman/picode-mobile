import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import MarqueeText from 'react-native-marquee';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';
import Swiper from 'react-native-swiper';
import {
  Bell,
  Clipboard,
  Grid,
  Menu,
  Settings,
  ShoppingCart,
  User,
  X,
} from 'react-native-feather';

function ShopPopup({onClose, navigation}) {
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffffa9',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}>
      <ImageBackground
        style={{
          width: '100%',
          elevation: 5,
          borderRadius: 10,
          overflow: 'hidden',
        }}
        source={require('../assets/shopPopup.png')}>
        <ScrollView>
          <View style={{padding: 20, position: 'relative'}}>
            <TouchableOpacity
              onPress={onClose}
              style={{position: 'absolute', right: 20, top: 20, zIndex: 100}}>
              <X size={20} color="#ffffff" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#ffffff',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}>
              SHOP name
            </Text>
            <Text style={{color: '#ffffff', fontSize: 14}}>Points</Text>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              4343 pts
            </Text>
            <Text style={{color: '#ffffff', fontSize: 14}}>
              Value of Discount
            </Text>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              45%
            </Text>
            <Text style={{color: '#ffffff', fontSize: 14}}>Validity</Text>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 30,
              }}>
              12/2/2022
            </Text>
            <TextInput
              placeholder="Coupon Code"
              style={{
                paddingVertical: 7,
                paddingHorizontal: 20,
                borderWidth: 1,
                borderColor: '#ffffff',
                borderRadius: 50,
                marginBottom: 10,
                color: '#ffffff',
              }}
              placeholderTextColor="#ffffff"
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                paddingVertical: 10,
                borderRadius: 50,
                alignItems: 'center',
              }}>
              <Text style={{color: '#0E0E17'}}>View On Map</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function SidePanel({onClose, navigation}) {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: 'rgba(116,14,134,.9)',
        width: '100%',
        height: '100%',
        padding: 20,
      }}>
      <TouchableOpacity onPress={onClose} style={{marginLeft: 'auto'}}>
        <X size={20} color="#ffffff" />
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 8,
          alignItems: 'center',
          padding: 20,
          marginVertical: 10,
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
          <Text
            style={{
              color: '#606060',
              textAlign: 'center',
              width: '40%',
              textTransform: 'uppercase',
              fontWeight: 'bold',
            }}>
            You have
          </Text>
          <View style={{width: '60%'}}>
            <View
              style={{
                backgroundColor: '#ECECEC',
                borderRadius: 50,
                flexDirection: 'row',
                width: '100%',
                paddingVertical: 5,
                paddingHorizontal: 10,
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <Text
                style={{color: '#FE516C', fontWeight: 'bold', width: '50%'}}>
                242424
              </Text>
              <Text
                style={{
                  color: '#606060',
                  fontWeight: 'bold',
                  width: '50%',
                  fontSize: 12,
                  textTransform: 'uppercase',
                }}>
                PTS
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#ECECEC',
                borderRadius: 50,
                flexDirection: 'row',
                width: '100%',
                paddingVertical: 5,
                paddingHorizontal: 10,
                alignItems: 'center',
              }}>
              <Text
                style={{color: '#B01EC9', fontWeight: 'bold', width: '50%'}}>
                242
              </Text>
              <Text
                style={{
                  color: '#606060',
                  fontWeight: 'bold',
                  width: '50%',
                  fontSize: 12,
                  textTransform: 'uppercase',
                }}>
                Purchases
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddCard');
          }}
          style={{
            backgroundColor: '#FE516C',
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 50,
            marginTop: 20,
          }}>
          <Svg
            data-name="Group 670"
            xmlns="http://www.w3.org/2000/svg"
            width={14.628}
            height={14.572}
            style={{marginRight: 10}}
            viewBox="0 0 14.628 14.572">
            <Defs>
              <ClipPath id="a">
                <Path
                  data-name="Rectangle 111"
                  fill="#fff"
                  d="M0 0H14.628V14.572H0z"
                />
              </ClipPath>
            </Defs>
            <G data-name="Group 669" clipPath="url(#a)" fill="#fff">
              <Path
                data-name="Path 794"
                d="M13.324 87.346c0 .736.033 1.436-.011 2.131a1.089 1.089 0 01-1.136.932H1.238A1.142 1.142 0 010 89.165v-7.957a1.136 1.136 0 011.208-1.222h10.914a1.133 1.133 0 011.216 1.214c0 .527-.014 1.055.007 1.581.01.255-.088.3-.311.294a36.147 36.147 0 00-1.711 0 2.129 2.129 0 00-.579 4.178 2.811 2.811 0 00.715.09c.612.012 1.225 0 1.865 0"
                transform="translate(0 -75.838)"
              />
              <Path
                data-name="Path 795"
                d="M38 .785h-.472a1.431 1.431 0 00-1.444 1.425c-.01.351 0 .7 0 1.073-.117.006-.2.015-.285.015h-3.5c-.186 0-.288-.05-.336-.233-.041-.158-.113-.307-.164-.463a.565.565 0 01.355-.774Q34.62.928 37.09.042a.562.562 0 01.777.358c.046.111.079.226.134.386"
                transform="translate(-30.114)"
              />
              <Path
                data-name="Path 796"
                d="M196.666 158.532c-.449 0-.9.007-1.346 0a1.26 1.26 0 01-1.274-1.282 1.273 1.273 0 011.3-1.268c.915-.006 1.83 0 2.744 0 .368 0 .524.154.526.514v1.527c0 .367-.145.51-.521.512h-1.424zm-.91-1.264a.446.446 0 00-.421-.437.454.454 0 00-.439.421.448.448 0 00.424.434.442.442 0 00.437-.418"
                transform="translate(-183.985 -147.89)"
              />
              <Path
                data-name="Path 797"
                d="M131.866 33.42c0-.405-.019-.793.006-1.178.018-.281.264-.449.6-.45h3.135c.233 0 .467-.006.7 0a.535.535 0 01.54.519c.013.362 0 .724 0 1.106z"
                transform="translate(-125.022 -30.141)"
              />
            </G>
          </Svg>
          <Text style={{fontSize: 12, color: '#ffffff'}}>View Details</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 12,
        }}>
        <User size={20} color="#ffffff" style={{marginRight: 10}} />
        <Text style={{color: '#ffffff', fontSize: 16, flex: 1}}>
          User Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 12,
        }}>
        <Settings size={20} color="#ffffff" style={{marginRight: 10}} />
        <Text style={{color: '#ffffff', fontSize: 16}}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PrivacyPolicy');
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 12,
        }}>
        <Grid size={20} color="#ffffff" style={{marginRight: 10}} />
        <Text style={{color: '#ffffff', fontSize: 16}}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('TermsAndConditions');
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 12,
        }}>
        <Clipboard size={20} color="#ffffff" style={{marginRight: 10}} />
        <Text style={{color: '#ffffff', fontSize: 16}}>Terms & Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Notifications');
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 12,
        }}>
        <Bell size={20} color="#ffffff" style={{marginRight: 10}} />
        <Text style={{color: '#ffffff', fontSize: 16}}>Notifications</Text>
      </TouchableOpacity>
    </View>
  );
}

function StoreEntry({onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{alignItems: 'center', marginRight: 18}}>
      <Image
        source={require('../assets/userPic.png')}
        style={{borderRadius: 50, width: 50, height: 50}}
      />
      <Text style={{color: '#2F2F2F', fontSize: 12}}>20%</Text>
    </TouchableOpacity>
  );
}

function StoreCard({onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
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
  const [isSidePanel, setIsSidePanel] = useState(false);

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
        <TouchableOpacity
          onPress={() => {
            setIsSidePanel(true);
          }}>
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
        <StoreEntry
          onPress={() => {
            navigation.navigate('OfferDetails');
          }}
        />
        <StoreEntry
          onPress={() => {
            navigation.navigate('OfferDetails');
          }}
        />
        <StoreEntry
          onPress={() => {
            navigation.navigate('OfferDetails');
          }}
        />
        <StoreEntry
          onPress={() => {
            navigation.navigate('OfferDetails');
          }}
        />
        <StoreEntry
          onPress={() => {
            navigation.navigate('OfferDetails');
          }}
        />
        <StoreEntry
          onPress={() => {
            navigation.navigate('OfferDetails');
          }}
        />
        <StoreEntry
          onPress={() => {
            navigation.navigate('OfferDetails');
          }}
        />
        <StoreEntry
          onPress={() => {
            navigation.navigate('OfferDetails');
          }}
        />
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
        <StoreCard
          onPress={() => {
            navigation.navigate('Merchant');
          }}
        />
        <StoreCard
          onPress={() => {
            navigation.navigate('Merchant');
          }}
        />
        <StoreCard
          onPress={() => {
            navigation.navigate('Merchant');
          }}
        />
        <StoreCard
          onPress={() => {
            navigation.navigate('Merchant');
          }}
        />
        <StoreCard
          onPress={() => {
            navigation.navigate('Merchant');
          }}
        />
        <StoreCard
          onPress={() => {
            navigation.navigate('Merchant');
          }}
        />
        <StoreCard
          onPress={() => {
            navigation.navigate('Merchant');
          }}
        />
        <StoreCard
          onPress={() => {
            navigation.navigate('Merchant');
          }}
        />
        <StoreCard
          onPress={() => {
            navigation.navigate('Merchant');
          }}
        />
        <StoreCard
          onPress={() => {
            navigation.navigate('Merchant');
          }}
        />
        <StoreCard
          onPress={() => {
            navigation.navigate('Merchant');
          }}
        />
        <StoreCard
          onPress={() => {
            navigation.navigate('Merchant');
          }}
        />
        <StoreCard
          onPress={() => {
            navigation.navigate('Merchant');
          }}
        />
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
        <TouchableOpacity
          style={{alignItems: 'center', width: '20%'}}
          onPress={() => {
            navigation.navigate('Wallet');
          }}>
          <Image
            source={require('../assets/walletIcon.png')}
            style={{width: 40, height: 40}}
          />
          <Text style={{color: '#ffffff', fontSize: 10}}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ScanInvoice');
          }}
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
        <TouchableOpacity
          style={{alignItems: 'center', width: '20%'}}
          onPress={() => {
            navigation.navigate('Wallet');
          }}>
          <Image
            source={require('../assets/walletIcon.png')}
            style={{width: 40, height: 40}}
          />
          <Text style={{color: '#ffffff', fontSize: 10}}>Receipts</Text>
        </TouchableOpacity>
      </View>
      {isSidePanel ? (
        <SidePanel
          navigation={navigation}
          onClose={() => {
            setIsSidePanel(false);
          }}
        />
      ) : null}
    </SafeAreaView>
  );
}
