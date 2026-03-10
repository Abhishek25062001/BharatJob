import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { colors } from '../../theme/colors';
import { Button } from '../../components/Button';

interface Notification {
  id: string;
  type: 'interview' | 'message' | 'job' | 'application' | 'profile';
  title: string;
  subtitle?: string;
  time: string;
  icon: string;
  read: boolean;
  action?: string;
}

const NotificationsScreen = ({ navigation }: any) => {
  const [selectedTab, setSelectedTab] = useState<
    'All' | 'Jobs' | 'Messages' | 'Interviews'
  >('All');
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'interview',
      title: 'Interview Scheduled',
      subtitle: 'Tech Mahindra has scheduled your Technical Interview for Senior Frontend',
      time: '2 mins ago',
      icon: '👤',
      read: false,
      action: 'Prepare Now',
    },
    {
      id: '2',
      type: 'message',
      title: 'New Message from Recruiter',
      subtitle: 'Priya Sharma: "Hello Rahul, we reviewed your profile and would like to discuss the"',
      time: '45 mins ago',
      icon: '💬',
      read: false,
      action: 'Reply',
    },
    {
      id: '3',
      type: 'job',
      title: 'New Job for You',
      subtitle: 'Based on your skills in React & Tailwind, 5 new high-paying jobs were posted in',
      time: '2 hours ago',
      icon: '⭐',
      read: false,
      action: 'View Jobs',
    },
    {
      id: '4',
      type: 'application',
      title: 'Application Shortlisted!',
      subtitle: 'Congratulations! Your application for "Product Designer" at Zomato has been',
      time: 'Yesterday',
      icon: '👍',
      read: true,
      action: 'Check Status',
    },
    {
      id: '5',
      type: 'profile',
      title: 'Profile Viewed',
      subtitle: 'Reliance Industries and 3 other recruiters viewed your profile in the last 24 hours.',
      time: 'Yesterday',
      icon: '👁️',
      read: true,
    },
    {
      id: '6',
      type: 'job',
      title: 'Monthly Hiring Report',
      subtitle: 'See how your profile performed in April. 45 recruiters found you via search.',
      time: '2 days ago',
      icon: '📊',
      read: true,
    },
  ]);

  const tabs = ['All', 'Jobs', 'Messages', 'Interviews'] as const;

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity hitSlop={{ top: 10, bottom: 10 }}>
          <Text style={styles.readAllLink}>Read All</Text>
        </TouchableOpacity>
      </View>

      {/* Alert Banner */}
      <View style={styles.alertBanner}>
        <Text style={styles.alertIcon}>🔔</Text>
        <Text style={styles.alertText}>STAY ALERT!</Text>
        <Text style={styles.alertArrow}>→</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              selectedTab === tab && styles.activeTab,
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
            {tab === 'All' && unreadCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{unreadCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Notifications List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.todaySection}>
            <Text style={styles.sectionLabel}>TODAY</Text>
            <Text style={styles.unreadCount}>3 NEW</Text>
          </View>

          {notifications.slice(0, 3).map((notification) => (
            <TouchableOpacity
              key={notification.id}
              style={[
                styles.notificationCard,
                !notification.read && styles.unreadCard,
              ]}
              onPress={() => navigation.navigate('NotificationDetail', { notification })}
            >
              <View style={styles.notificationContent}>
                <View style={styles.iconContainer}>
                  <Text style={styles.notifIcon}>{notification.icon}</Text>
                </View>
                <View style={styles.textContent}>
                  <Text style={styles.notifTitle}>{notification.title}</Text>
                  {notification.subtitle && (
                    <Text
                      style={styles.notifSubtitle}
                      numberOfLines={2}
                    >
                      {notification.subtitle}
                    </Text>
                  )}
                  <Text style={styles.notifTime}>{notification.time}</Text>
                </View>
              </View>
              {notification.action && (
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>{notification.action}</Text>
                  <Text style={styles.actionArrow}>→</Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          ))}

          <View style={styles.earlierSection}>
            <Text style={styles.sectionLabel}>EARLIER</Text>
          </View>

          {notifications.slice(3).map((notification) => (
            <TouchableOpacity
              key={notification.id}
              style={styles.notificationCard}
            >
              <View style={styles.notificationContent}>
                <View style={styles.iconContainer}>
                  <Text style={styles.notifIcon}>{notification.icon}</Text>
                </View>
                <View style={styles.textContent}>
                  <Text style={styles.notifTitle}>{notification.title}</Text>
                  {notification.subtitle && (
                    <Text
                      style={styles.notifSubtitle}
                      numberOfLines={2}
                    >
                      {notification.subtitle}
                    </Text>
                  )}
                  <Text style={styles.notifTime}>{notification.time}</Text>
                </View>
              </View>
              {notification.action && (
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>{notification.action}</Text>
                  <Text style={styles.actionArrow}>→</Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Boost Visibility Card */}
        <View style={styles.boostCard}>
          <Text style={styles.boostIcon}>⭐</Text>
          <Text style={styles.boostTitle}>Boost Your Visibility</Text>
          <Text style={styles.boostText}>
            Candidates with 100% complete profiles receive 4x more interview
            invites.
          </Text>
          <TouchableOpacity style={styles.boostButton}>
            <Text style={styles.boostButtonText}>Update Profile →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.dark,
  },
  readAllLink: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
  alertBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: colors.primaryLight,
    borderRadius: 8,
  },
  alertIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  alertText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
    flex: 1,
  },
  alertArrow: {
    color: colors.primary,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginRight: 12,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  activeTab: {
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.gray,
  },
  activeTabText: {
    color: colors.primary,
  },
  badge: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '700',
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  todaySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.gray,
    letterSpacing: 0.5,
  },
  unreadCount: {
    fontSize: 11,
    color: colors.primary,
    fontWeight: '600',
  },
  notificationCard: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: colors.border,
  },
  unreadCard: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notifIcon: {
    fontSize: 20,
  },
  textContent: {
    flex: 1,
  },
  notifTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 3,
  },
  notifSubtitle: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 4,
    lineHeight: 16,
  },
  notifTime: {
    fontSize: 11,
    color: colors.gray,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: colors.primary,
    borderRadius: 4,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  actionText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.white,
    marginRight: 4,
  },
  actionArrow: {
    color: colors.white,
    fontSize: 10,
  },
  earlierSection: {
    marginVertical: 12,
  },
  boostCard: {
    marginHorizontal: 16,
    marginVertical: 20,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.primaryLight,
    borderRadius: 12,
    alignItems: 'center',
  },
  boostIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  boostTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 6,
  },
  boostText: {
    fontSize: 12,
    color: colors.dark,
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 18,
  },
  boostButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: colors.primary,
    borderRadius: 6,
  },
  boostButtonText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 12,
  },
});

export default NotificationsScreen;
