import { View, Text } from 'react-native';
import React from 'react';
import S from './styles';

export default function Inputbox({ placeholder, onChange, onBlur, value }) {
  return (
    <View>
      <S.InputLabelBG colors={['#081E23', '#081E23', '#031013']}>
        <S.InputLabel>{placeholder}</S.InputLabel>
      </S.InputLabelBG>
      <S.InputBox
        style={{ fontFamily: 'JockeyOne_400Regular' }}
        placeholder={''}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
      />
    </View>
  );
}
