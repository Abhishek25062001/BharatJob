import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { colors } from '../../theme/colors';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

const ProfileEditScreen = ({ navigation }: any) => {
  const [formData, setFormData] = useState({
    fullName: 'Rahul Sharma',
    email: 'rahul@email.com',
    phone: '+91 98765 43210',
    city: 'Bangalore, Karnataka',
    language: 'English',
    currentRole: 'Senior UI/UX Designer',
    company: 'Innovate Solutions Pvt Ltd',
    experience: '2.5 Years',
    qualification: 'B.Des in Visual Communication',
    school: 'National Institute of Design (NID)',
  });

  const [editingSection, setEditingSection] = useState<string | null>(null);

  const handleSave = () => {
    Alert.alert('Success', 'Profile updated successfully!');
    navigation.goBack();
  };

  const EditableField = ({
    label,
    value,
    onChangeText,
    placeholder,
  }: any) => (
    <View style={styles.fieldGroup}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Edit Profile"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Photo */}
        <View style={styles.photoSection}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.profilePhoto}
          />
          <TouchableOpacity style={styles.changePhotoButton}>
            <Text style={styles.changePhotoText}>Change Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Personal Information */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>👤 Personal Information</Text>
            {editingSection !== 'personal' && (
              <TouchableOpacity
                onPress={() => setEditingSection('personal')}
              >
                <Text style={styles.editText}>✏️ Edit</Text>
              </TouchableOpacity>
            )}
          </View>

          {editingSection === 'personal' ? (
            <View>
              <EditableField
                label="Full Name (as per Aadhaar)"
                value={formData.fullName}
                onChangeText={(text: string) =>
                  setFormData({ ...formData, fullName: text })
                }
              />
              <EditableField
                label="Email Address"
                value={formData.email}
                onChangeText={(text: string) =>
                  setFormData({ ...formData, email: text })
                }
              />
              <EditableField
                label="Phone Number"
                value={formData.phone}
                onChangeText={(text: string) =>
                  setFormData({ ...formData, phone: text })
                }
              />
              <EditableField
                label="Current City"
                value={formData.city}
                onChangeText={(text: string) =>
                  setFormData({ ...formData, city: text })
                }
              />
              <View style={styles.buttonGroup}>
                <Button
                  title="Save"
                  onPress={() => setEditingSection(null)}
                  variant="primary"
                  fullWidth
                  style={{ marginRight: 8, flex: 1 }}
                />
                <Button
                  title="Cancel"
                  onPress={() => setEditingSection(null)}
                  variant="outline"
                  fullWidth
                  style={{ flex: 1 }}
                />
              </View>
            </View>
          ) : (
            <>
              <InfoRow label="Full Name" value={formData.fullName} />
              <InfoRow label="Email" value={formData.email} />
              <InfoRow label="Phone" value={formData.phone} />
              <InfoRow label="City" value={formData.city} />
            </>
          )}
        </View>

        {/* Career Information */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>💼 Career Information</Text>
            {editingSection !== 'career' && (
              <TouchableOpacity
                onPress={() => setEditingSection('career')}
              >
                <Text style={styles.editText}>✏️ Edit</Text>
              </TouchableOpacity>
            )}
          </View>

          {editingSection === 'career' ? (
            <View>
              <EditableField
                label="Current Role"
                value={formData.currentRole}
                onChangeText={(text: string) =>
                  setFormData({ ...formData, currentRole: text })
                }
              />
              <EditableField
                label="Company Name"
                value={formData.company}
                onChangeText={(text: string) =>
                  setFormData({ ...formData, company: text })
                }
              />
              <EditableField
                label="Years of Experience"
                value={formData.experience}
                onChangeText={(text: string) =>
                  setFormData({ ...formData, experience: text })
                }
              />
              <View style={styles.buttonGroup}>
                <Button
                  title="Save"
                  onPress={() => setEditingSection(null)}
                  variant="primary"
                  fullWidth
                  style={{ marginRight: 8, flex: 1 }}
                />
                <Button
                  title="Cancel"
                  onPress={() => setEditingSection(null)}
                  variant="outline"
                  fullWidth
                  style={{ flex: 1 }}
                />
              </View>
            </View>
          ) : (
            <>
              <InfoRow label="Current Role" value={formData.currentRole} />
              <InfoRow label="Company" value={formData.company} />
              <InfoRow label="Experience" value={formData.experience} />
            </>
          )}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>🎓 Education</Text>
            {editingSection !== 'education' && (
              <TouchableOpacity
                onPress={() => setEditingSection('education')}
              >
                <Text style={styles.editText}>✏️ Edit</Text>
              </TouchableOpacity>
            )}
          </View>

          {editingSection === 'education' ? (
            <View>
              <EditableField
                label="Qualification"
                value={formData.qualification}
                onChangeText={(text: string) =>
                  setFormData({ ...formData, qualification: text })
                }
              />
              <EditableField
                label="School/College"
                value={formData.school}
                onChangeText={(text: string) =>
                  setFormData({ ...formData, school: text })
                }
              />
              <View style={styles.buttonGroup}>
                <Button
                  title="Save"
                  onPress={() => setEditingSection(null)}
                  variant="primary"
                  fullWidth
                  style={{ marginRight: 8, flex: 1 }}
                />
                <Button
                  title="Cancel"
                  onPress={() => setEditingSection(null)}
                  variant="outline"
                  fullWidth
                  style={{ flex: 1 }}
                />
              </View>
            </View>
          ) : (
            <>
              <InfoRow label="Qualification" value={formData.qualification} />
              <InfoRow label="School/College" value={formData.school} />
            </>
          )}
        </View>

        {/* Save Button */}
        <View style={styles.footerButton}>
          <Button
            title="Save Changes"
            onPress={handleSave}
            variant="primary"
            fullWidth
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
  },
  photoSection: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  changePhotoButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.primaryLight,
    borderRadius: 6,
  },
  changePhotoText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
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
  editText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
  fieldGroup: {
    marginBottom: 12,
  },
  fieldLabel: {
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
    fontSize: 13,
    color: colors.dark,
    backgroundColor: colors.backgroundSecondary,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  infoRow: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoLabel: {
    fontSize: 12,
    color: colors.gray,
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 12,
    color: colors.dark,
    fontWeight: '500',
  },
  footerButton: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

export default ProfileEditScreen;
