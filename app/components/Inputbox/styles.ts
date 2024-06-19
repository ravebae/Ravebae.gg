import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

const InputLabelBG = styled(LinearGradient)`
  position: absolute;
  top: -12px;
  left: 20px;
  z-index: 1;
`;

const InputLabel = styled.Text`
  color: #ffffff;
  font-family: 'JockeyOne_400Regular';
  padding: 0px 12px;
  z-index: 1;
`;

const InputBox = styled(TextInput).attrs({
  placeholderTextColor: '#FFF',
})`
  border: 1px solid #a94bf3;
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 24px;
  font-size: 20px;
  height: 55zpx;
  background: #031013;
  position: relative;
  color: #fff;
`;

export default {
  InputBox,
  InputLabelBG,
  InputLabel,
};
