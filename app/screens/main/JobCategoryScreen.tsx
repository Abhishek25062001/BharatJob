import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../theme/colors';
import { Header } from '../../components/Header';
import { JobCard } from '../../components/JobCard';
import { mockJobs } from '../../mockData';

interface Category {
  name: string;
  icon: string;
  jobs: number;
  color: string;
}

const categories: Category[] = [
  { name: 'Delivery', icon: '🚴', jobs: 245, color: '#FF6B35' },
  { name: 'IT & Software', icon: '💻', jobs: 512, color: '#004E89' },
  { name: 'Sales', icon: '📊', jobs: 389, color: '#1982C4' },
  { name: 'Healthcare', icon: '🏥', jobs: 156, color: '#8AC926' },
  { name: 'Construction', icon: '🏗️', jobs: 203, color: '#D62828' },
  { name: 'BPO/Support', icon: '☎️', jobs: 478, color: '#F77F00' },
  { name: 'Education', icon: '📚', jobs: 89, color: '#06A77D' },
  { name: 'Office Admin', icon: '🏢', jobs: 234, color: '#FF1053' },
];

const JobCategoryScreen = ({ route, navigation }: any) => {
  const { category: selectedCategoryName } = route.params || {
    category: 'Delivery',
  };
  const [selectedCategory, setSelectedCategory] = useState(selectedCategoryName);

  const categoryJobs = mockJobs.slice(0, 3);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Jobs by Category"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />

      {/* Categories Grid */}
      <View style={styles.categoriesSection}>
        <FlatList
          data={categories}
          numColumns={4}
          scrollEnabled={false}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.categoryItem,
                selectedCategory === item.name && styles.selectedCategoryItem,
              ]}
              onPress={() => setSelectedCategory(item.name)}
            >
              <Text style={styles.categoryIcon}>{item.icon}</Text>
              <Text style={styles.categoryName} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.categoryCount}>{item.jobs}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.categoriesContainer}
        />
      </View>

      {/* Jobs List */}
      <View style={styles.jobsSection}>
        <Text style={styles.resultsTitle}>
          Showing {categoryJobs.length} jobs in {selectedCategory}
        </Text>

        <FlatList
          data={categoryJobs}
          renderItem={({ item }) => (
            <JobCard job={item} onPress={() => {}} />
          )}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.jobsList}
        />

        <TouchableOpacity style={styles.viewMoreButton}>
          <Text style={styles.viewMoreText}>View All {categoryJobs.length}+ Jobs</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
  },
  categoriesSection: {
    backgroundColor: colors.white,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  categoryItem: {
    width: '23%',
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderRadius: 12,
    backgroundColor: colors.backgroundSecondary,
    alignItems: 'center',
  },
  selectedCategoryItem: {
    backgroundColor: colors.primary,
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  categoryName: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.dark,
    textAlign: 'center',
    marginBottom: 2,
  },
  categoryCount: {
    fontSize: 9,
    color: colors.gray,
  },
  jobsSection: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  resultsTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.gray,
    marginBottom: 12,
  },
  jobsList: {
    paddingVertical: 8,
  },
  viewMoreButton: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  viewMoreText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
});

export default JobCategoryScreen;
