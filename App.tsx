import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/Login';
import List from './app/screens/List';
import Details from './app/screens/Details';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';
import Register from './app/screens/Register';
import { ProfileDetails } from './app/screens/ProfileDetails/ProfileDetails';
import SetLocation from './app/screens/SetLocation';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='My profile' component={List} />
      <InsideStack.Screen name='details' component={Details} />
      <InsideStack.Screen name='step' component={ProfileDetails} />
      <InsideStack.Screen name='location' component={SetLocation} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // User changes, or logged in/sign out
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? (
          <Stack.Screen
            name='Inside'
            component={InsideLayout}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name='Login'
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Register'
              component={Register}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
