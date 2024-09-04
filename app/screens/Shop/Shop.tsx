import { View, Image, Text, ScrollView } from 'react-native';
import React from 'react';
import S from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChineseGirl from 'assets/img/ChineseGirl.jpeg';
import Glasses from 'assets/img/Glasses.jpeg';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import PlanCard from '@components/PlanCard';

const Shop = () => {
  return (
    <S.Container>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <S.Title
          style={{
            fontFamily: 'JockeyOne_400Regular',
            fontSize: 40,
          }}
        >
          UNLOCK PREMIUM
        </S.Title>
      </View>
      <Text
        style={{
          fontFamily: 'JockeyOne_400Regular',
          color: 'white',
          fontSize: 28,
        }}
      >
        Find your ravebae with our premium plans
      </Text>
      <ScrollView horizontal={true}>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 35 }}
        >
          <PlanCard plan={'1 month'} price={29.93} category={'Rave Newbie'} />
          <PlanCard plan={'3 months'} price={85.93} category={'Raver'} />
          <PlanCard
            plan={'12 months'}
            price={250.93}
            category={'Rave Veteran'}
          />
        </View>
      </ScrollView>
      <S.BenefitsContainer>
        <S.BenefitsTitle>Benefits with premium:</S.BenefitsTitle>
        <S.BenefitsSpan>Unlimited Likes</S.BenefitsSpan>
        <S.BenefitsSpan>More dating preferences</S.BenefitsSpan>
        <S.BenefitsSpan>See who liked you</S.BenefitsSpan>
      </S.BenefitsContainer>
    </S.Container>
  );
};

export default Shop;
