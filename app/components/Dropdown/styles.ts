import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { LinearGradient } from 'expo-linear-gradient';

const DropdownList = Dropdown;

const MultiDropdownList = MultiSelect;

const InputLabelBG = styled(LinearGradient)`
  position: absolute;
  left: 10px;
  top: -10px;
  z-index: 1;
  padding-right: 12px;
  font-size: 14px;
`;

const InputLabel = styled.Text`
  position: relative;
  color: #ffffff;
  left: 10px;
  font-family: 'JockeyOne_400Regular';
  z-index: 999;
  flex: 1;
  padding-right: 8px;
  font-size: 14px;
`;

export default {
  MultiDropdownList,
  DropdownList,
  InputLabel,
  InputLabelBG,
};
