import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../../firebaseConfig'

export interface RouterProps {
    navigation: NavigationProp<any, any>
}

const List = ({ navigation }: RouterProps) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate('details')} title='Open details' />
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
    </View>
  )
}

export default List