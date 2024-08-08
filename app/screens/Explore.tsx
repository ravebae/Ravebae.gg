import { View, Image, Text } from 'react-native'
import React from 'react'
import S from './ProfileDetails/styles';
import VietGirl from './Images/VietGirl.jpeg';

const Explore = () => {
  return (
    <S.ProfileContainer>
      <S.Title style={{ fontFamily: 'JockeyOne_400Regular' }}>Tiffany Nguyen, 27</S.Title>
      <View style={{width: 360,
        height: 100,
        backgroundColor: '#05272f',
        paddingLeft: 15,
        paddingTop: 7.5,
        borderRadius: '20px',
        marginLeft: -25,
      }}>
        <Text style={{ fontFamily: 'JockeyOne_400Regular', color: '#9656ce', fontSize: '20px'}}>Most Compatible</Text>
        <Text style={{ fontFamily: 'JockeyOne_400Regular', color: '#fff', fontSize: '20px'}}>You and Tiffany are both interested in Photography</Text>
      </View>
      <Image 
        source={VietGirl}
        style={{width: 360,
                height: 360,
                marginLeft: -25,
                borderRadius: '20px',
                marginTop: 20
        }}
      />
      <View style={{width: 360,
        height: 100,
        paddingLeft: 25,
        paddingTop: 25,
        borderRadius: '20px',
        marginLeft: -25,
        marginTop: 20,
        borderColor: 'white',
        borderWidth: 1
      }}>
        <Text style={{ fontFamily: 'JockeyOne_400Regular', color: '#cab2fb', fontSize: '20px'}}>Biggest rave fail...</Text>
      </View>
    </S.ProfileContainer>
  )
}

export default Explore