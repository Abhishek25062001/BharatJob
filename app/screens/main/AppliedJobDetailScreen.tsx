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
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

const statusSteps = [
  { label: 'Submitted', icon: '📤', completed: true },
  { label: 'Viewed', icon: '👁️', completed: true },
  { label: 'Shortlisted', icon: '✓', completed: false },
  { label: 'Interview', icon: '💬', completed: false },
];

const AppliedJobDetailScreen = ({ navigation }: any) => {
  const [application] = useState({
    jobTitle: 'Senior Frontend Developer',
    company: 'TechFlow Solutions',
    status: 'shortlisted',
    appliedDate: 'Oct 12, 2023',
    salary: { min: 18, max: 24, currency: '/mo' },
    location: 'Bangalore, Karnataka',
    experience: '1-2 Years',
    jobType: 'Full-time',
    recruiter: {
      name: 'Ananya Sharma',
      role: 'Technical Recruiter',
      image: 'https://via.placeholder.com/60',
    },
    timeline: [
      {
        date: 'Oct 12, 2023',
        time: '10:30 AM',
        action: 'Application Submitted',
        icon: '📤',
      },
      {
        date: 'Oct 13, 2023',
        time: '02:45 PM',
        action: 'Application Viewed by Recruiter',
        icon: '👁️',
      },
      {
        date: 'Oct 14, 2023',
        time: '11:00 AM',
        action: 'Application Shortlisted',
        icon: '✓',
      },
    ],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Application Details"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Job Header */}
        <View style={styles.jobHeader}>
          <View style={styles.jobInfo}>
            <View style={styles.logo}>
              <Text style={styles.logoIcon}>🏢</Text>
            </View>
            <View style={styles.jobDetails}>
              <Text style={styles.jobTitle}>{application.jobTitle}</Text>
              <Text style={styles.company}>{application.company}</Text>
            </View>
          </View>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>
              {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
            </Text>
          </View>
        </View>

        {/* Job Info Cards */}
        <View style={styles.infoGrid}>
          <View style={styles.infoCard}>
            <Text style={styles.infoIcon}>💰</Text>
            <Text style={styles.infoLabel}>Salary</Text>
            <Text style={styles.infoValue}>
              ₹{application.salary.min}k-{application.salary.max}k
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoIcon}>📍</Text>
            <Text style={styles.infoLabel}>Location</Text>
            <Text style={styles.infoValue} numberOfLines={2}>
              {application.location}
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoIcon}>💼</Text>
            <Text style={styles.infoLabel}>Experience</Text>
            <Text style={styles.infoValue}>{application.experience}</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoIcon}>🕐</Text>
            <Text style={styles.infoLabel}>Applied On</Text>
            <Text style={styles.infoValue}>{application.appliedDate}</Text>
          </View>
        </View>

        {/* Status Timeline */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Application Status</Text>

          <View style={styles.statusTimeline}>
            {statusSteps.map((step, idx) => (
              <View key={idx} style={styles.statusStep}>
                <View
                  style={[
                    styles.statusCircle,
                    step.completed && styles.completedCircle,
                  ]}
                >
                  <Text style={styles.stepIcon}>{step.icon}</Text>
                </View>
                <Text
                  style={[
                    styles.stepLabel,
                    step.completed && styles.completedLabel,
                  ]}
                >
                  {step.label}
                </Text>
                {idx < statusSteps.length - 1 && (
                  <View
                    style={[
                      styles.statusLine,
                      step.completed && styles.completedLine,
                    ]}
                  />
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Timeline Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Timeline</Text>

          {application.timeline.map((event, idx) => (
            <View key={idx} style={styles.timelineItem}>
              <View style={styles.timelineIcon}>
                <Text>{event.icon}</Text>
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.timelineAction}>{event.action}</Text>
                <Text style={styles.timelineDate}>
                  {event.date} at {event.time}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Recruiter Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recruiter</Text>
          <View style={styles.recruiterCard}>
            <Image
              source={{ uri: application.recruiter.image }}
              style={styles.recruiterImage}
            />
            <View style={styles.recruiterInfo}>
              <Text style={styles.recruiterName}>{application.recruiter.name}</Text>
              <Text style={styles.recruiterRole}>{application.recruiter.role}</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.messageIcon}>💬</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actionsSection}>
          <Button
            title="View Job Details"
            onPress={() => {}}
            variant="primary"
            fullWidth
            style={styles.actionButton}
          />
          <Button
            title="Contact Recruiter"
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
    backgroundColor: colors.backgroundSecondary,
  },
  jobHeader: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  jobInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: colors.backgroundSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoIcon: {
    fontSize: 24,
  },
  jobDetails: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 2,
  },
  company: {
    fontSize: 12,
    color: colors.gray,
  },
  statusBadge: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: colors.primaryLight,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primary,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  infoCard: {
    width: '48%',
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
    borderRadius: 8,
    alignItems: 'center',
  },
  infoIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  infoLabel: {
    fontSize: 10,
    color: colors.gray,
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.dark,
    textAlign: 'center',
  },
  section: {
    marginHorizontal: 16,
    marginTop: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 12,
  },
  statusTimeline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  statusStep: {
    flex: 1,
    alignItems: 'center',
  },
  statusCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.backgroundSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  completedCircle: {
    backgroundColor: colors.primaryLight,
  },
  stepIcon: {
    fontSize: 20,
  },
  stepLabel: {
    fontSize: 10,
    color: colors.gray,
    textAlign: 'center',
  },
  completedLabel: {
    color: colors.primary,
    fontWeight: '600',
  },
  statusLine: {
    position: 'absolute',
    top: 20,
    left: '50%',
    width: '100%',
    height: 2,
    backgroundColor: colors.border,
  },
  completedLine: {
    backgroundColor: colors.primary,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  timelineIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  timelineContent: {
    flex: 1,
  },
  timelineAction: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 2,
  },
  timelineDate: {
    fontSize: 11,
    color: colors.gray,
  },
  recruiterCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 8,
  },
  recruiterImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  recruiterInfo: {
    flex: 1,
  },
  recruiterName: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 2,
  },
  recruiterRole: {
    fontSize: 11,
    color: colors.gray,
  },
  messageIcon: {
    fontSize: 20,
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

export default AppliedJobDetailScreen;
