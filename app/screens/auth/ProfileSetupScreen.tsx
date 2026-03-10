import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import { colors } from '../../theme/colors';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { useAuthStore } from '../../store/authStore';

export const ProfileSetupScreen = ({ navigation }: any) => {
  const [formData, setFormData] = useState({
    fullName: 'Aravind Kumar',
    city: 'Bangalore, Karnataka',
    language: 'English',
    qualification: 'Graduate (B.A/B.Sc/B.Com)',
    experience: '2 Years',
    experienceMonths: '6 Months',
    preferredRole: 'e.g. Sales Executive, Driver',
    salary: '₹20,000 - ₹30,000',
  });

  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    'Delivery',
    'Sales',
  ]);

  const skillOptions = [
    'Delivery',
    'Sales',
    'Data Entry',
    'Cooking',
    'Driving',
    'Warehouse',
    'Graphic Design',
    'Accounting',
  ];

  const { setIsLoggedIn, updateUser } = useAuthStore();

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleSaveProfile = () => {
    if (!formData.fullName.trim()) {
      Alert.alert('Error', 'Please enter your full name');
      return;
    }

    updateUser({
      name: formData.fullName,
      city: formData.city,
      education: formData.qualification,
      skills: selectedSkills,
      preferredRole: formData.preferredRole,
      languages: [formData.language],
    });

    setIsLoggedIn(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Profile Setup"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Strength */}
        <View style={styles.strengthCard}>
          <View>
            <Text style={styles.strengthLabel}>Almost there!</Text>
            <Text style={styles.strengthValue}>65% Profile Strength</Text>
          </View>
          <Text style={styles.strengthScore}>Excellent</Text>
        </View>

        <View style={styles.strengthBar}>
          <View style={[styles.strengthFill, { width: '65%' }]} />
        </View>

        <Text style={styles.hint}>
          Companies prefer profiles with skills and education details. Complete
          these to get 3x more interview calls!
        </Text>

        {/* Profile Photo */}
        <View style={styles.profileSection}>
          <View style={styles.profilePhoto}>
            <Image
              source={{
                uri: 'https://via.placeholder.com/100',
              }}
              style={styles.photo}
            />
            <View style={styles.verifiedBadge}>
              <Text style={styles.badgeIcon}>✓</Text>
            </View>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Aravind Kumar</Text>
            <Text style={styles.profileEmail}>aravind.k@email.com</Text>
          </View>
        </View>

        {/* Personal Information */}
        <View style={styles.section}>
          <View style={styles.sectionIcon}>
            <Text>👤</Text>
          </View>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Full Name (as per Aadhaar)</Text>
            <TextInput
              style={styles.input}
              value={formData.fullName}
              onChangeText={(text) =>
                setFormData({ ...formData, fullName: text })
              }
              placeholder="Full Name"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Current City</Text>
            <TextInput
              style={styles.input}
              value={formData.city}
              onChangeText={(text) =>
                setFormData({ ...formData, city: text })
              }
              placeholder="City, State"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Primary Language</Text>
            <TextInput
              style={styles.input}
              value={formData.language}
              onChangeText={(text) =>
                setFormData({ ...formData, language: text })
              }
              placeholder="Language"
            />
          </View>
        </View>

        {/* Career & Education */}
        <View style={styles.section}>
          <View style={styles.sectionIcon}>
            <Text>🏢</Text>
          </View>
          <Text style={styles.sectionTitle}>Career & Education</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Highest Qualification</Text>
            <TextInput
              style={styles.input}
              value={formData.qualification}
              editable={false}
            />
          </View>

          <View style={styles.formRow}>
            <View style={[styles.formGroup, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.label}>Total Work Experience</Text>
              <TextInput
                style={styles.input}
                value={formData.experience}
                editable={false}
              />
            </View>
            <View style={[styles.formGroup, { flex: 1 }]}>
              <TextInput
                style={styles.input}
                value={formData.experienceMonths}
                editable={false}
              />
            </View>
          </View>
        </View>

        {/* Key Skills */}
        <View style={styles.section}>
          <View style={styles.sectionIcon}>
            <Text>💡</Text>
          </View>
          <Text style={styles.sectionTitle}>Key Skills</Text>
          <Text style={styles.skillsHint}>Tap to select your expertise</Text>

          <View style={styles.skillsGrid}>
            {skillOptions.map((skill, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.skillChip,
                  selectedSkills.includes(skill) && styles.selectedSkill,
                ]}
                onPress={() => handleSkillToggle(skill)}
              >
                <Text
                  style={[
                    styles.skillText,
                    selectedSkills.includes(skill) && styles.selectedSkillText,
                  ]}
                >
                  {skill}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.addSkillButton}>
            <Text style={styles.addSkillText}>
              + Add other skill (e.g. Photoshop)
            </Text>
          </TouchableOpacity>
        </View>

        {/* Job Preferences */}
        <View style={styles.section}>
          <View style={styles.sectionIcon}>
            <Text>🏢</Text>
          </View>
          <Text style={styles.sectionTitle}>Job Preferences</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Preferred Role</Text>
            <TextInput
              style={styles.input}
              value={formData.preferredRole}
              onChangeText={(text) =>
                setFormData({ ...formData, preferredRole: text })
              }
              placeholder="e.g. Sales Executive, Driver"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Monthly Salary Expectation</Text>
            <TextInput
              style={styles.input}
              value={formData.salary}
              editable={false}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Save & See Jobs"
            onPress={handleSaveProfile}
            variant="primary"
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
  content: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  strengthCard: {
    backgroundColor: colors.primaryLight,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 8,
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
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  strengthScore: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  strengthBar: {
    height: 6,
    backgroundColor: colors.border,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 12,
  },
  strengthFill: {
    height: '100%',
    backgroundColor: colors.primary,
  },
  hint: {
    fontSize: 12,
    color: colors.gray,
    backgroundColor: colors.primaryLight,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  profilePhoto: {
    position: 'relative',
    marginRight: 16,
  },
  photo: {
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
    fontSize: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 13,
    color: colors.gray,
  },
  section: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionIcon: {
    fontSize: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 12,
  },
  formGroup: {
    marginBottom: 16,
  },
  formRow: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.gray,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    color: colors.dark,
    backgroundColor: colors.backgroundSecondary,
  },
  skillsHint: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 12,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  skillChip: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  selectedSkill: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  skillText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.dark,
  },
  selectedSkillText: {
    color: colors.white,
  },
  addSkillButton: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  addSkillText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
  buttonContainer: {
    marginBottom: 32,
  },
});

export default ProfileSetupScreen;
