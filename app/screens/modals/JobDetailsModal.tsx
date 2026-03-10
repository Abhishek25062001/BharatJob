import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Image,
  FlatList,
} from 'react-native';
import { colors } from '../../theme/colors';
import { Button } from '../../components/Button';
import { useJobsStore } from '../../store/jobsStore';

interface JobDetailsModalProps {
  visible: boolean;
  onClose: () => void;
  onApply: () => void;
}

export const JobDetailsModal: React.FC<JobDetailsModalProps> = ({
  visible,
  onClose,
  onApply,
}) => {
  const { selectedJob: job } = useJobsStore();
  const [isSaved, setIsSaved] = useState(false);

  if (!job) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      presentationStyle="pageSheet"
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} hitSlop={{ top: 10, bottom: 10 }}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>
          <View style={styles.headerActions}>
            <TouchableOpacity hitSlop={{ top: 10, bottom: 10 }}>
              <Text style={styles.headerIcon}>❤️</Text>
            </TouchableOpacity>
            <TouchableOpacity hitSlop={{ top: 10, bottom: 10 }}>
              <Text style={styles.headerIcon}>↗️</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Company Logo */}
          <View style={styles.logoSection}>
            <View style={styles.logoCircle}>
              <Image
                source={{
                  uri: 'https://via.placeholder.com/100?text=' + job.company,
                }}
                style={styles.logo}
              />
            </View>
          </View>

          {/* Job Title & Company */}
          <View style={styles.titleSection}>
            <Text style={styles.jobTitle}>{job.title}</Text>
            <View style={styles.companyRow}>
              <Text style={styles.company}>{job.company}</Text>
              {job.isVerified && (
                <Text style={styles.verifiedBadge}>✓ Verified</Text>
              )}
            </View>
            <View style={styles.locationRow}>
              <Text style={styles.locationIcon}>📍</Text>
              <Text style={styles.location}>{job.location}</Text>
            </View>
          </View>

          {/* Key Info */}
          <View style={styles.infoGrid}>
            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Salary</Text>
              <Text style={styles.infoValue}>
                ₹{job.salary.min}k - ₹{job.salary.max}k
              </Text>
              <Text style={styles.infoUnit}>{job.salary.currency}</Text>
            </View>

            <View style={styles.infoDivider} />

            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Experience</Text>
              <Text style={styles.infoValue}>{job.experienceLevel}</Text>
            </View>

            <View style={styles.infoDivider} />

            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Type</Text>
              <Text style={styles.infoValue}>{job.jobType}</Text>
            </View>
          </View>

          {/* Key Requirements */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Requirements</Text>
            {job.requirements.map((req, index) => (
              <View key={index} style={styles.requirementItem}>
                <View style={styles.bullet} />
                <Text style={styles.requirementText}>{req}</Text>
              </View>
            ))}
          </View>

          {/* Benefits & Perks */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Benefits & Perks</Text>
            <View style={styles.benefitsGrid}>
              {['Free Meals', 'Health Insurance', 'Growth Bonus', 'Upskilling'].map(
                (benefit, index) => (
                  <View key={index} style={styles.benefitTag}>
                    <Text style={styles.benefitIcon}>
                      {benefit === 'Free Meals'
                        ? '🍽️'
                        : benefit === 'Health Insurance'
                        ? '🏥'
                        : benefit === 'Growth Bonus'
                        ? '📈'
                        : '📚'}
                    </Text>
                    <Text style={styles.benefitText}>{benefit}</Text>
                  </View>
                )
              )}
            </View>
          </View>

          {/* Workplace Images */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Workplace</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.imagesScroll}
            >
              <Image
                source={{
                  uri: 'https://via.placeholder.com/200x120?text=Office',
                }}
                style={styles.workplaceImage}
              />
              <Image
                source={{
                  uri: 'https://via.placeholder.com/200x120?text=Team',
                }}
                style={styles.workplaceImage}
              />
            </ScrollView>
          </View>

          {/* Location Map */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Location</Text>
            <View style={styles.mapContainer}>
              <View style={styles.mapPlaceholder}>
                <Text style={styles.mapIcon}>🗺️</Text>
              </View>
              <View style={styles.locationInfo}>
                <Text style={styles.locationName}>{job.location}</Text>
                <Text style={styles.locationDistance}>
                  {job.distance} km from Rapid Metro
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.viewMapButton}>
              <Text style={styles.viewMapText}>View Maps</Text>
            </TouchableOpacity>
          </View>

          {/* Contact Recruiter */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact Recruiter</Text>
            <View style={styles.recruiterCard}>
              <View style={styles.recruiterInfo}>
                <Image
                  source={{
                    uri: 'https://via.placeholder.com/60',
                  }}
                  style={styles.recruiterImage}
                />
                <View style={styles.recruiterDetails}>
                  <Text style={styles.recruiterName}>Priya Sharma</Text>
                  <Text style={styles.recruiterRole}>
                    Talent Acquisition Head
                  </Text>
                  <Text style={styles.responseRate}>98% Response Rate</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Job Posted Info */}
          <View style={styles.section}>
            <Text style={styles.jobPostedInfo}>
              JOB POSTED: 12 JULY 2024 · ID: BJ-88291
            </Text>
          </View>
        </ScrollView>

        {/* Apply Button */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => setIsSaved(!isSaved)}
          >
            <Text style={styles.saveIcon}>{isSaved ? '❤️' : '🤍'}</Text>
          </TouchableOpacity>
          <Button
            title="Apply Now"
            onPress={onApply}
            variant="primary"
            fullWidth
            style={{ flex: 1, marginLeft: 8 }}
          />
        </View>
      </SafeAreaView>
    </Modal>
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
  backButton: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.dark,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 16,
  },
  headerIcon: {
    fontSize: 20,
  },
  logoSection: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: colors.backgroundSecondary,
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.border,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  titleSection: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center',
  },
  jobTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.dark,
    textAlign: 'center',
    marginBottom: 8,
  },
  companyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 12,
  },
  company: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.dark,
  },
  verifiedBadge: {
    fontSize: 12,
    color: colors.success,
    fontWeight: '600',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  location: {
    fontSize: 13,
    color: colors.gray,
  },
  infoGrid: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.backgroundSecondary,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  infoCard: {
    flex: 1,
    alignItems: 'center',
  },
  infoDivider: {
    width: 1,
    height: 40,
    backgroundColor: colors.border,
    marginHorizontal: 12,
  },
  infoLabel: {
    fontSize: 11,
    color: colors.gray,
    marginBottom: 4,
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.dark,
  },
  infoUnit: {
    fontSize: 10,
    color: colors.gray,
    marginTop: 2,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 12,
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
    marginRight: 12,
    marginTop: 6,
  },
  requirementText: {
    fontSize: 13,
    color: colors.dark,
    flex: 1,
    lineHeight: 20,
  },
  benefitsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  benefitTag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 6,
    marginBottom: 8,
  },
  benefitIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  benefitText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.dark,
  },
  imagesScroll: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  workplaceImage: {
    width: 200,
    height: 120,
    borderRadius: 8,
    marginRight: 8,
  },
  mapContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 8,
  },
  mapPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapIcon: {
    fontSize: 32,
  },
  locationInfo: {
    flex: 1,
  },
  locationName: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 2,
  },
  locationDistance: {
    fontSize: 12,
    color: colors.gray,
  },
  viewMapButton: {
    paddingVertical: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  viewMapText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
  recruiterCard: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 8,
  },
  recruiterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recruiterImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  recruiterDetails: {
    flex: 1,
  },
  recruiterName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 2,
  },
  recruiterRole: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 2,
  },
  responseRate: {
    fontSize: 11,
    color: colors.primary,
    fontWeight: '600',
  },
  jobPostedInfo: {
    fontSize: 11,
    color: colors.gray,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  saveButton: {
    width: 44,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveIcon: {
    fontSize: 20,
  },
});
