import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Svg, {G, Path} from 'react-native-svg';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default function MapViewScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#ffffff',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Wallet');
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
          Location
        </Text>
      </View>
    </View>
  );
}
