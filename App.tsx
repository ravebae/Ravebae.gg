import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from '@src/screens/Explore';
import Verification from '@src/screens/Verification';
import OTP from '@src/screens/Verification/OTP';
import { User, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import Details from './app/screens/Details';
import List from './app/screens/List';
import Login from './app/screens/Login';
import { ProfileDetails } from './app/screens/ProfileDetails/ProfileDetails';
import Register from './app/screens/Register';
import { FIREBASE_AUTH } from './firebaseConfig';
import PopularMatches from '@src/screens/PopularMatches';
import Dashboard from '@src/screens/Dashboard';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='My profile' component={List} />
      <InsideStack.Screen name='details' component={Details} />
      <InsideStack.Screen
        name='step'
        component={Verification}
        options={{ headerShown: false }}
      />
      <InsideStack.Screen
        name='profile'
        component={ProfileDetails}
        options={{ headerShown: false }}
      />
      <InsideStack.Screen
        name='otp'
        component={OTP}
        options={{ headerShown: false }}
      />
      <InsideStack.Screen
        name='explore'
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <InsideStack.Screen
        name='matches'
        component={PopularMatches}
        options={{ headerShown: false }}
      />
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
