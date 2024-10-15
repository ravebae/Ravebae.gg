import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

const InputLabelBG = styled(LinearGradient)`
  position: absolute;
  top: -12px;
  left: 10px;
  z-index: 1;
`;

const InputLabel = styled.Text`
  color: #ffffff;
  font-family: 'JockeyOne_400Regular';
  padding: 0px 12px;
  z-index: 1;
`;

const InputBox = styled(TextInput).attrs({
  placeholderTextColor: '#736D78',
})`
  border: 1px solid #736d78;
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 28px;
  font-size: 20px;
  height: 50px;
  background: #031013;
  position: relative;
  color: #fff;
`;

export default {
  InputBox,
  InputLabelBG,
  InputLabel,
};
