import { Text, View } from 'react-native';
import styled from 'styled-components';

const Card = styled(View)`
  display: flex;
  flex-direction: column;
  background-color: #e2bdff;
  align-items: center;
  justify-content: center;
  border: 1px solid #a94bf3;
`;

const CardBody = styled(View)`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px 10px;
`;

const CardTitle = styled(Text)`
  font-family: 'JockeyOne_400Regular';
  font-size: 20px;
  padding: 10px 10px;
`;

const CardHeader = styled(View)`
  display: flex;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

const Plan = styled(Text)`
  font-family: 'JockeyOne_400Regular';
  font-size: 20px;
`;

const Price = styled(Text)`
  font-family: 'JockeyOne_400Regular';
  font-size: 20px;
`;

const PriceContainer = styled(View)`
  border-radius: 30px;
  padding: 5px 20px;
  width: 100%;
  margin-top: 10px;
  align-self: center;
  display: flex;
  align-items: center;
  background-color: #cd8cff;
`;

export default {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Plan,
  Price,
  PriceContainer,
};
