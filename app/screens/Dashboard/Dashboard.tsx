import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabBar from '@components/TabBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from '../Explore';
import PopularMatches from '../PopularMatches';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Shop from '../Shop';
import Boost from '../Shop/Boost';

const Tab = createBottomTabNavigator();
function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 50,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#1F4148',
        },
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
      <Tab.Screen
        name='Shop'
        component={Shop}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='card-outline' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Boost'
        component={Boost}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='rocket' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Dashboard;
