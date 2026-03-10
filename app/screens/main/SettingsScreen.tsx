import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import { colors } from '../../theme/colors';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { useAuthStore } from '../../store/authStore';

const SettingsScreen = ({ navigation }: any) => {
  const { user, logout } = useAuthStore();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Account & Settings"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.profileCard}>
          <Image
            source={{
              uri: 'https://via.placeholder.com/80',
            }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{user?.name || 'Rahul Sharma'}</Text>
            <Text style={styles.profileRole}>Senior UI/UX Designer</Text>
            <Text style={styles.profileBadge}>✓ VERIFIED PROFILE</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Strength */}
        <View style={styles.section}>
          <Text style={styles.strengthLabel}>PROFILE STRENGTH</Text>
          <View style={styles.strengthBar}>
            <View style={[styles.strengthFill, { width: '85%' }]} />
          </View>
          <Text style={styles.strengthText}>
            Complete your portfolio to reach 100% and get 3x more views.
          </Text>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PREFERENCES</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>🌐</Text>
              <Text style={styles.settingLabel}>App Language</Text>
            </View>
            <Text style={styles.settingValue}>English</Text>
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>🔔</Text>
              <Text style={styles.settingLabel}>Notifications</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: colors.border, true: colors.primaryLight }}
              thumbColor={notificationsEnabled ? colors.primary : colors.gray}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>📧</Text>
              <Text style={styles.settingLabel}>Email Updates</Text>
            </View>
            <Switch
              value={emailUpdates}
              onValueChange={setEmailUpdates}
              trackColor={{ false: colors.border, true: colors.primaryLight }}
              thumbColor={emailUpdates ? colors.primary : colors.gray}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>📋</Text>
              <Text style={styles.settingLabel}>Resume Builder</Text>
            </View>
            <Text style={styles.settingValue}>Updated recently</Text>
          </View>
        </View>

        {/* Privacy & Security */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PRIVACY & SECURITY</Text>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>✓</Text>
              <View>
                <Text style={styles.settingLabel}>Verification Status</Text>
                <Text style={styles.settingSubtext}>Phone verified</Text>
              </View>
            </View>
            <Text style={styles.verifiedBadge}>Verified</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>🔗</Text>
              <View>
                <Text style={styles.settingLabel}>Linked Accounts</Text>
                <Text style={styles.settingSubtext}>Google, LinkedIn</Text>
              </View>
            </View>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>❓</Text>
              <Text style={styles.settingLabel}>Help & Support</Text>
            </View>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Legal */}
        <View style={styles.section}>
          <View style={styles.legalLinks}>
            <TouchableOpacity>
              <Text style={styles.legalLink}>Terms of Service</Text>
            </TouchableOpacity>
            <Text style={styles.legalDot}>•</Text>
            <TouchableOpacity>
              <Text style={styles.legalLink}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Version */}
        <View style={styles.versionSection}>
          <Text style={styles.versionText}>BHARATJOBS VERSION 2.4.1 (STABLE)</Text>
        </View>

        {/* Logout Button */}
        <View style={styles.logoutSection}>
          <Button
            title="Log Out"
            onPress={logout}
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
  profileCard: {
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 2,
  },
  profileRole: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 4,
  },
  profileBadge: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.success,
    letterSpacing: 0.5,
  },
  editButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 6,
  },
  editText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  section: {
    marginHorizontal: 16,
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
  },
  strengthLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.gray,
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  strengthBar: {
    height: 6,
    backgroundColor: colors.border,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  strengthFill: {
    height: '100%',
    backgroundColor: colors.primary,
  },
  strengthText: {
    fontSize: 11,
    color: colors.gray,
    lineHeight: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.gray,
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  settingLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.dark,
  },
  settingSubtext: {
    fontSize: 11,
    color: colors.gray,
    marginTop: 2,
  },
  settingValue: {
    fontSize: 12,
    color: colors.gray,
    fontWeight: '500',
  },
  verifiedBadge: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.success,
  },
  arrow: {
    fontSize: 16,
    color: colors.dark,
  },
  legalLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  legalLink: {
    fontSize: 11,
    color: colors.primary,
    fontWeight: '600',
  },
  legalDot: {
    color: colors.gray,
  },
  versionSection: {
    marginHorizontal: 16,
    marginVertical: 16,
    paddingVertical: 8,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 10,
    color: colors.gray,
    letterSpacing: 0.5,
  },
  logoutSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

export default SettingsScreen;
