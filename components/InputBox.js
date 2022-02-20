import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Eye, EyeOff, Search} from 'react-native-feather';

export default function InputBox({
  placeholder,
  error,
  errorMessage,
  secureTextEntry,
}) {
  const [focus, setFocus] = useState(false);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);
  return (
    <View style={{marginBottom: 10, marginTop: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          position: 'absolute',
          top: -15,
        }}>
        {error ? (
          <Text style={{fontSize: 12, color: '#FE516C', fontWeight: 'bold'}}>
            {placeholder}
          </Text>
        ) : focus ? (
          <Text style={{fontSize: 12, color: '#FE516C', fontWeight: 'bold'}}>
            {placeholder}
          </Text>
        ) : null}
        {error ? (
          <Text style={{fontSize: 12, color: '#FE4E37'}}>{errorMessage}</Text>
        ) : null}
      </View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#A8A8A8"
        secureTextEntry={isSecureTextEntry}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        style={{
          padding: 0,
          paddingBottom: 3,
          borderBottomWidth: 1,
          borderBottomColor: '#545454',
          fontSize: 16,
          color: '#545454',
        }}
      />
      {secureTextEntry ? (
        <TouchableOpacity
          style={{position: 'absolute', right: 0, bottom: 5}}
          onPress={() => {
            isSecureTextEntry
              ? setIsSecureTextEntry(false)
              : setIsSecureTextEntry(true);
          }}>
          {isSecureTextEntry ? (
            <Eye stroke="#545454" fill="#fff" width={20} height={20} />
          ) : (
            <EyeOff stroke="#545454" fill="#fff" width={20} height={20} />
          )}
        </TouchableOpacity>
      ) : null}
      {placeholder === 'Search' ? (
        <TouchableOpacity
          style={{position: 'absolute', right: 0, bottom: 5}}
          onPress={() => {}}>
          <Search stroke="#545454" fill="#fff" width={20} height={20} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
