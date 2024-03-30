import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

const InputBox = styled(TextInput).attrs({
  placeholderTextColor: '#FFF',
})`
  border: 2px solid #a94bf3;
  border-radius: 5px;
  padding: 10px;
  height: 50px;
  background: #000000;
  color: #fff;
`;

export default {
  InputBox,
};
