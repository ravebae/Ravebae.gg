import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { MotiText } from 'moti';
import styled from 'styled-components';

const Badge = styled(View)`
  background-color: #a94bf3;
  padding: 10px;
  border-radius: 30px;
`;

const BadgeText = styled(Text)`
  color: #ffffff;
  font-family: 'JockeyOne_400Regular';
  font-size: 20px;
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

const Container = styled(View)`
  padding: 80px 30px;
  height: 100%;
  overflow-y: scroll;
  flex-grow: 0;
  background-color: #081e23;
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

const BenefitsContainer = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  gap: 15px;
`;

const BoostContainer = styled(View)`
  display: flex;
  justify-content: center;
  margin-top: 35px;
  gap: 15px;
  padding: 0px 20px;
`;

const BenefitsTitle = styled(Text)`
  font-family: 'JockeyOne_400Regular';
  font-size: 28px;
  color: #ffffff;
`;

const BoostTitle = styled(Text)`
  font-family: 'JockeyOne_400Regular';
  font-size: 28px;
  color: #ffffff;
`;

const BoostCircle = styled(View)`
  width: 24px;
  height: 24px;
  border-radius: 30px;
  background-color: #d9d9d9;
  justify-self: flex-end;
`;

const BoostItem = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BenefitsSpan = styled(Text)`
  font-family: 'JockeyOne_400Regular';
  font-size: 16px;
  color: #ffffff;
`;

export default {
  BenefitsTitle,
  BenefitsSpan,
  BenefitsContainer,
  Continue,
  ComponentWrapper,
  CategoryContainer,
  ContinueBtn,
  EmailContainer,
  PreviousBtn,
  Container,
  Question,
  FormWrapper,
  Title,
  StepRow,
  Step,
  ScrollContainer,
  ViewContainer,
  Badge,
  BadgeText,
  BoostContainer,
  BoostTitle,
  BoostCircle,
  BoostItem,
};
