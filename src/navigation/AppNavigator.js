import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import NotesScreen from '../screens/NotesScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Notes"
        component={NotesScreen}
        options={{ title: 'Notes' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
