import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

// Screens
import HomeScreen from '../screens/main/HomeScreen';
import SearchScreen from '../screens/main/SearchScreen';
import AppliedJobsScreen from '../screens/main/AppliedJobsScreen';
import MessagesScreen from '../screens/main/MessagesScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import ChatDetailScreen from '../screens/main/ChatDetailScreen';
import ProfileViewScreen from '../screens/main/ProfileViewScreen';
import ProfileEditScreen from '../screens/main/ProfileEditScreen';
import AppliedJobDetailScreen from '../screens/main/AppliedJobDetailScreen';
import NotificationsScreen from '../screens/main/NotificationsScreen';
import NotificationDetailScreen from '../screens/main/NotificationDetailScreen';
import InterviewScheduleScreen from '../screens/main/InterviewScheduleScreen';
import ResumeBuilderScreen from '../screens/main/ResumeBuilderScreen';
import SavedJobsScreen from '../screens/main/SavedJobsScreen';
import SettingsScreen from '../screens/main/SettingsScreen';
import HelpSupportScreen from '../screens/main/HelpSupportScreen';
import TermsOfServiceScreen from '../screens/main/TermsOfServiceScreen';
import PrivacyPolicyScreen from '../screens/main/PrivacyPolicyScreen';
import JobCategoryScreen from '../screens/main/JobCategoryScreen';
import { JobDetailsModal } from '../screens/modals/JobDetailsModal';
import { ApplyJobModal } from '../screens/modals/ApplyJobModal';

import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Home Stack
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="Notifications" component={NotificationsScreen} />
    <Stack.Screen name="NotificationDetail" component={NotificationDetailScreen} />
    <Stack.Screen name="SavedJobs" component={SavedJobsScreen} />
    <Stack.Screen name="JobCategory" component={JobCategoryScreen} />
  </Stack.Navigator>
);

// Search Stack
const SearchStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SearchScreen" component={SearchScreen} />
  </Stack.Navigator>
);

// Applied Stack
const AppliedStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AppliedScreen" component={AppliedJobsScreen} />
    <Stack.Screen name="AppliedJobDetail" component={AppliedJobDetailScreen} />
    <Stack.Screen name="InterviewSchedule" component={InterviewScheduleScreen} />
  </Stack.Navigator>
);

// Messages Stack
const MessagesStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
    <Stack.Screen name="ChatDetail" component={ChatDetailScreen} />
  </Stack.Navigator>
);

// Profile Stack
const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="ProfileView" component={ProfileViewScreen} />
    <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
    <Stack.Screen name="ResumeBuilder" component={ResumeBuilderScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="HelpSupport" component={HelpSupportScreen} />
    <Stack.Screen name="TermsOfService" component={TermsOfServiceScreen} />
    <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
  </Stack.Navigator>
);

export const MainNavigator = () => {
  const [jobDetailsVisible, setJobDetailsVisible] = React.useState(false);
  const [applyModalVisible, setApplyModalVisible] = React.useState(false);

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            let icon = '';
            if (route.name === 'Home') icon = '🏠';
            else if (route.name === 'Search') icon = '🔍';
            else if (route.name === 'Applied') icon = '📋';
            else if (route.name === 'Messages') icon = '💬';
            else if (route.name === 'Profile') icon = '👤';

            const color = focused ? colors.primary : colors.gray;
            return (
              <Text style={{ fontSize: 24, color }}>
                {icon}
              </Text>
            );
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.gray,
          tabBarStyle: {
            backgroundColor: colors.white,
            borderTopColor: colors.border,
            borderTopWidth: 1,
            paddingBottom: 8,
            paddingTop: 8,
            height: 60,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name="Search" component={SearchStack} options={{ tabBarLabel: 'Search' }} />
        <Tab.Screen name="Applied" component={AppliedStack} options={{ tabBarLabel: 'Applied' }} />
        <Tab.Screen name="Messages" component={MessagesStack} options={{ tabBarLabel: 'Messages' }} />
        <Tab.Screen name="Profile" component={ProfileStack} options={{ tabBarLabel: 'Profile' }} />
      </Tab.Navigator>

      <JobDetailsModal
        visible={jobDetailsVisible}
        onClose={() => setJobDetailsVisible(false)}
        onApply={() => {
          setJobDetailsVisible(false);
          setApplyModalVisible(true);
        }}
      />

      <ApplyJobModal
        visible={applyModalVisible}
        onClose={() => setApplyModalVisible(false)}
        onSubmit={() => {
          setApplyModalVisible(false);
          // Show success message or navigate
        }}
      />
    </>
  );
};
