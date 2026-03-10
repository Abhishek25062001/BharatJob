import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { colors } from '../../theme/colors';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { JobCard } from '../../components/JobCard';
import { useJobsStore } from '../../store/jobsStore';
import { mockJobs } from '../../mockData';

export const SearchScreen = ({ navigation }: any) => {
  const { setJobs, jobs } = useJobsStore();
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    salaryMin: 15,
    salaryMax: 80,
    category: 'IT & Software',
    experience: '1-3 Years',
    radius: 15,
    shift: 'Day Shift',
    jobType: ['Full-time', 'Contract'],
  });

  React.useEffect(() => {
    setJobs(mockJobs);
  }, []);

  const handleApplyFilters = () => {
    setShowFilters(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Search Jobs"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />

      {!showFilters ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Search Bar */}
          <View style={styles.searchSection}>
            <Text style={styles.label}>Search job title, skills, or company</Text>
            <View style={styles.searchBar}>
              <Text style={styles.searchIcon}>🔍</Text>
              <Text style={styles.searchPlaceholder}>
                Search job title, skills, or company
              </Text>
            </View>

            <Text style={[styles.label, { marginTop: 12 }]}>
              City or locality
            </Text>
            <View style={styles.searchBar}>
              <Text style={styles.searchIcon}>📍</Text>
              <Text style={styles.searchPlaceholder}>City or locality</Text>
            </View>

            {/* Active Filters */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.filterChip}>
                <Text>Delivery Boy</Text>
                <Text style={styles.removeChip}> ×</Text>
              </View>
              <View style={styles.filterChip}>
                <Text>₹15,000+</Text>
                <Text style={styles.removeChip}> ×</Text>
              </View>
              <View style={styles.filterChip}>
                <Text>Night Shift</Text>
                <Text style={styles.removeChip}> ×</Text>
              </View>
              <View style={styles.filterChip}>
                <Text>Full Time</Text>
                <Text style={styles.removeChip}> ×</Text>
              </View>
            </ScrollView>

            <View style={styles.filterButtonContainer}>
              <TouchableOpacity
                style={styles.filterButton}
                onPress={() => setShowFilters(true)}
              >
                <Text style={styles.filterIcon}>⚙️</Text>
                <Text style={styles.filterButtonText}>Filter</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sortButton}>
                <Text style={styles.sortIcon}>↕️</Text>
                <Text style={styles.sortButtonText}>Sort By: Relevant</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Results */}
          <View style={styles.resultsSection}>
            <Text style={styles.resultsTitle}>1,248 Jobs Found</Text>
            <Text style={styles.resultsSubtitle}>MATCHING YOUR PREFERENCES</Text>

            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onPress={() => {}}
              />
            ))}
          </View>
        </ScrollView>
      ) : (
        <ScrollView style={styles.filterPanel}>
          {/* Salary Range */}
          <View style={styles.filterSection}>
            <View style={styles.filterHeader}>
              <Text style={styles.filterTitle}>MONTHLY SALARY RANGE (₹)</Text>
              <TouchableOpacity>
                <Text style={styles.resetText}>Reset</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.salaryRange}>
              <View style={styles.salaryLabel}>
                <Text style={styles.salaryText}>Starting from</Text>
                <Text style={styles.salaryValue}>₹ 20k</Text>
              </View>
              <View style={styles.slider} />
              <View style={styles.salaryLabel}>
                <Text style={styles.salaryText}>Up to</Text>
                <Text style={styles.salaryValue}>₹ 80k+</Text>
              </View>
            </View>
          </View>

          {/* Job Category */}
          <View style={styles.filterSection}>
            <Text style={styles.filterTitle}>JOB CATEGORY</Text>
            <View style={styles.categoryOptions}>
              {[
                'IT & Software',
                'Delivery',
                'Healthcare',
                'BPO & Customer Care',
                'Sales & Marketing',
                'Construction',
                'Education',
              ].map((cat, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={[
                    styles.categoryOption,
                    filters.category === cat &&
                      styles.selectedCategoryOption,
                  ]}
                  onPress={() =>
                    setFilters({ ...filters, category: cat })
                  }
                >
                  <Text
                    style={[
                      styles.categoryOptionText,
                      filters.category === cat &&
                        styles.selectedCategoryText,
                    ]}
                  >
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Experience Level */}
          <View style={styles.filterSection}>
            <Text style={styles.filterTitle}>EXPERIENCE LEVEL</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>
                {filters.experience}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Location Radius */}
          <View style={styles.filterSection}>
            <Text style={styles.filterTitle}>LOCATION RADIUS</Text>
            <View style={styles.radiusOptions}>
              {[5, 10, 15, 25, 'Anywhere'].map((radius, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={[
                    styles.radiusOption,
                    filters.radius === radius &&
                      styles.selectedRadiusOption,
                  ]}
                  onPress={() =>
                    setFilters({
                      ...filters,
                      radius: typeof radius === 'number' ? radius : parseInt(radius.toString()) || 0,
                    })
                  }
                >
                  <Text
                    style={[
                      styles.radiusText,
                      filters.radius === radius &&
                        styles.selectedRadiusText,
                    ]}
                  >
                    {radius}km
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Preferred Shift */}
          <View style={styles.filterSection}>
            <Text style={styles.filterTitle}>PREFERRED SHIFT</Text>
            <View style={styles.shiftOptions}>
              {['Day Shift', 'Night Shift'].map((shift, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={[
                    styles.shiftOption,
                    filters.shift === shift && styles.selectedShiftOption,
                  ]}
                  onPress={() =>
                    setFilters({ ...filters, shift })
                  }
                >
                  <Text
                    style={[
                      styles.shiftText,
                      filters.shift === shift &&
                        styles.selectedShiftText,
                    ]}
                  >
                    {shift === 'Day Shift' ? '☀️ Day Shift' : '🌙 Night Shift'}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Job Type */}
          <View style={styles.filterSection}>
            <Text style={styles.filterTitle}>JOB TYPE</Text>
            {['Full-time', 'Part-time', 'Contract', 'Work from home'].map(
              (type, idx) => (
                <View key={idx} style={styles.checkboxRow}>
                  <TouchableOpacity style={styles.checkbox}>
                    {filters.jobType.includes(type) && (
                      <Text style={styles.checkmark}>✓</Text>
                    )}
                  </TouchableOpacity>
                  <Text style={styles.checkboxLabel}>{type}</Text>
                </View>
              )
            )}
          </View>

          {/* Action Buttons */}
          <View style={styles.filterActions}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setShowFilters(false)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <Button
              title="Apply 1,248 Jobs"
              onPress={handleApplyFilters}
              variant="primary"
              fullWidth
              style={{ flex: 1, marginLeft: 8 }}
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
  },
  searchSection: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.gray,
    marginBottom: 6,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 12,
    backgroundColor: colors.backgroundSecondary,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchPlaceholder: {
    fontSize: 13,
    color: colors.gray,
  },
  filterChip: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  removeChip: {
    color: colors.primary,
    fontWeight: '700',
    marginLeft: 4,
  },
  filterButtonContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  filterButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  filterButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.dark,
  },
  sortButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sortIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  sortButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.dark,
  },
  resultsSection: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  resultsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 4,
  },
  resultsSubtitle: {
    fontSize: 11,
    color: colors.gray,
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  filterPanel: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  filterSection: {
    marginBottom: 24,
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  filterTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.gray,
    letterSpacing: 0.5,
  },
  resetText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
  salaryRange: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  salaryLabel: {
    alignItems: 'center',
  },
  salaryText: {
    fontSize: 11,
    color: colors.gray,
    marginBottom: 2,
  },
  salaryValue: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.dark,
  },
  slider: {
    flex: 1,
    height: 4,
    backgroundColor: colors.border,
    marginHorizontal: 12,
    borderRadius: 2,
  },
  categoryOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryOption: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  selectedCategoryOption: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryOptionText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.dark,
  },
  selectedCategoryText: {
    color: colors.white,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  dropdownText: {
    fontSize: 14,
    color: colors.dark,
  },
  radiusOptions: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  radiusOption: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  selectedRadiusOption: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  radiusText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.dark,
  },
  selectedRadiusText: {
    color: colors.white,
  },
  shiftOptions: {
    flexDirection: 'row',
    gap: 8,
  },
  shiftOption: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
  },
  selectedShiftOption: {
    backgroundColor: colors.white,
    borderColor: colors.border,
  },
  shiftText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  selectedShiftText: {
    color: colors.dark,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 12,
  },
  checkboxLabel: {
    fontSize: 14,
    color: colors.dark,
  },
  filterActions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 20,
    marginBottom: 20,
  },
  cancelButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
  },
  cancelText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.dark,
  },
});

export default SearchScreen;
