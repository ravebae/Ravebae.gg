import { View, Image, Text, ScrollView} from 'react-native'
import React from 'react'
import S from './ProfileDetails/styles';
import VietGirl from './Images/VietGirl.jpeg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const Explore = () => {
  return (
    <ScrollView>
      <S.ProfileContainer>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <S.Title style={{ fontFamily: 'JockeyOne_400Regular', marginRight: 20}}>Tiffany Nguyen, 27</S.Title>
          <Entypo name="dots-three-horizontal" size={35} color="#9656ce" style={{ marginTop: -35 }}></Entypo>
        </View>
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
          height: 190,
          paddingLeft: 25,
          paddingTop: 25,
          borderRadius: '20px',
          marginLeft: -25,
          marginTop: 20,
          borderColor: 'white',
          borderWidth: 1
        }}>
          <Text style={{ fontFamily: 'JockeyOne_400Regular', color: '#cab2fb', fontSize: '20px', marginBottom: 20}}>Biggest rave fail...</Text>
          <Text style={{ fontFamily: 'JockeyOne_400Regular', color: 'white', fontSize: '30px', marginBottom: 20}}>When I swung at a guy {"\n"}while trying to muzz</Text>
        </View>
        <View style={{
          width: 360,
          height: 60,
          paddingLeft: 25,
          borderRadius: '20px',
          marginLeft: -25,
          marginTop: 20,
          backgroundColor: '#cab2fb', 
          borderWidth: 1,
          justifyContent: 'center'
        }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="person" size={15} color="black"></Ionicons>
            <Text style={{ fontFamily: 'JockeyOne_400Regular', color: 'black', fontSize: '15px', marginLeft: 10, marginRight: 20}}>Women</Text>
            <MCI name="target" size={15} color="black"></MCI>
            <Text style={{ fontFamily: 'JockeyOne_400Regular', color: 'black', fontSize: '15px', marginLeft: 10, marginRight: 20}}>Straight</Text>
            <FontAwesome6 name="location-dot" size={15} color="black"></FontAwesome6>
            <Text style={{ fontFamily: 'JockeyOne_400Regular', color: 'black', fontSize: '15px', marginLeft: 10, marginRight: 20}}>Strathfield</Text>
            <Fontisto name="world-o" size={15} color="black"></Fontisto>
            <Text style={{ fontFamily: 'JockeyOne_400Regular', color: 'black', fontSize: '15px', marginLeft: 10, marginRight: 20}}>Chinese</Text>
            <MaterialIcons name="family-restroom" size={15} color="black"></MaterialIcons>
            <Text style={{ fontFamily: 'JockeyOne_400Regular', color: 'black', fontSize: '15px', marginLeft: 10, marginRight: 20}}>Family</Text>
          </View>      
        </ScrollView>
        </View>
        <View style={{width: 360,
          height: 225,
          paddingLeft: 25,
          paddingTop: 25,
          borderRadius: '20px',
          marginLeft: -25,
          marginTop: 20,
          borderColor: 'white',
          borderWidth: 1
        }}>
          <Text style={{ fontFamily: 'JockeyOne_400Regular', color: '#cab2fb', fontSize: '20px', marginBottom: 20}}>Hottest rave moment...</Text>
          <Text style={{ fontFamily: 'JockeyOne_400Regular', color: 'white', fontSize: '30px'}}>Cuddling with my {"\n"}ravebae when Darren {"\n"}Styles was playing</Text>
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
          height: 225,
          paddingLeft: 25,
          paddingTop: 25,
          borderRadius: '20px',
          marginLeft: -25,
          marginTop: 20,
          borderColor: 'white',
          borderWidth: 1
        }}>
          <Text style={{ fontFamily: 'JockeyOne_400Regular', color: '#cab2fb', fontSize: '20px', marginBottom: 20}}>In my free time, I love to...</Text>
          <Text style={{ fontFamily: 'JockeyOne_400Regular', color: 'white', fontSize: '30px'}}>Play some casual {"\n"}valorant with friends {"\n"}at 3am</Text>
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
          height: 140,
          paddingLeft: 25,
          paddingTop: 25,
          borderRadius: '20px',
          marginLeft: -25,
          marginTop: 20,
          borderColor: 'white',
          borderWidth: 1
        }}>
          <Text style={{ fontFamily: 'JockeyOne_400Regular', color: '#cab2fb', fontSize: '20px', marginBottom: 20}}>My love language is...</Text>
          <Text style={{ fontFamily: 'JockeyOne_400Regular', color: 'white', fontSize: '30px'}}>Physical Touch</Text>
        </View>
        <View style={{width: 360,
          height: 225,
          paddingLeft: 25,
          paddingTop: 25,
          borderRadius: '20px',
          marginLeft: -25,
          marginTop: 20,
          borderColor: 'white',
          borderWidth: 1
        }}>
          <Text style={{ fontFamily: 'JockeyOne_400Regular', color: '#cab2fb', fontSize: '20px', marginBottom: 20}}>INTERESTS</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
            <AntDesign name="camerao" size={15} color='#cab2fb'></AntDesign>
            <Text style={{ fontFamily: 'JockeyOne_400Regular', color: 'white', fontSize: '20px', marginLeft: 15}}>Photography</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <MCI name="noodles" size={15} color='#cab2fb'></MCI>
            <Text style={{ fontFamily: 'JockeyOne_400Regular', color: 'white', fontSize: '20px', marginLeft: 15}}>Cooking</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <Ionicons name="musical-notes-outline" size={15} color='#cab2fb'></Ionicons>
            <Text style={{ fontFamily: 'JockeyOne_400Regular', color: 'white', fontSize: '20px', marginLeft: 15}}>Raving</Text>
          </View>
        </View>
      </S.ProfileContainer>
    </ScrollView>
  )
}

export default Explore