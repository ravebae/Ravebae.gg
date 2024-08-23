import styled from 'styled-components';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { MotiText } from 'moti';

const ViewContainer = styled(View)`
  flex: 1;
  height: 100%;
  position: relative;
`;

const EmailContainer = styled(View)`
  padding: 150px 30px;
  height: 100%;
  overflow-y: scroll;
`;

const ViewContainer = styled(View)`
  flex: 1;
  height: 100%;
  position: relative;
`;

const EmailContainer = styled(View)`
  padding: 150px 30px;
  height: 100%;
  overflow-y: scroll;
`;

const ScrollContainer = styled(ScrollView)`
  height: 100%;
  background-color: #081e23;
  position: relative;
  flex: 1;
`;

const ProfileContainer = styled(KeyboardAvoidingView)`
  padding: 60px 30px;
  height: 100%;
  overflow-y: scroll;
`;

const PreviousBtn = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 12px;
  border: 1px solid white;
  border-radius: 12px;
  background-color: #031013;
`;

const FormWrapper = styled(SafeAreaView)`
  padding: 0px 20px;
  display: flex;
  height: 100%;
  flex-direction: column;
  position: relative;
  gap: 20px;
  flex: 1;
`;

const Title = styled(Text)`
  font-size: 24px;
  color: #fff;
`;

const Question = styled(MotiText)`
  font-size: 28px;
  color: #fff;
  margin-bottom: 30px;
`;

const ContinueBtn = styled(View)`
  border-radius: 15px;
  padding: 12px 25px;
  background-color: #a94bf3;
  color: #fff;
  font-weight: 800;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ComponentWrapper = styled(View)`
  margin: 10px 0px;
  height: 100%;
  flex: 1;
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
  font-size: 16px;
  font-family: 'Poppins_600SemiBold';
`;

export default {
  Continue,
  ComponentWrapper,
  CategoryContainer,
  ContinueBtn,
  EmailContainer,
  PreviousBtn,
  ProfileContainer,
  Question,
  FormWrapper,
  Title,
  StepRow,
  Step,
  ScrollContainer,
  ViewContainer,
};
