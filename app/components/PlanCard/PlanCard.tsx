import { View, Text } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import S from './styles';

const PlanCard = ({ plan, price, category }) => {
  return (
    <S.Card>
      <S.CardTitle>{category}</S.CardTitle>
      <S.CardBody>
        <S.CardHeader>
          <Ionicons style={{ color: '#E2BDFF', fontSize: 32 }} name='heart' />
          <S.Plan>{plan} plan</S.Plan>
        </S.CardHeader>
        <S.PriceContainer>
          <S.Price>${price}</S.Price>
        </S.PriceContainer>
      </S.CardBody>
    </S.Card>
  );
};

export default PlanCard;
