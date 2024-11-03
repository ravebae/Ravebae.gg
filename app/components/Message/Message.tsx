import React from 'react';

import { Image, StyleSheet, View, Text } from 'react-native';

export default function Message({ photo, name, message }) {
  return (
    <View style={styles.messageContainer}>
      <View>
        <Image
          style={styles.profileImage}
          source={{
            uri: photo
              ? photo
              : 'https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
          }}
        />
      </View>
      <View style={styles.messageDetails}>
        <Text style={styles.messageTitle}>{name}</Text>
        <Text style={styles.messageLastText}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    padding: 10,
    gap: 20,
  },
  profileImage: {
    padding: 10,
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  messageDetails: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 4,
  },
  messageTitle: {
    fontSize: 24,
    fontFamily: 'JockeyOne_400Regular',
    color: '#FFFFFF',
  },
  messageLastText: {
    fontSize: 14,
    fontFamily: 'JockeyOne_400Regular',
    color: '#FFFFFF',
  },
});
