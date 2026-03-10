import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LanguageSelectionScreen from '../screens/auth/LanguageSelectionScreen';
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import { View, Text } from 'react-native';

import ProfileSetupScreen from '../screens/auth/ProfileSetupScreen';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'default',
      }}
    >
      <Stack.Screen
        name="LanguageSelection"
        component={LanguageSelectionScreen}
        options={{ animation: 'none' }}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
      />
      <Stack.Screen
        name="ProfileSetup"
        component={ProfileSetupScreen}
      />
    </Stack.Navigator>
  );
};
