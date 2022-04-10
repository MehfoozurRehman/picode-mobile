import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import MarqueeText from 'react-native-marquee';
import Svg, {G, Path} from 'react-native-svg';
import InputBox from '../components/InputBox';
import {ChevronDown, X} from 'react-native-feather';

function SortPanelEntry({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={{paddingVertical: 5}}>
      <Text style={{color: '#283244'}}>Lowest to Heighets</Text>
    </TouchableOpacity>
  );
}

function SortPanel({onClose}) {
  return (
    <View
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
    </View>
  );
}

function CategoryItem({selected, setSelected, id}) {
  return (
    <TouchableOpacity
      style={{paddingVertical: 15, marginRight: 10}}
      onPress={() => {
        setSelected(id);
      }}>
      <Text
        style={{
          color: selected === id ? '#561488' : '#BFBFBF',
          textTransform: 'uppercase',
          textDecorationColor: '#561488',
          textDecorationLine: selected === id ? 'underline' : 'none',
          fontWeight: 'bold',
        }}>
        Category name
      </Text>
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
        source={require('../assets/merchantPic5.png')}
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
  const categoryList = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
  ];
  const [selected, setSelected] = useState(1);
  const [isSortPanel, setIsSortPanel] = useState(false);
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
          Merchants
        </Text>
      </View>
      <View style={{marginHorizontal: 20}}>
        <InputBox placeholder="Search" />
        <TouchableOpacity
          onPress={() => {
            setIsSortPanel(true);
          }}
          style={{
            padding: 10,
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 5,
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#888888'}}>Highest to Lowest</Text>
          <ChevronDown stroke="#561488" fill="#fff" width={20} height={20} />
        </TouchableOpacity>
        <ScrollView horizontal={true}>
          {categoryList.map(item => (
            <CategoryItem
              selected={selected}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ScrollView>
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
      {isSortPanel ? <SortPanel onClose={() => setIsSortPanel(false)} /> : null}
    </SafeAreaView>
  );
}
