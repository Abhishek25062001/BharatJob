import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { colors } from '../../theme/colors';
import { Button } from '../../components/Button';
import { useAuthStore } from '../../store/authStore';

export const SignInScreen = ({ navigation }: any) => {
  const [phoneNumber, setPhoneNumber] = useState('98765 43210');
  const [loading, setLoading] = useState(false);
  const { setIsLoggedIn, setUser } = useAuthStore();

  const handleGetOTP = async () => {
    if (!phoneNumber.replace(/\s/g, '').match(/^\d{10}$/)) {
      Alert.alert('Invalid', 'Please enter a valid 10-digit phone number');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success', 'OTP sent to your phone number');
      navigation.navigate('ProfileSetup');
    }, 1500);
  };

  const handleQuickLogin = (method: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Mock login
      setUser({
        id: '1',
        name: 'Rahul Sharma',
        email: 'rahul@email.com',
        phone: phoneNumber,
        city: 'Bangalore',
        profileStrength: 65,
        skills: ['React', 'JavaScript'],
        experience: 2,
        education: 'B.Tech',
        languages: ['English', 'Hindi'],
      });
      setIsLoggedIn(true);
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Sign In</Text>
          <Text style={styles.notificationIcon}>🔔</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoIcon}>⚡</Text>
          </View>

          <Text style={styles.mainTitle}>Aapki Agli Job Yahan Hai</Text>
          <Text style={styles.subtitle}>
            Join 10 Lakh+ job seekers finding verified{'\n'}local opportunities
            every day.
          </Text>

          <View style={styles.formSection}>
            <Text style={styles.label}>ENTER MOBILE NUMBER</Text>
            <View style={styles.phoneInputContainer}>
              <Text style={styles.countryCode}>+91</Text>
              <TextInput
                style={styles.phoneInput}
                placeholder="98765 43210"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                maxLength={14}
                placeholderTextColor={colors.gray}
              />
            </View>

            <Button
              title="Get OTP"
              onPress={handleGetOTP}
              variant="primary"
              fullWidth
              loading={loading}
              style={styles.otpButton}
            />

            <View style={styles.privacyInfo}>
              <Text style={styles.privacyIcon}>🛡️</Text>
              <Text style={styles.privacyText}>
                We value your privacy. Your number will only be used for secure
                login and verified job alerts.
              </Text>
            </View>
          </View>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
            <View style={styles.dividerLine} />
          </View>

          <Button
            title="Continue with Google"
            onPress={() => handleQuickLogin('google')}
            variant="outline"
            fullWidth
            loading={loading}
            style={styles.socialButton}
          />

          <Button
            title="Sign in with Email"
            onPress={() => handleQuickLogin('email')}
            variant="outline"
            fullWidth
            loading={loading}
          />

          <View style={styles.registerSection}>
            <Text style={styles.registerText}>
              New to BharatJobs?{' '}
              <Text style={styles.registerLink}>Register here</Text>
            </Text>
          </View>

          <TouchableOpacity style={styles.languageButton}>
            <Text style={styles.languageIcon}>🌐</Text>
            <Text style={styles.languageButtonText}>Change Language / भाषा बदलें</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>
          By continuing, you agree to our{' '}
          <Text style={styles.link}>Terms of Service</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text>.{'\n'}Standard
          messaging rates may apply for OTP.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.dark,
  },
  notificationIcon: {
    fontSize: 20,
  },
  content: {
    alignItems: 'center',
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoIcon: {
    fontSize: 44,
    color: colors.white,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.dark,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 32,
  },
  formSection: {
    width: '100%',
    marginBottom: 24,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.gray,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.dark,
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.dark,
  },
  otpButton: {
    marginBottom: 16,
  },
  privacyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  privacyIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  privacyText: {
    flex: 1,
    fontSize: 12,
    color: colors.dark,
    lineHeight: 18,
  },
  divider: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 12,
    fontWeight: '600',
    color: colors.gray,
    letterSpacing: 0.5,
  },
  socialButton: {
    marginBottom: 12,
  },
  registerSection: {
    marginTop: 16,
    marginBottom: 24,
  },
  registerText: {
    fontSize: 12,
    color: colors.gray,
    textAlign: 'center',
  },
  registerLink: {
    color: colors.primary,
    fontWeight: '600',
  },
  languageButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
  },
  languageIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  languageButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.dark,
  },
  footer: {
    fontSize: 11,
    color: colors.gray,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 32,
    lineHeight: 18,
  },
  link: {
    color: colors.primary,
    fontWeight: '600',
  },
});

export default SignInScreen;
