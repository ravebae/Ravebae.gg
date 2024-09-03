import { TextInput, View } from 'react-native';
import styled from 'styled-components/native';

const CodeContainer = styled(View)`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const CodeBox = styled(View)`
  border-radius: 15px;
  width: 60px;
  height: 70px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const Code = styled(TextInput)`
  font-size: 30px;
  color: 'white';
  text-align: 'center';
  padding: 0;
  flex: 1;
  display: flex;
  margin: 0;
  cursor: not-allowed;
  font-family: 'Poppins_600SemiBold';
`;

export default {
  CodeContainer,
  Code,
  CodeBox,
};
