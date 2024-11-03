import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import style from '../Shop/style';

const KandiPopup = () => {
  return (
    <View style={styles.kandiContainer}>
      <Ionicons
        style={{
          alignSelf: 'flex-end',
          position: 'absolute',
          right: 8,
          top: 8,
        }}
        name='copy'
        size={22}
        color={'#000'}
      />
      <View>
        <Text style={styles.kandiTitle}>Share for a free kandi</Text>
        <Image
          style={styles.kandiImg}
          source={require('../../../assets/kandi.png')}
        />
        <Text style={styles.kandiText}>
          After first share{'\n'} free kandi per 20 shares
        </Text>
      </View>
    </View>
  );
};

export default function Setting() {
  const [popup, setPopup] = useState(false);

  const handleShare = () => {
    setPopup(!popup);
  };

  return (
    <View style={styles.settingContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>PROFILE & SETTINGS</Text>
      </View>
      <View style={styles.profileRow}>
        <Ionicons name='storefront' size={38} color={'#A94BF3'} />
        <View style={styles.profileDetails}>
          <Image
            style={styles.profileImg}
            source={{
              uri: 'https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
            }}
          />
          <Text style={styles.userName}>Ashley Kim</Text>
        </View>
        <View style={styles.shareContainer}>
          <Ionicons
            onPress={handleShare}
            name='share-social'
            size={38}
            color={'#FFFFFF'}
          />
          {popup ? <KandiPopup /> : null}
        </View>
      </View>
      <TouchableOpacity style={styles.ctaBtn}>
        <Text style={styles.ctaText}>Become a Baddie</Text>
      </TouchableOpacity>
      <View style={styles.settingsCol}>
        <View style={styles.settingsRow}>
          <Text style={styles.optionText}>Edit Profile</Text>
          <Ionicons name='chevron-forward-circle' size={42} color={'#A94BF3'} />
        </View>
        <View style={styles.settingsRow}>
          <Text style={styles.optionText}>Preferences</Text>
          <Ionicons name='chevron-forward-circle' size={42} color={'#A94BF3'} />
        </View>
        <View style={styles.settingsRow}>
          <Text style={styles.optionText}>General</Text>
          <Ionicons name='chevron-forward-circle' size={42} color={'#A94BF3'} />
        </View>
        <View style={styles.settingsRow}>
          <Text style={styles.optionText}>Help</Text>
          <Ionicons name='chevron-forward-circle' size={42} color={'#A94BF3'} />
        </View>
        <View style={styles.settingsRow}>
          <Text style={styles.optionText}>Feedback</Text>
          <Ionicons name='chevron-forward-circle' size={42} color={'#A94BF3'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    fontFamily: 'JockeyOne_400Regular',
    fontSize: 40,
    color: '#FFFFFF',
  },
  profileDetails: {
    flexDirection: 'column',
    gap: 10,
    marginTop: 10,
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  userName: {
    fontFamily: 'JockeyOne_400Regular',
    fontSize: 24,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  settingsCol: {
    flexDirection: 'column',
    paddingHorizontal: 50,
    gap: 5,
    marginTop: 10,
  },
  settingsRow: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionText: {
    color: '#FFFFFF',
    fontFamily: 'JockeyOne_400Regular',
    fontSize: 26,
  },
  settingContainer: {
    paddingHorizontal: 35,
    paddingVertical: 50,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#081E23',
  },
  ctaBtn: {
    backgroundColor: '#A94BF3',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 100,
    width: '85%',
    alignSelf: 'center',
    marginTop: 20,
  },
  ctaText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'JockeyOne_400Regular',
    fontSize: 26,
    textTransform: 'uppercase',
  },
  kandiContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#CD8CFF',
    zIndex: 10,
    position: 'absolute',
    width: 200,
    right: 10,
    top: 50,
  },
  kandiTitle: {
    textAlign: 'center',
    fontFamily: 'JockeyOne_400Regular',
    fontSize: 20,
    marginTop: 8,
  },
  kandiText: {
    textAlign: 'center',
    fontFamily: 'JockeyOne_400Regular',
    fontSize: 16,
  },
  shareContainer: {
    position: 'relative',
  },
  kandiImg: {
    width: 70,
    height: 70,
    marginVertical: 10,
    alignSelf: 'center',
  },
});
