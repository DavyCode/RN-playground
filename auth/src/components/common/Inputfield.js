import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Inputfield = ({label, placeholder, onChangeText, value, secureTextEntry }) => {
  const {
    labelStyle, 
    inputStyle, 
    container
  } = styles;

  return (
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCorrect={false}
        value={value}
        style={inputStyle}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      >
      </TextInput>
    </View>
  )
};

const styles = StyleSheet.create({
  labelStyle : {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  }, 
  inputStyle: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    lineHeight: 20,
    flex: 2,
    fontSize: 18
  }, 
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export {Inputfield};

