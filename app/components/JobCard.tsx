import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Job } from '../types';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

interface JobCardProps {
  job: Job;
  onPress: (job: Job) => void;
  onSave?: (job: Job) => void;
  isSaved?: boolean;
}

export const JobCard: React.FC<JobCardProps> = ({
  job,
  onPress,
  onSave,
  isSaved = false,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(job)}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={styles.companyInfo}>
          {job.companyLogo && (
            <Image
              source={{ uri: job.companyLogo }}
              style={styles.logo}
            />
          )}
          <View style={styles.titleSection}>
            <Text style={styles.jobTitle} numberOfLines={1}>
              {job.title}
            </Text>
            <Text style={styles.company} numberOfLines={1}>
              {job.company}
            </Text>
          </View>
        </View>
        {onSave && (
          <TouchableOpacity onPress={() => onSave(job)}>
            <Text style={styles.saveIcon}>
              {isSaved ? '❤️' : '🤍'}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.body}>
        <View style={styles.locationSection}>
          <Text style={styles.locationIcon}>📍</Text>
          <Text style={styles.location} numberOfLines={1}>
            {job.location}
            {job.distance && ` (${job.distance} km)`}
          </Text>
        </View>

        <View style={styles.detailsRow}>
          <View style={styles.detail}>
            <Text style={styles.detailLabel}>Experience</Text>
            <Text style={styles.detailValue}>{job.experienceLevel}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailLabel}>Type</Text>
            <Text style={styles.detailValue}>{job.jobType}</Text>
          </View>
        </View>

        {job.shift && (
          <Text style={styles.shift}>{job.shift}</Text>
        )}
      </View>

      <View style={styles.footer}>
        <View>
          <Text style={styles.salaryLabel}>Salary</Text>
          <Text style={styles.salary}>
            ₹{job.salary.min}k - ₹{job.salary.max}k/{job.salary.currency}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.quickApplyButton}
          onPress={() => onPress(job)}
        >
          <Text style={styles.quickApplyText}>Quick Apply</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  companyInfo: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
  },
  titleSection: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 2,
  },
  company: {
    fontSize: 13,
    color: colors.gray,
  },
  saveIcon: {
    fontSize: 20,
  },
  body: {
    marginBottom: 12,
  },
  locationSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  location: {
    fontSize: 13,
    color: colors.gray,
    flex: 1,
  },
  detailsRow: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  detail: {
    marginRight: 20,
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
  shift: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  salaryLabel: {
    fontSize: 11,
    color: colors.gray,
    marginBottom: 2,
  },
  salary: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.dark,
  },
  quickApplyButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  quickApplyText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 12,
  },
});
