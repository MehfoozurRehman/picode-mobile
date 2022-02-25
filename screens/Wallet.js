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
import Svg, {G, Path} from 'react-native-svg';
import {ChevronDown, X} from 'react-native-feather';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeOut,
  FadeOutDown,
} from 'react-native-reanimated';

function ShopPopup({onClose, navigation}) {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
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
              onPress={() => {
                navigation.navigate('MapView');
              }}
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
    </Animated.View>
  );
}

function RecieptCard({invoiceNo, daysAgo, points, afterCoupon}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 5,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000000'}}>
          Invoice #{' '}
          <Text style={{color: '#84E6FD', fontSize: 18}}>{invoiceNo}</Text>
        </Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#000000'}}>
          {daysAgo} days ago
        </Text>
      </View>
      <View
        style={{
          width: '100%',
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
        <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 13}}>
          {points} pts
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
        <Text style={{color: '#2B2B2B', fontWeight: 'bold', fontSize: 13}}>
          {afterCoupon} pts
        </Text>
      </View>
    </TouchableOpacity>
  );
}
function MarchantsCard({
  title,
  points,
  pointsPercentage,
  targetPts,
  promo,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#B1A4D0',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: 10,
      }}>
      <Image
        source={require('../assets/merchantLogo.png')}
        style={{marginRight: 10}}
      />
      <View style={{flex: 1}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000000'}}>
            {title}
          </Text>
          {promo ? (
            <TouchableOpacity
              onPress={onPress}
              style={{
                backgroundColor: '#ffffff',
                paddingVertical: 4,
                paddingHorizontal: 6,
                borderRadius: 20,
              }}>
              <Text
                style={{
                  fontSize: 10,
                  color: '#242424',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                }}>
                Get Promo
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
        <View
          style={{
            width: pointsPercentage ? pointsPercentage : '100%',
            backgroundColor: '#740E86',
            borderRadius: 50,
            paddingVertical: 3,
            paddingHorizontal: 10,
            marginVertical: 5,
          }}>
          <Text style={{color: '#ffffff', fontWeight: 'bold'}}>
            {points}{' '}
            <Text style={{fontWeight: '400', fontSize: 10}}>Points</Text>
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: '#84E6FD',
            borderRadius: 50,
            paddingVertical: 3,
            paddingHorizontal: 10,
          }}>
          <Text style={{color: '#413F3F', fontWeight: 'bold'}}>
            {targetPts} pts{' '}
            <Text style={{fontWeight: '400', fontSize: 10}}>Target</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function SortPanelEntry({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={{paddingVertical: 5}}>
      <Text style={{color: '#283244'}}>Lowest to Heighets</Text>
    </TouchableOpacity>
  );
}

function SortPanel({onClose}) {
  return (
    <Animated.View
      entering={FadeInDown}
      exiting={FadeOutDown}
      style={{
        backgroundColor: '#ffffffa9',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
      <View
        style={{
          backgroundColor: '#ffffff',
          width: '100%',
          borderRadius: 8,
          elevation: 5,
          padding: 20,
          position: 'relative',
        }}>
        <TouchableOpacity
          onPress={onClose}
          style={{position: 'absolute', right: 20, top: 20, zIndex: 10}}>
          <X size={20} color="#242424" />
        </TouchableOpacity>
        <Text
          style={{
            color: '#283244',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 16,
            marginBottom: 10,
          }}>
          Sort Merchants
        </Text>
        <ScrollView style={{maxHeight: 200}}>
          <SortPanelEntry onPress={onClose} />
          <SortPanelEntry onPress={onClose} />
          <SortPanelEntry onPress={onClose} />
          <SortPanelEntry onPress={onClose} />
          <SortPanelEntry onPress={onClose} />
          <SortPanelEntry onPress={onClose} />
          <SortPanelEntry onPress={onClose} />
          <SortPanelEntry onPress={onClose} />
          <SortPanelEntry onPress={onClose} />
        </ScrollView>
      </View>
    </Animated.View>
  );
}

function WalletFilter({title, selected, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: selected ? '#740E86' : 'transparent',
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: selected ? 20 : 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: selected ? 14 : 18,
          color: selected ? '#ffffff' : '#373737',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default function Wallet({navigation}) {
  const [isMerchant, setIsMerchant] = useState(true);
  const [isSortPanel, setIsSortPanel] = useState(false);
  const [isShopPopup, setIsShopPopup] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F9F9F9',
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
          Wallet
        </Text>
      </View>
      <ImageBackground
        source={require('../assets/walletBg.png')}
        style={{
          borderRadius: 10,
          overflow: 'hidden',
          padding: 20,
          elevation: 3,
          marginHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text
                style={{
                  color: '#4A4A4A',
                  fontSize: 14,
                  fontWeight: 'bold',
                  width: 90,
                  textTransform: 'uppercase',
                }}>
                PURCHASES
              </Text>
              <Text
                style={{color: '#740E86', fontSize: 18, fontWeight: 'bold'}}>
                454353
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text
                style={{
                  color: '#4A4A4A',
                  fontSize: 14,
                  fontWeight: 'bold',
                  width: 90,
                  textTransform: 'uppercase',
                }}>
                Points
              </Text>
              <Text
                style={{color: '#84E6FD', fontSize: 18, fontWeight: 'bold'}}>
                454353
              </Text>
            </View>
          </View>
          <Image
            source={require('../assets/walletImg.png')}
            style={{width: 100, height: 74}}
          />
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderWidth: 2,
              borderRadius: 50,
              borderColor: '#740E86',
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
            }}>
            <Text style={{fontSize: 18, color: '#84E6FD', fontWeight: 'bold'}}>
              34%
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: '#4A4A4A',
                fontSize: 14,
              }}>
              Gold Level
            </Text>
            <Text
              style={{
                color: '#4A4A4A',
                fontSize: 14,
              }}>
              Need 234pts to get platinum level
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          marginVertical: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <WalletFilter
            title="Merchants"
            selected={isMerchant === true ? true : false}
            onPress={() => {
              setIsMerchant(true);
            }}
          />
          <WalletFilter
            title="Receipts"
            selected={isMerchant === true ? false : true}
            onPress={() => {
              setIsMerchant(false);
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsSortPanel(true);
          }}
          style={{
            padding: 10,
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 5,
            justifyContent: 'space-between',
            width: 90,
          }}>
          <Text style={{color: '#888888'}}>Latest</Text>
          <ChevronDown stroke="#FE516C" fill="#fff" width={20} height={20} />
        </TouchableOpacity>
      </View>
      <ScrollView style={{width: '100%', paddingHorizontal: 20}}>
        {isMerchant ? (
          <>
            <MarchantsCard
              title="Merchants Name Here"
              points={123}
              pointsPercentage="35%"
              targetPts={4000}
            />
            <MarchantsCard
              title="Merchants Name Here"
              points={123}
              pointsPercentage="80%"
              targetPts={4000}
            />
            <MarchantsCard
              title="Merchants Name Here"
              points={123}
              pointsPercentage="45%"
              targetPts={4000}
              promo="Get Promo"
              onPress={() => {
                setIsShopPopup(true);
              }}
            />
            <MarchantsCard
              title="Merchants Name Here"
              points={123}
              pointsPercentage="67%"
              targetPts={4000}
            />
            <MarchantsCard
              title="Merchants Name Here"
              points={123}
              pointsPercentage="45%"
              targetPts={4000}
              promo="Get Promo"
              onPress={() => {
                setIsShopPopup(true);
              }}
            />
            <MarchantsCard
              title="Merchants Name Here"
              points={123}
              pointsPercentage="35%"
              targetPts={4000}
            />
            <MarchantsCard
              title="Merchants Name Here"
              points={123}
              pointsPercentage="35%"
              targetPts={4000}
            />
            <MarchantsCard
              title="Merchants Name Here"
              points={123}
              pointsPercentage="35%"
              targetPts={4000}
            />
          </>
        ) : (
          <>
            <RecieptCard
              invoiceNo="3434353"
              daysAgo={3}
              points={445}
              afterCoupon={400}
            />
            <RecieptCard
              invoiceNo="3434353"
              daysAgo={3}
              points={445}
              afterCoupon={400}
            />
            <RecieptCard
              invoiceNo="3434353"
              daysAgo={3}
              points={445}
              afterCoupon={400}
            />
            <RecieptCard
              invoiceNo="3434353"
              daysAgo={3}
              points={445}
              afterCoupon={400}
            />
            <RecieptCard
              invoiceNo="3434353"
              daysAgo={3}
              points={445}
              afterCoupon={400}
            />
            <RecieptCard
              invoiceNo="3434353"
              daysAgo={3}
              points={445}
              afterCoupon={400}
            />
            <RecieptCard
              invoiceNo="3434353"
              daysAgo={3}
              points={445}
              afterCoupon={400}
            />
            <RecieptCard
              invoiceNo="3434353"
              daysAgo={3}
              points={445}
              afterCoupon={400}
            />
            <RecieptCard
              invoiceNo="3434353"
              daysAgo={3}
              points={445}
              afterCoupon={400}
            />
            <RecieptCard
              invoiceNo="3434353"
              daysAgo={3}
              points={445}
              afterCoupon={400}
            />
            <RecieptCard
              invoiceNo="3434353"
              daysAgo={3}
              points={445}
              afterCoupon={400}
            />
          </>
        )}
      </ScrollView>
      {isSortPanel ? <SortPanel onClose={() => setIsSortPanel(false)} /> : null}
      {isShopPopup ? (
        <ShopPopup
          navigation={navigation}
          onClose={() => {
            setIsShopPopup(false);
          }}
        />
      ) : null}
    </SafeAreaView>
  );
}
