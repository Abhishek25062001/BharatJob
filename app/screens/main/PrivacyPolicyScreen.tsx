import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { colors } from '../../theme/colors';
import { Header } from '../../components/Header';

const PrivacyPolicyScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Privacy Policy"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.lastUpdated}>Last Updated: January 15, 2024</Text>

          <Text style={styles.intro}>
            At BharatJobs, we are committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information.
          </Text>

          <Section title="1. Information We Collect" content="We collect information you provide directly, such as when you:
• Create an account
• Upload your resume
• Apply for jobs
• Communicate with recruiters
• Update your profile
• Contact our support team" />

          <Section title="2. How We Use Your Information" content="We use your information to:
• Connect you with job opportunities
• Communicate with you about applications and interviews
• Improve our services
• Send notifications and updates
• Ensure platform security
• Comply with legal obligations" />

          <Section title="3. Data Protection" content="We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure." />

          <Section title="4. Sharing of Information" content="We may share your information with:
• Recruiters and employers (with your consent)
• Service providers assisting us in operations
• Law enforcement when required by law
• Other parties as necessary to protect rights and safety" />

          <Section title="5. Your Rights" content="You have the right to:
• Access your personal data
• Correct inaccurate information
• Request deletion of your data
• Opt-out of communications
• Data portability
• Lodge a complaint with authorities" />

          <Section title="6. Cookies" content="We use cookies and similar technologies to enhance your experience. You can control cookie settings through your browser preferences." />

          <Section title="7. Children's Privacy" content="BharatJobs does not knowingly collect information from children under 18 years of age. If we become aware that a child has provided us with personal information, we will delete such information promptly." />

          <Section title="8. Policy Updates" content="We may update this Privacy Policy periodically. We will notify you of any changes by posting the new policy on this page and updating the 'Last Updated' date." />

          <Section title="9. Contact Us" content="If you have questions about this Privacy Policy or our privacy practices, please contact us at:

Email: privacy@bharatjobs.com
Phone: +91-9999-999-999
Address: BharatJobs Tech Pvt Ltd, Made for Bharat" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Section = ({ title, content }: any) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.sectionContent}>{content}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  lastUpdated: {
    fontSize: 11,
    color: colors.gray,
    marginBottom: 12,
    fontStyle: 'italic',
  },
  intro: {
    fontSize: 13,
    color: colors.dark,
    lineHeight: 20,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 13,
    color: colors.dark,
    lineHeight: 20,
  },
});

export default PrivacyPolicyScreen;
