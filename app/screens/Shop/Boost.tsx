import { View, Image, Text, ScrollView } from 'react-native';
import React from 'react';
import S from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BoostMe from '@components/BoostMe';

const Boost = () => {
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
          VIEW BOOST
        </S.Title>
      </View>
      <Text
        style={{
          fontFamily: 'JockeyOne_400Regular',
          color: 'white',
          fontSize: 28,
        }}
      >
        Have your profile be viewed 3x more likely!
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 100,
          margin: 50,
          justifyContent: 'center',
        }}
      >
        <View style={{ height: 300, width: 300, margin: 0, padding: 0 }}>
          <BoostMe />
        </View>
      </View>

      <S.BoostContainer>
        <S.BoostItem>
          <S.BoostTitle>1 Month for $20</S.BoostTitle>
          <S.BoostCircle />
        </S.BoostItem>
        <S.BoostItem>
          <S.BoostTitle>3 Month for $15 each</S.BoostTitle>
          <S.BoostCircle />
        </S.BoostItem>
        <S.BoostItem>
          <S.BoostTitle>12 Month for $12 each</S.BoostTitle>
          <S.BoostCircle />
        </S.BoostItem>
      </S.BoostContainer>
    </S.Container>
  );
};

export default Boost;
