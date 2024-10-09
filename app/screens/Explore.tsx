import { View, Image, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import S from './ProfileDetails/styles';
import VietGirl from './Images/VietGirl.jpeg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Kandi from './Images/Kandi.jpeg';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { CheckBox } from 'react-native-elements';

export const Explore = () => {
  const [visible, setVisible] = useState(false);
  const [clickedButton, setClickedButton] = useState('');
  const toggleDropdown = () => {
    setVisible(!visible);
    if (!visible) {
      setClickedButton('');
    }
  };
  
  const [checked, setChecked] = useState({
    notInterested: false,
    fakeProfile: false,
    explicitContent: false,
    underAge: false,
    danger: false,
  });

  const handleReport = () => {
    setVisible(!visible);
      if (!visible) {
        setClickedButton('');
      }
  }
  const handleCheck = (name) => {
    setChecked({
      ...checked,
      [name]: !checked[name],
    });
  };

  const handleClickedButton = (clicked) => {
    if (clicked == "Remove") {
      setVisible(!visible);
      if (!visible) {
        setClickedButton('');
      }
    }
    setClickedButton(clicked);
  };

  return (
    <ScrollView>
      <View
        style={{
          display: 'flex',
          flex: 1,
          width: '100%',
          alignItems: 'center',
          backgroundColor: '#081e23',
          height: '100%',
          paddingVertical: 50,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', zIndex: 100}}>
          <S.Title
            style={{ fontFamily: 'JockeyOne_400Regular', marginRight: 20 }}
          >
            Tiffany Nguyen, 27
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
          <TouchableOpacity onPress={toggleDropdown}>
            <Entypo
              name='dots-three-horizontal'
              size={35}
              color='#9656ce'
              style={{ marginTop: -35 }}
            ></Entypo>
          </TouchableOpacity>
          {visible && (
            <View style={{position: 'absolute', left: 200, top: 50}}>
              <TouchableOpacity style={{backgroundColor: '#cab2fb', borderTopLeftRadius: 10, borderTopRightRadius: 10, width: 135, paddingLeft: 20, paddingTop: 10, paddingBottom: 10}} onPress={() => handleClickedButton('Remove')}>
                <Text style={{fontFamily: 'JockeyOne_400Regular', fontSize: 15}}>Remove</Text>
              </TouchableOpacity>
              <Text style={{width:135, height: 1, color: 'black'}}></Text>
              <TouchableOpacity style={{backgroundColor: '#cab2fb', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, width: 135, paddingLeft: 20, paddingTop: 10, paddingBottom: 10}} onPress={() => handleClickedButton('Report')}>
                <Text style={{fontFamily: 'JockeyOne_400Regular', fontSize: 15}}>Report</Text>
              </TouchableOpacity>
            </View>
            )}
          {clickedButton === 'Report' && visible && (
            <View style={styles.container}>
              <Text style={styles.title}>Please select a reason</Text>
              <CheckBox
                title="I am not interested in this person"
                checked={checked.notInterested}
                onPress={() => handleCheck('notInterested')}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
              />
              <CheckBox
                title="Profile is fake, spam or scammer"
                checked={checked.fakeProfile}
                onPress={() => handleCheck('fakeProfile')}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
              />
              <CheckBox
                title="Explicit content"
                checked={checked.explicitContent}
                onPress={() => handleCheck('explicitContent')}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
              />
              <CheckBox
                title="Under age or minor"
                checked={checked.underAge}
                onPress={() => handleCheck('underAge')}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
              />
              <CheckBox
                title="Person in danger"
                checked={checked.danger}
                onPress={() => handleCheck('danger')}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
              />
              <Text style={{width:'100%', height: 1, color: 'black'}}>hello</Text>
              <TouchableOpacity style={styles.reportButton} onPress={handleReport}>
                <Text style={styles.reportButtonText}>Report</Text>
              </TouchableOpacity>
            </View>
            
          )}
        </View>
        <View
          style={{
            height: 100,
            width: '100%',
            backgroundColor: '#05272f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20
          }}
        >
          <Text
            style={{
              fontFamily: 'JockeyOne_400Regular',
              color: '#fff',
              fontSize: 20,
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            You and Tiffany are both interested in Photography
          </Text>
        </View>

        <Image
          source={VietGirl}
          style={{
            width: '100%',
            height: 360,
            borderRadius: 20,
            marginTop: 20,
          }}
        />
        <View
          style={{
            width: '100%',
            height: 190,
            paddingLeft: 25,
            paddingTop: 25,
            borderRadius: 20,
            marginTop: 20,
            borderColor: 'white',
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              fontFamily: 'JockeyOne_400Regular',
              color: '#cab2fb',
              fontSize: 20,
              marginBottom: 20,
            }}
          >
            Biggest rave fail...
          </Text>
          <Text
            style={{
              fontFamily: 'JockeyOne_400Regular',
              color: 'white',
              fontSize: 30,
              marginBottom: 20,
            }}
          >
            When I swung at a guy {'\n'}while trying to muzz
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            paddingLeft: 25,
            borderRadius: 20,
            marginTop: 20,
            backgroundColor: '#cab2fb',
            borderWidth: 1,
            justifyContent: 'center',
          }}
        >
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name='person' size={15} color='black'></Ionicons>
              <Text
                style={{
                  fontFamily: 'JockeyOne_400Regular',
                  color: 'black',
                  fontSize: 15,
                  marginLeft: 10,
                  marginRight: 20,
                }}
              >
                Women
              </Text>
              <MCI name='target' size={15} color='black'></MCI>
              <Text
                style={{
                  fontFamily: 'JockeyOne_400Regular',
                  color: 'black',
                  fontSize: 15,
                  marginLeft: 10,
                  marginRight: 20,
                }}
              >
                Straight
              </Text>
              <FontAwesome6
                name='location-dot'
                size={15}
                color='black'
              ></FontAwesome6>
              <Text
                style={{
                  fontFamily: 'JockeyOne_400Regular',
                  color: 'black',
                  fontSize: 15,
                  marginLeft: 10,
                  marginRight: 20,
                }}
              >
                Strathfield
              </Text>
              <Fontisto name='world-o' size={15} color='black'></Fontisto>
              <Text
                style={{
                  fontFamily: 'JockeyOne_400Regular',
                  color: 'black',
                  fontSize: 15,
                  marginLeft: 10,
                  marginRight: 20,
                }}
              >
                Chinese
              </Text>
              <MaterialIcons
                name='family-restroom'
                size={15}
                color='black'
              ></MaterialIcons>
              <Text
                style={{
                  fontFamily: 'JockeyOne_400Regular',
                  color: 'black',
                  fontSize: 15,
                  marginLeft: 10,
                  marginRight: 20,
                }}
              >
                Family
              </Text>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            width: '100%',
            height: 225,
            paddingLeft: 25,
            paddingTop: 25,
            borderRadius: 20,
            marginTop: 20,
            borderColor: 'white',
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              fontFamily: 'JockeyOne_400Regular',
              color: '#cab2fb',
              fontSize: 20,
              marginBottom: 20,
            }}
          >
            Hottest rave moment...
          </Text>
          <Text
            style={{
              fontFamily: 'JockeyOne_400Regular',
              color: 'white',
              fontSize: 30,
            }}
          >
            Cuddling with my {'\n'}ravebae when Darren {'\n'}Styles was playing
          </Text>
        </View>
        <Image
          source={VietGirl}
          style={{
            width: '100%',
            height: 360,
            borderRadius: 20,
            marginTop: 20,
          }}
        />
        <View
          style={{
            width: '100%',
            height: 225,
            paddingLeft: 25,
            paddingTop: 25,
            borderRadius: 20,
            marginTop: 20,
            borderColor: 'white',
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              fontFamily: 'JockeyOne_400Regular',
              color: '#cab2fb',
              fontSize: 20,
              marginBottom: 20,
            }}
          >
            In my free time, I love to...
          </Text>
          <Text
            style={{
              fontFamily: 'JockeyOne_400Regular',
              color: 'white',
              fontSize: 30,
            }}
          >
            Play some casual {'\n'}valorant with friends {'\n'}at 3am
          </Text>
        </View>
        <Image
          source={VietGirl}
          style={{
            width: '100%',
            height: 360,
            borderRadius: 20,
            marginTop: 20,
          }}
        />
        <View
          style={{
            width: '100%',
            height: 140,
            paddingLeft: 25,
            paddingTop: 25,
            borderRadius: 20,
            marginTop: 20,
            borderColor: 'white',
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              fontFamily: 'JockeyOne_400Regular',
              color: '#cab2fb',
              fontSize: 20,
              marginBottom: 20,
            }}
          >
            My love language is...
          </Text>
          <Text
            style={{
              fontFamily: 'JockeyOne_400Regular',
              color: 'white',
              fontSize: 30,
            }}
          >
            Physical Touch
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 225,
            paddingLeft: 25,
            paddingTop: 25,
            borderRadius: 20,
            marginTop: 20,
            borderColor: 'white',
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              fontFamily: 'JockeyOne_400Regular',
              color: '#cab2fb',
              fontSize: 20,
              marginBottom: 20,
            }}
          >
            INTERESTS
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <AntDesign name='camerao' size={15} color='#cab2fb'></AntDesign>
            <Text
              style={{
                fontFamily: 'JockeyOne_400Regular',
                color: 'white',
                fontSize: 20,
                marginLeft: 15,
              }}
            >
              Photography
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <MCI name='noodles' size={15} color='#cab2fb'></MCI>
            <Text
              style={{
                fontFamily: 'JockeyOne_400Regular',
                color: 'white',
                fontSize: 20,
                marginLeft: 15,
              }}
            >
              Cooking
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <Ionicons
              name='musical-notes-outline'
              size={15}
              color='#cab2fb'
            ></Ionicons>
            <Text
              style={{
                fontFamily: 'JockeyOne_400Regular',
                color: 'white',
                fontSize: 20,
                marginLeft: 15,
              }}
            >
              Raving
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 360,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    top: 50,
    marginLeft: -35,
    marginTop: 100,
    backgroundColor: '#4F4457',
    alignItems: 'center',
    borderColor: '#4F4457',
    borderWidth: 1,
  },
  title: {
    color: 'white',
    fontSize: 27,
    fontFamily: 'JockeyOne_400Regular',
    paddingTop: 15,
    marginBottom: 5,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    width: '90%',
  },
  checkboxText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'JockeyOne_400Regular',
  },
  reportButton: {
    width: '100%',
    marginTop: 10,
    backgroundColor: '#4F4457',
    borderColor: '#4F4457',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
  },
  reportButtonText: {
    color: 'white',
    fontSize: 27,
    fontFamily: 'JockeyOne_400Regular',
  },
});

export default Explore;