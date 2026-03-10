import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { colors } from '../../theme/colors';
import { Button } from '../../components/Button';
import { useJobsStore } from '../../store/jobsStore';

interface ApplyJobModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export const ApplyJobModal: React.FC<ApplyJobModalProps> = ({
  visible,
  onClose,
  onSubmit,
}) => {
  const { selectedJob: job } = useJobsStore();
  const [selectedResume, setSelectedResume] = useState(
    'Rahul_Sharma_Resume_2024.pdf'
  );
  const [coverNote, setCoverNote] = useState('');

  const resumes = [
    { id: '1', name: 'Rahul_Sharma_Resume_2024.pdf', date: 'Updated 2 days ago' },
    { id: '2', name: 'Old_Resume_2023.pdf', date: 'Updated 6 months ago' },
  ];

  if (!job) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      presentationStyle="formSheet"
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{job.title}</Text>
          <Text style={styles.company}>{job.company}</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Job Summary */}
          <View style={styles.jobSummary}>
            <View style={styles.summaryBadge}>
              <Text style={styles.verifiedIcon}>✓</Text>
              <Text style={styles.verifiedText}>Verified Job</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Full-time</Text>
              <Text style={styles.summaryDot}>•</Text>
              <Text style={styles.summaryValue}>₹25L - 40L PA</Text>
            </View>
          </View>

          {/* Select Resume Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Select Resume</Text>
              <Text style={styles.required}>REQUIRED</Text>
            </View>

            {resumes.map((resume) => (
              <TouchableOpacity
                key={resume.id}
                style={[
                  styles.resumeOption,
                  selectedResume === resume.name &&
                    styles.selectedResumeOption,
                ]}
                onPress={() => setSelectedResume(resume.name)}
              >
                <View style={styles.resumeIcon}>
                  <Text style={styles.icon}>📄</Text>
                </View>
                <View style={styles.resumeInfo}>
                  <Text style={styles.resumeName}>{resume.name}</Text>
                  <Text style={styles.resumeDate}>{resume.date}</Text>
                </View>
                {selectedResume === resume.name && (
                  <View style={styles.radioButton}>
                    <View style={styles.radioInner} />
                  </View>
                )}
              </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeButtonText}>Change</Text>
            </TouchableOpacity>

            <Text style={styles.resumeHint}>
              Recruiters see your latest resume by default. Ensure it has your
              updated contact info.
            </Text>
          </View>

          {/* Contact Number */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Contact Number</Text>
              <Text style={styles.verified}>VERIFIED</Text>
            </View>

            <View style={styles.contactField}>
              <Text style={styles.countryCode}>🇮🇳 +91</Text>
              <Text style={styles.phoneNumber}>98765 43210</Text>
              <Text style={styles.checkmark}>✓</Text>
            </View>

            <Text style={styles.contactHint}>
              This number will be shared with the recruiter for scheduling
              interviews.
            </Text>
          </View>

          {/* Cover Note */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Cover Note</Text>
              <Text style={styles.optional}>OPTIONAL</Text>
            </View>

            <TextInput
              style={styles.coverNoteInput}
              placeholder="Tell the recruiter why you're a good fit..."
              placeholderTextColor={colors.gray}
              value={coverNote}
              onChangeText={setCoverNote}
              multiline
              numberOfLines={4}
            />
          </View>

          {/* Quick Apply Buttons */}
          <View style={styles.section}>
            <View style={styles.quickOptions}>
              <TouchableOpacity style={styles.quickOption}>
                <Text style={styles.quickText}>Interested in this role</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.quickOption}>
                <Text style={styles.quickText}>Immediate joiner</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.quickOption}>
                <Text style={styles.quickText}>Local resident</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Privacy Info */}
          <View style={styles.section}>
            <View style={styles.privacyCard}>
              <Text style={styles.privacyIcon}>🛡️</Text>
              <View style={styles.privacyContent}>
                <Text style={styles.privacyTitle}>Direct from BharatJobs</Text>
                <Text style={styles.privacyText}>
                  Your data is protected. We never share your full profile with
                  unverified third parties.
                </Text>
              </View>
            </View>
          </View>

          {/* Agreement */}
          <View style={styles.section}>
            <Text style={styles.agreementText}>
              By applying, you agree to share your profile with the employer.
            </Text>
          </View>
        </ScrollView>

        {/* Apply Button */}
        <View style={styles.footer}>
          <Button
            title="Apply with One-Tap"
            onPress={onSubmit}
            variant="primary"
            fullWidth
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButton: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.dark,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.dark,
    flex: 1,
  },
  company: {
    fontSize: 12,
    color: colors.gray,
  },
  jobSummary: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.backgroundSecondary,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  summaryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  verifiedIcon: {
    color: colors.success,
    fontWeight: '700',
    marginRight: 6,
  },
  verifiedText: {
    fontSize: 12,
    color: colors.success,
    fontWeight: '600',
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 12,
    color: colors.gray,
  },
  summaryDot: {
    marginHorizontal: 8,
    color: colors.gray,
  },
  summaryValue: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.dark,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.dark,
  },
  required: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.error,
    letterSpacing: 0.5,
  },
  verified: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.success,
    letterSpacing: 0.5,
  },
  optional: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.gray,
    letterSpacing: 0.5,
  },
  resumeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedResumeOption: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },
  resumeIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.backgroundSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 20,
  },
  resumeInfo: {
    flex: 1,
  },
  resumeName: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 2,
  },
  resumeDate: {
    fontSize: 11,
    color: colors.gray,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  changeButton: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  changeButtonText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
  resumeHint: {
    fontSize: 11,
    color: colors.gray,
    marginTop: 8,
    lineHeight: 16,
  },
  contactField: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    marginBottom: 8,
  },
  countryCode: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.dark,
    marginRight: 8,
  },
  phoneNumber: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.dark,
    flex: 1,
  },
  checkmark: {
    color: colors.success,
    fontWeight: '700',
  },
  contactHint: {
    fontSize: 11,
    color: colors.gray,
    lineHeight: 16,
  },
  coverNoteInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 13,
    color: colors.dark,
    textAlignVertical: 'top',
  },
  quickOptions: {
    gap: 8,
  },
  quickOption: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 6,
    backgroundColor: colors.white,
  },
  quickText: {
    fontSize: 12,
    color: colors.dark,
  },
  privacyCard: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: colors.primaryLight,
    borderRadius: 8,
    alignItems: 'flex-start',
  },
  privacyIcon: {
    fontSize: 20,
    marginRight: 12,
    marginTop: 2,
  },
  privacyContent: {
    flex: 1,
  },
  privacyTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 2,
  },
  privacyText: {
    fontSize: 11,
    color: colors.gray,
    lineHeight: 16,
  },
  agreementText: {
    fontSize: 11,
    color: colors.gray,
    textAlign: 'center',
    lineHeight: 16,
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});
