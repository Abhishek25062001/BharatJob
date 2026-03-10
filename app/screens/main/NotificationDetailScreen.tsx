import React from 'react';
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
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

const NotificationDetailScreen = ({ route, navigation }: any) => {
  const { notification } = route.params || {
    notification: {
      type: 'interview',
      title: 'Interview Scheduled',
      subtitle: 'Tech Mahindra has scheduled your Technical Interview',
      content:
        'Your technical interview for the Senior Frontend Developer position at Tech Mahindra has been scheduled.',
      details: {
        date: 'Oct 24, 2023',
        time: '10:30 AM',
        recruiter: 'Priya Sharma',
        company: 'Tech Mahindra',
        type: 'Video Call',
      },
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Notification Details"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Icon */}
        <View style={styles.iconContainer}>
          <Text style={styles.notificationIcon}>
            {notification.type === 'interview'
              ? '📅'
              : notification.type === 'job'
              ? '💼'
              : notification.type === 'message'
              ? '💬'
              : '✓'}
          </Text>
        </View>

        {/* Title & Subtitle */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>{notification.title}</Text>
          <Text style={styles.subtitle}>{notification.subtitle}</Text>
        </View>

        {/* Content */}
        <View style={styles.contentSection}>
          <Text style={styles.contentText}>{notification.content}</Text>
        </View>

        {/* Details */}
        {notification.details && (
          <View style={styles.detailsSection}>
            <Text style={styles.detailsTitle}>Interview Details</Text>

            <View style={styles.detailRow}>
              <Text style={styles.detailIcon}>📅</Text>
              <View>
                <Text style={styles.detailLabel}>Date</Text>
                <Text style={styles.detailValue}>
                  {notification.details.date}
                </Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailIcon}>🕐</Text>
              <View>
                <Text style={styles.detailLabel}>Time</Text>
                <Text style={styles.detailValue}>
                  {notification.details.time}
                </Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailIcon}>💻</Text>
              <View>
                <Text style={styles.detailLabel}>Interview Type</Text>
                <Text style={styles.detailValue}>{notification.details.type}</Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailIcon}>🏢</Text>
              <View>
                <Text style={styles.detailLabel}>Company</Text>
                <Text style={styles.detailValue}>
                  {notification.details.company}
                </Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <Image
                source={{
                  uri: 'https://via.placeholder.com/40',
                }}
                style={styles.recruiterImage}
              />
              <View>
                <Text style={styles.detailLabel}>Recruiter</Text>
                <Text style={styles.detailValue}>
                  {notification.details.recruiter}
                </Text>
              </View>
            </View>
          </View>
        )}

        {/* Action Buttons */}
        <View style={styles.actionsSection}>
          <Button
            title="Prepare Now"
            onPress={() => {}}
            variant="primary"
            fullWidth
            style={styles.actionButton}
          />
          <Button
            title="View Job Details"
            onPress={() => {}}
            variant="outline"
            fullWidth
          />
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
  iconContainer: {
    paddingVertical: 32,
    alignItems: 'center',
  },
  notificationIcon: {
    fontSize: 64,
  },
  titleSection: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.dark,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray,
    textAlign: 'center',
    lineHeight: 20,
  },
  contentSection: {
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 8,
    marginBottom: 20,
  },
  contentText: {
    fontSize: 13,
    color: colors.dark,
    lineHeight: 20,
  },
  detailsSection: {
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 20,
  },
  detailsTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  detailIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  recruiterImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  detailLabel: {
    fontSize: 11,
    color: colors.gray,
    marginBottom: 2,
  },
  detailValue: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.dark,
  },
  actionsSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 8,
  },
  actionButton: {
    marginBottom: 8,
  },
});

export default NotificationDetailScreen;
