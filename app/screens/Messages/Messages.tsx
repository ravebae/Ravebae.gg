import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Message from '@components/Message';

export default function Messages() {
  return (
    <View style={styles.messageColumn}>
      <View style={styles.headerRow}>
        <Text style={styles.messageHeader}>Messages</Text>
        <Image source={require('../../../assets/Heart.png')} />
      </View>
      <Message
        name={'David'}
        message={'I play valorant as gold 3 btw'}
        photo={''}
      />
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
  messageHeader: {
    fontFamily: 'JockeyOne_400Regular',
    fontSize: 42,
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  messageColumn: {
    paddingHorizontal: 35,
    paddingVertical: 50,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#081E23',
  },
});
