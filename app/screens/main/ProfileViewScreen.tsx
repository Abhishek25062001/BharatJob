import React from 'react';
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
import { useAuthStore } from '../../store/authStore';

const ProfileViewScreen = ({ navigation }: any) => {
  const { user } = useAuthStore();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="My Profile"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
        rightAction={{
          icon: '✏️',
          onPress: () => navigation.navigate('ProfileEdit'),
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image
            source={{
              uri: 'https://via.placeholder.com/120',
            }}
            style={styles.profileImage}
          />
          <View style={styles.verifiedBadge}>
            <Text style={styles.verifiedIcon}>✓</Text>
          </View>
          <Text style={styles.profileName}>{user?.name}</Text>
          <Text style={styles.profileRole}>Senior UI/UX Designer</Text>
          <Text style={styles.profileLocation}>📍 {user?.city}</Text>
        </View>

        {/* Profile Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>85%</Text>
            <Text style={styles.statLabel}>Profile Strength</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>24</Text>
            <Text style={styles.statLabel}>Applications</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Interviews</Text>
          </View>
        </View>

        {/* Personal Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          <View style={styles.infoField}>
            <Text style={styles.infoLabel}>Full Name</Text>
            <Text style={styles.infoValue}>{user?.name}</Text>
          </View>

          <View style={styles.infoField}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>{user?.email}</Text>
          </View>

          <View style={styles.infoField}>
            <Text style={styles.infoLabel}>Phone</Text>
            <Text style={styles.infoValue}>{user?.phone}</Text>
          </View>

          <View style={styles.infoField}>
            <Text style={styles.infoLabel}>Current City</Text>
            <Text style={styles.infoValue}>{user?.city}</Text>
          </View>

          <View style={styles.infoField}>
            <Text style={styles.infoLabel}>Primary Language</Text>
            <Text style={styles.infoValue}>
              {user?.languages?.join(', ')}
            </Text>
          </View>
        </View>

        {/* Career & Education */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Career & Education</Text>
            <TouchableOpacity>
              <Text style={styles.editIcon}>✏️</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.experienceItem}>
            <Text style={styles.experienceTitle}>
              Senior Product Designer
            </Text>
            <Text style={styles.experienceCompany}>
              Innovate Solutions Pvt Ltd
            </Text>
            <Text style={styles.experiencePeriod}>
              Jan 2021 - Present (2.5 Years)
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.experienceItem}>
            <Text style={styles.experienceTitle}>Junior UI Designer</Text>
            <Text style={styles.experienceCompany}>Creative Minds Agency</Text>
            <Text style={styles.experiencePeriod}>
              June 2018 - Dec 2020 (2.5 Years)
            </Text>
          </View>

          <View style={styles.educationItem}>
            <Text style={styles.educationTitle}>
              B.Des in Visual Communication
            </Text>
            <Text style={styles.educationSchool}>
              National Institute of Design (NID)
            </Text>
            <Text style={styles.educationPeriod}>2014 - 2018</Text>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Key Skills</Text>
            <TouchableOpacity>
              <Text style={styles.editIcon}>✏️</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.skillsGrid}>
            {[
              'Figma',
              'User Research',
              'Prototyping',
              'Tailwind CSS',
              'React Basics',
              'Wireframing',
              'Hindi',
              'English',
            ].map((skill, idx) => (
              <View key={idx} style={styles.skillTag}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Languages */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Languages</Text>
            <TouchableOpacity>
              <Text style={styles.editIcon}>✏️</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.languageItem}>
            <Text style={styles.languageTitle}>English</Text>
            <Text style={styles.languageProficiency}>Native / Bilingual</Text>
          </View>

          <View style={styles.languageItem}>
            <Text style={styles.languageTitle}>Hindi</Text>
            <Text style={styles.languageProficiency}>Professional</Text>
          </View>
        </View>

        {/* Verification */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Verification Status</Text>

          <View style={styles.verificationItem}>
            <Text style={styles.verificationIcon}>✓</Text>
            <View style={styles.verificationInfo}>
              <Text style={styles.verificationType}>Phone Verified</Text>
              <Text style={styles.verificationDate}>Verified on Jan 15, 2024</Text>
            </View>
          </View>

          <View style={styles.verificationItem}>
            <Text style={styles.verificationIcon}>✓</Text>
            <View style={styles.verificationInfo}>
              <Text style={styles.verificationType}>Email Verified</Text>
              <Text style={styles.verificationDate}>Verified on Jan 15, 2024</Text>
            </View>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actionsSection}>
          <Button
            title="Edit Profile"
            onPress={() => navigation.navigate('ProfileEdit')}
            variant="primary"
            fullWidth
            style={styles.button}
          />
          <Button
            title="Download Resume"
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
  profileHeader: {
    backgroundColor: colors.white,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  verifiedBadge: {
    position: 'absolute',
    top: 110,
    right: '50%',
    marginRight: -60,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifiedIcon: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 4,
  },
  profileRole: {
    fontSize: 13,
    color: colors.gray,
    marginBottom: 4,
  },
  profileLocation: {
    fontSize: 12,
    color: colors.gray,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
    marginTop: 8,
    marginHorizontal: 16,
    borderRadius: 12,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  statLabel: {
    fontSize: 11,
    color: colors.gray,
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: colors.border,
  },
  section: {
    marginHorizontal: 16,
    marginTop: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
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
  editIcon: {
    fontSize: 16,
  },
  infoField: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  infoLabel: {
    fontSize: 11,
    color: colors.gray,
    marginBottom: 4,
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 13,
    color: colors.dark,
    fontWeight: '500',
  },
  experienceItem: {
    marginBottom: 12,
  },
  experienceTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 2,
  },
  experienceCompany: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 2,
  },
  experiencePeriod: {
    fontSize: 11,
    color: colors.gray,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 12,
  },
  educationItem: {
    marginTop: 12,
  },
  educationTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 2,
  },
  educationSchool: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 2,
  },
  educationPeriod: {
    fontSize: 11,
    color: colors.gray,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillTag: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: colors.primaryLight,
    borderRadius: 16,
  },
  skillText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
  languageItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  languageTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 4,
  },
  languageProficiency: {
    fontSize: 12,
    color: colors.gray,
  },
  verificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  verificationIcon: {
    fontSize: 20,
    color: colors.success,
    marginRight: 12,
  },
  verificationInfo: {
    flex: 1,
  },
  verificationType: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 2,
  },
  verificationDate: {
    fontSize: 11,
    color: colors.gray,
  },
  actionsSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 8,
  },
  button: {
    marginBottom: 8,
  },
});

export default ProfileViewScreen;
