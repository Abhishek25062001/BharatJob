import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../theme/colors';
import { Header } from '../../components/Header';
import { JobCard } from '../../components/JobCard';
import { mockJobs } from '../../mockData';

const SavedJobsScreen = ({ navigation }: any) => {
  const [savedJobs] = useState(mockJobs.slice(0, 3));
  const [sortBy, setSortBy] = useState<'Latest First' | 'Relevance'>(
    'Latest First'
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Saved Jobs"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />

      {/* Select All & Sort */}
      <View style={styles.controlsSection}>
        <TouchableOpacity style={styles.selectAllButton}>
          <Text style={styles.checkbox}>☐</Text>
          <Text style={styles.selectAllText}>Select All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton}>
          <Text style={styles.sortIcon}>⬆️⬇️</Text>
          <Text style={styles.sortText}>Latest First</Text>
        </TouchableOpacity>
      </View>

      {savedJobs.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.jobsContainer}>
            <Text style={styles.countText}>SHOWING {savedJobs.length} SAVED ITEMS</Text>

            {savedJobs.map((job) => (
              <View key={job.id} style={styles.jobItemContainer}>
                <TouchableOpacity style={styles.checkbox}>
                  <Text>☐</Text>
                </TouchableOpacity>
                <View style={styles.jobContent}>
                  <JobCard
                    job={job}
                    onPress={() => {}}
                  />
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>❤️</Text>
          <Text style={styles.emptyTitle}>No Saved Jobs</Text>
          <Text style={styles.emptyText}>
            Bookmark jobs you're interested in to find them here later
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
  },
  controlsSection: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    gap: 8,
  },
  selectAllButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 6,
  },
  checkbox: {
    fontSize: 16,
    marginRight: 6,
  },
  selectAllText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.dark,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 6,
    gap: 4,
  },
  sortIcon: {
    fontSize: 14,
  },
  sortText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.dark,
  },
  jobsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  countText: {
    fontSize: 11,
    color: colors.gray,
    letterSpacing: 0.5,
    marginBottom: 12,
    fontWeight: '600',
  },
  jobItemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  jobContent: {
    flex: 1,
    marginLeft: 12,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emptyIcon: {
    fontSize: 60,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 13,
    color: colors.gray,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default SavedJobsScreen;
