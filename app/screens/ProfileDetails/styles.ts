import styled from 'styled-components';
import {
  Text,
  SafeAreaView,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

const ScrollContainer = styled(ScrollView)`
  height: 100%;
  background-color: #081e23;
`;

const ProfileContainer = styled(View)`
  padding: 80px 30px;
  height: 100%;
  overflow-y: scroll;
  flex-grow: 0;
`;

const PreviousBtn = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  padding: 5px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: #031013;
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
  margin-bottom: 5px;
`;

const ContinueBtn = styled(View)`
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #a94bf3;
  color: #fff;
  font-weight: 800;
  display: flex;
  align-items: center;
`;

const ComponentWrapper = styled(View)`
  margin: 10px 0px;
`;

const CategoryContainer = styled(View)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

const StepRow = styled(View)`
  width: 100%;
  height: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  gap: 10px;
`;

const Step = styled(View)`
  height: 5px;
  max-width: 30px;
  min-width: 18px;
  border-radius: 30px;
`;

const Continue = styled(Text)`
  color: #fff;
  font-weight: 600;
  font-size: 20px;
`;

export default {
  Continue,
  ComponentWrapper,
  CategoryContainer,
  ContinueBtn,
  PreviousBtn,
  ProfileContainer,
  FormWrapper,
  Title,
  StepRow,
  Step,
  ScrollContainer,
};
