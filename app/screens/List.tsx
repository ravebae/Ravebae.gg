import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from 'firebaseConfig';
import React from 'react';
import { Button, View } from 'react-native';

export interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const List = ({ navigation }: RouterProps) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('details')}
        title='Open details'
      />
      <Button onPress={() => navigation.navigate('step')} title='Start form' />
      <Button onPress={() => navigation.navigate('DirectMessageScreen')} title='view Direct Message Prototype' />
      {/* <Button onPress={() => FIREBASE_AUTH.signOut()} title='Logout' /> */}
    </View>
  );
};

export default List;
