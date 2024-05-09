import styled from 'styled-components';
import { Text, SafeAreaView, View } from 'react-native';

const ProfileContainer = styled(View)`
  padding: 50px;
  height: 100%;
  background-color: #081e23;
`;

const FormWrapper = styled(SafeAreaView)`
  padding: 0px 10px;
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled(Text)`
  font-size: 30px;
  color: #fff;
  margin-bottom: 40px;
`;

const ContinueBtn = styled(View)`
  border-radius: 10px;
  padding: 20px;
  background-color: #a94bf3;
  color: #fff;
  font-weight: 800;
  display: flex;
  align-items: center;
`;

const Continue = styled(Text)`
  color: #fff;
  font-weight: 600;
  font-size: 20px;
`;

export default {
  Continue,
  ContinueBtn,
  ProfileContainer,
  FormWrapper,
  Title,
};
