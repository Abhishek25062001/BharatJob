import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuthStore } from '../store/authStore';
import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';
import SplashScreen from '../screens/auth/SplashScreen';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const { isLoggedIn } = useAuthStore();
  const [isSplashVisible, setSplashVisible] = React.useState(true);

  useEffect(() => {
    // Simulate splash screen delay
    const timer = setTimeout(() => setSplashVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'default',
          contentStyle: { backgroundColor: 'white' },
        }}
      >
        {!isLoggedIn ? (
          <Stack.Group screenOptions={{ animation: 'none' }}>
            <Stack.Screen
              name="Auth"
              component={AuthNavigator}
              options={{ animation: 'none' }}
            />
          </Stack.Group>
        ) : (
          <Stack.Group screenOptions={{ animation: 'none' }}>
            <Stack.Screen
              name="Main"
              component={MainNavigator}
              options={{ animation: 'none' }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
