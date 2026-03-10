import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from '../../components/Header';
import { colors } from '../../theme/colors';

const AppliedJobsScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Applied Jobs"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity 
          style={styles.jobCard}
          onPress={() => navigation.navigate('AppliedJobDetail')}
        >
          <View style={styles.jobHeader}>
            <View>
              <Text style={styles.jobTitle}>Senior Frontend Developer</Text>
              <Text style={styles.companyName}>Tech Mahindra</Text>
            </View>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>In Review</Text>
            </View>
          </View>
          <Text style={styles.appliedDate}>Applied: Oct 20, 2023</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
  },
  content: {
    padding: 16,
  },
  jobCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 4,
  },
  companyName: {
    fontSize: 14,
    color: colors.gray,
  },
  statusBadge: {
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    color: '#F57C00',
    fontSize: 12,
    fontWeight: '600',
  },
  appliedDate: {
    fontSize: 12,
    color: colors.gray,
  },
});

export default AppliedJobsScreen;
