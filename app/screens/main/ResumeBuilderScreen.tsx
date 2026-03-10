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
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

interface ResumeBuilderSection {
  id: string;
  title: string;
  icon: string;
  isCompleted: boolean;
  items: number;
  maxItems: number;
}

const ResumeBuilderScreen = ({ navigation }: any) => {
  const [profileStrength] = useState(75);

  const sections: ResumeBuilderSection[] = [
    {
      id: '1',
      title: 'Personal Info',
      icon: '👤',
      isCompleted: true,
      items: 1,
      maxItems: 1,
    },
    {
      id: '2',
      title: 'Work Experience',
      icon: '💼',
      isCompleted: true,
      items: 2,
      maxItems: 3,
    },
    {
      id: '3',
      title: 'Education',
      icon: '🎓',
      isCompleted: true,
      items: 1,
      maxItems: 1,
    },
    {
      id: '4',
      title: 'Key Skills',
      icon: '⭐',
      isCompleted: true,
      items: 8,
      maxItems: 10,
    },
    {
      id: '5',
      title: 'Languages',
      icon: '🌍',
      isCompleted: false,
      items: 2,
      maxItems: 5,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Resume Builder"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Strength Card */}
        <View style={styles.strengthCard}>
          <View>
            <Text style={styles.strengthLabel}>Profile Strength</Text>
            <Text style={styles.strengthValue}>{profileStrength}%</Text>
          </View>
          <Text style={styles.strengthStatus}>Excellent</Text>
        </View>

        {/* Strength Bar */}
        <View style={styles.strengthBarContainer}>
          <View style={[styles.strengthBar, { width: `${profileStrength}%` }]} />
        </View>

        {/* Upgrade Hint */}
        <View style={styles.hintCard}>
          <Text style={styles.hintIcon}>🎓</Text>
          <View style={styles.hintContent}>
            <Text style={styles.hintTitle}>
              Add your Last Education to reach 90% and unlock the 'Featured' badge.
            </Text>
          </View>
          <Text style={styles.hintArrow}>→</Text>
        </View>

        {/* Profile Photo */}
        <View style={styles.profileSection}>
          <View style={styles.photoContainer}>
            <Image
              source={{
                uri: 'https://via.placeholder.com/100',
              }}
              style={styles.profilePhoto}
            />
            <View style={styles.verifiedBadge}>
              <Text style={styles.badgeIcon}>✓</Text>
            </View>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Rahul Sharma</Text>
            <Text style={styles.profileRole}>UI/UX Designer · New Delhi</Text>
            <Text style={styles.profilePhone}>+91 98765 43210</Text>
          </View>
          <TouchableOpacity style={styles.editIcon}>
            <Text>✏️</Text>
          </TouchableOpacity>
        </View>

        {/* Sections */}
        {sections.map((section) => (
          <TouchableOpacity
            key={section.id}
            style={[
              styles.sectionCard,
              section.isCompleted && styles.completedSection,
            ]}
          >
            <View style={styles.sectionLeft}>
              <Text style={styles.sectionIcon}>{section.icon}</Text>
              <View style={styles.sectionInfo}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
                <Text style={styles.sectionItems}>
                  {section.items} of {section.maxItems}
                </Text>
              </View>
            </View>
            <View style={styles.sectionRight}>
              {section.isCompleted && (
                <View style={styles.completedBadge}>
                  <Text style={styles.completedIcon}>✓</Text>
                </View>
              )}
              <Text style={styles.arrow}>→</Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* Ready to Apply */}
        <View style={styles.readyCard}>
          <Text style={styles.readyIcon}>📄</Text>
          <Text style={styles.readyTitle}>Ready to Apply?</Text>
          <Text style={styles.readyText}>
            Your profile with all details allows you to apply in seconds and impress
            recruiters faster.
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.previewButton}>
            <Text style={styles.previewIcon}>👁️</Text>
            <Text style={styles.previewText}>Preview</Text>
          </TouchableOpacity>
          <Button
            title="Save & Finish"
            onPress={() => {}}
            variant="primary"
            fullWidth
            style={{ flex: 1, marginLeft: 12 }}
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
  strengthCard: {
    marginHorizontal: 16,
    marginTop: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.primaryLight,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  strengthLabel: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: 4,
  },
  strengthValue: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
  },
  strengthStatus: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  strengthBarContainer: {
    height: 6,
    backgroundColor: colors.border,
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 12,
    borderRadius: 3,
    overflow: 'hidden',
  },
  strengthBar: {
    height: '100%',
    backgroundColor: colors.primary,
  },
  hintCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: colors.primaryLight,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hintIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  hintContent: {
    flex: 1,
  },
  hintTitle: {
    fontSize: 12,
    color: colors.dark,
    fontWeight: '600',
    lineHeight: 18,
  },
  hintArrow: {
    fontSize: 16,
    color: colors.primary,
    marginLeft: 8,
  },
  profileSection: {
    marginHorizontal: 16,
    marginBottom: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoContainer: {
    position: 'relative',
    marginRight: 12,
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeIcon: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 2,
  },
  profileRole: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 4,
  },
  profilePhone: {
    fontSize: 11,
    color: colors.gray,
  },
  editIcon: {
    paddingLeft: 8,
  },
  sectionCard: {
    marginHorizontal: 16,
    marginBottom: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  completedSection: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
  },
  sectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sectionIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  sectionInfo: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 2,
  },
  sectionItems: {
    fontSize: 11,
    color: colors.gray,
  },
  sectionRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  completedBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.success,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedIcon: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 14,
  },
  arrow: {
    fontSize: 16,
    color: colors.dark,
  },
  readyCard: {
    marginHorizontal: 16,
    marginVertical: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: colors.primaryLight,
    borderRadius: 12,
    alignItems: 'center',
  },
  readyIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  readyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 8,
  },
  readyText: {
    fontSize: 12,
    color: colors.dark,
    textAlign: 'center',
    lineHeight: 18,
  },
  buttonGroup: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
    gap: 8,
  },
  previewButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  previewIcon: {
    fontSize: 16,
  },
  previewText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.dark,
  },
});

export default ResumeBuilderScreen;
