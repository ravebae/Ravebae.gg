import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabBar from '@components/TabBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from '../Explore';
import PopularMatches from '../PopularMatches';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 50, display: 'flex', justifyContent: 'center' },
        tabBarLabelStyle: { height: 20 },
      }}
    >
      <Tab.Screen
        name='Explore'
        component={Explore}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Matches'
        component={PopularMatches}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='heart-half-outline' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Dashboard;
