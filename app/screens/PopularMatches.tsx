import { View, Image, Text, ScrollView } from 'react-native';
import React from 'react';
import S from './ProfileDetails/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChineseGirl from './Images/ChineseGirl.jpeg';
import Glasses from './Images/Glasses.jpeg';
import Kandi from './Images/Kandi.jpeg';

export const PopularMatches = () => {
    return (
      <S.ProfileContainer>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <S.Title
            style={{
              fontFamily: 'JockeyOne_400Regular',
              fontSize: 40,
              marginRight: 20,
            }}
          >
            Popular Matches
          </S.Title>
          <Ionicons
            name='storefront'
            size={35}
            color='#9656ce'
            style={{ marginTop: -38 }}
          ></Ionicons>
        </View>
        <Text
          style={{
            fontFamily: 'JockeyOne_400Regular',
            color: 'white',
            fontSize: 17,
            marginTop: -30,
          }}
        >
          User who receive popular amount of matches {'\n'}are featured here.
          Refreshed daily.
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                width: 297,
                height: 380,
                backgroundColor: '#05272f',
                paddingLeft: 21,
                paddingTop: 30,
                marginTop: 42,
                borderRadius: 20,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <S.Title
                  style={{ fontFamily: 'JockeyOne_400Regular', marginRight: 69 }}
                >
                  Angela Tran, 21
                </S.Title>
                <Image 
                    source={Kandi}
                    style={{width: 25,
                            height: 25,
                            borderRadius: 20,
                            marginTop: -37,
                            marginRight: 20
                    }}
                />
              </View>
              <Image
                source={ChineseGirl}
                style={{
                  width: 255,
                  height: 255,
                  borderRadius: 20,
                  marginTop: -25,
                }}
              />
            </View>
            <View
              style={{
                width: 297,
                height: 380,
                backgroundColor: '#05272f',
                paddingLeft: 21,
                paddingTop: 30,
                marginTop: 42,
                marginLeft: 10,
                borderRadius: 20,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <S.Title
                  style={{ fontFamily: 'JockeyOne_400Regular', marginRight: 77 }}
                >
                  Cindy Tran, 25
                </S.Title>
                <Image 
                    source={Kandi}
                    style={{width: 25,
                            height: 25,
                            borderRadius: 20,
                            marginTop: -37,
                            marginRight: 20
                    }}
                />
              </View>
              <Image
                source={Glasses}
                style={{
                  width: 255,
                  height: 255,
                  borderRadius: 20,
                  marginTop: -25,
                }}
              />
            </View>
          </ScrollView>
        </View>
      </S.ProfileContainer>
    );
  };
  
  export default PopularMatches;
