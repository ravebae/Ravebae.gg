import { View, Text } from 'react-native';
import React from 'react';
import S from './styles';

export default function Inputbox({ placeholder, onChange, onBlur, value }) {
  return (
    <S.InputBox
      style={{ fontFamily: 'JockeyOne_400Regular' }}
      placeholder={placeholder}
      onChangeText={onChange}
      onBlur={onBlur}
      value={value}
    />
  );
}
