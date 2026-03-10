import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { colors } from '../../theme/colors';
import { Button } from '../../components/Button';
import { JobCard } from '../../components/JobCard';
import { useAuthStore } from '../../store/authStore';
import { useJobsStore } from '../../store/jobsStore';
import { mockJobs } from '../../mockData';

export const HomeScreen = ({ navigation }: any) => {
  const { user } = useAuthStore();
  const { setJobs, jobs, setSelectedJob } = useJobsStore();

  useEffect(() => {
    setJobs(mockJobs);
  }, []);

  const handleJobPress = (job: any) => {
    setSelectedJob(job);
    navigation.navigate('Search');
  };

  const categories = [
    { name: 'Delivery Boy', icon: '🚴', color: '#FF6B35' },
    { name: 'Work from home', icon: '💻', color: '#004E89' },
    { name: 'Driver', icon: '🚗', color: '#1982C4' },
    { name: 'Sales', icon: '📊', color: '#8AC926' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Namaste, Rahul! 👋</Text>
            <Text style={styles.title}>Find your dream job today</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.notificationIcon}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search by job title or company..."
              placeholderTextColor={colors.gray}
            />
          </View>
          <TouchableOpacity style={styles.findButton}>
            <Text style={styles.findButtonText}>Find</Text>
          </TouchableOpacity>
        </View>

        {/* Category Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
        >
          {categories.map((cat, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.categoryChip, { backgroundColor: cat.color }]}
            >
              <Text style={styles.categoryIcon}>{cat.icon}</Text>
              <Text style={styles.categoryName}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Verify Profile Banner */}
        <View style={styles.verifyBanner}>
          <View style={styles.verifyContent}>
            <Text style={styles.verifyIcon}>🛡️</Text>
            <View style={styles.verifyText}>
              <Text style={styles.verifyTitle}>Verify your profile</Text>
              <Text style={styles.verifySubtitle}>
                Verified profiles get 3x more recruiter calls.
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.verifyButton}>Verify</Text>
          </TouchableOpacity>
        </View>

        {/* Recommended Jobs */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommended for You</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllLink}>See All &gt;</Text>
            </TouchableOpacity>
          </View>

          {jobs.slice(0, 2).map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onPress={handleJobPress}
            />
          ))}
        </View>

        {/* Top Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Categories</Text>
          <View style={styles.categoriesGrid}>
            {[
              { name: 'Delivery', icon: '🚴', color: '#FF6B35' },
              { name: 'IT & Software', icon: '💻', color: '#004E89' },
              { name: 'Office Admin', icon: '🏢', color: '#1982C4' },
              { name: 'BPO/Support', icon: '☎️', color: '#FF1053' },
            ].map((cat, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.categoryBox}
                onPress={() => navigation.navigate('JobCategory', { category: cat.name })}
              >
                <Text style={styles.categoryBoxIcon}>{cat.icon}</Text>
                <Text style={styles.categoryBoxName}>{cat.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Jobs Near You */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Jobs Near You</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllLink}>View Map &gt;</Text>
            </TouchableOpacity>
          </View>

          {jobs.slice(0, 2).map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onPress={handleJobPress}
            />
          ))}

          <TouchableOpacity style={styles.showMoreButton}>
            <Text style={styles.showMoreText}>Show more nearby jobs</Text>
          </TouchableOpacity>
        </View>

        {/* Post Resume Banner */}
        <View style={styles.resumeBanner}>
          <View>
            <Text style={styles.resumeLabel}>Exclusive</Text>
            <Text style={styles.resumeTitle}>Post your Resume for Free</Text>
            <Text style={styles.resumeSubtitle}>
              Let companies find you. Quick 2-minute setup
            </Text>
          </View>
          <TouchableOpacity style={styles.resumeButton}>
            <Text style={styles.resumeButtonText}>Get Started</Text>
          </TouchableOpacity>
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
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  greeting: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.dark,
  },
  notificationIcon: {
    fontSize: 20,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    gap: 8,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: colors.backgroundSecondary,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: colors.dark,
    paddingVertical: 10,
  },
  findButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  findButtonText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 12,
  },
  categoriesScroll: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  categoryName: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 12,
  },
  verifyBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 12,
    marginHorizontal: 16,
    backgroundColor: colors.primaryLight,
    borderRadius: 12,
  },
  verifyContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifyIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  verifyText: {
    flex: 1,
  },
  verifyTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 2,
  },
  verifySubtitle: {
    fontSize: 12,
    color: colors.primary,
  },
  verifyButton: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 12,
  },
  section: {
    marginTop: 16,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.dark,
  },
  seeAllLink: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryBox: {
    width: '23%',
    aspectRatio: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  categoryBoxIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryBoxName: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.white,
    textAlign: 'center',
  },
  showMoreButton: {
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  showMoreText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
  resumeBanner: {
    marginHorizontal: 16,
    marginVertical: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: colors.primary,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resumeLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.white,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  resumeTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 4,
  },
  resumeSubtitle: {
    fontSize: 12,
    color: colors.white,
  },
  resumeButton: {
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  resumeButtonText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 12,
  },
});

export default HomeScreen;
