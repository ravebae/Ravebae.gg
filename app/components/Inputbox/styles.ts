import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

const InputBox = styled(TextInput).attrs({
  placeholderTextColor: '#FFF',
})`
  border: 1px solid #a94bf3;
  border-radius: 10px;
  padding: 12px;
  height: 55zpx;
  background: #000000;
  color: #fff;
`;

export default {
  InputBox,
};
