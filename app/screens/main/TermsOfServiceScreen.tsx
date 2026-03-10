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

const TermsOfServiceScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Terms of Service"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.lastUpdated}>Last Updated: January 15, 2024</Text>

          <Section
            title="1. Acceptance of Terms"
            content="By accessing and using the BharatJobs platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
          />

          <Section
            title="2. Use License"
            content="Permission is granted to temporarily download one copy of the materials (information or software) on BharatJobs for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:"
          />

          <BulletPoints points={[
            'Modify or copy the materials',
            'Use the materials for any commercial purpose',
            'Attempt to decompile or reverse engineer any software',
            'Remove any copyright or other proprietary notations',
            'Transfer the materials to another person or "mirror" the materials on any other server',
          ]} />

          <Section
            title="3. Disclaimer"
            content="The materials on BharatJobs are provided 'as is'. BharatJobs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
          />

          <Section
            title="4. Limitations"
            content="In no event shall BharatJobs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BharatJobs."
          />

          <Section
            title="5. User Responsibilities"
            content="As a user of BharatJobs, you agree to:"
          />

          <BulletPoints points={[
            'Provide accurate and complete information',
            'Not use the platform for illegal activities',
            'Respect the privacy and intellectual property of others',
            'Not harass, abuse, or threaten other users',
            'Maintain confidentiality of your account credentials',
          ]} />

          <Section
            title="6. Modifications of Terms"
            content="BharatJobs may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service."
          />

          <Section
            title="7. Governing Law"
            content="These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
          />

          <Section
            title="8. Contact Information"
            content="If you have any questions about these Terms of Service, please contact us at:"
          />

          <ContactInfo
            email="support@bharatjobs.com"
            phone="+91-9999-999-999"
            address="BharatJobs Tech Pvt Ltd, Made for Bharat"
          />
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

const BulletPoints = ({ points }: any) => (
  <View style={styles.bulletContainer}>
    {points.map((point: string, idx: number) => (
      <View key={idx} style={styles.bulletItem}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>{point}</Text>
      </View>
    ))}
  </View>
);

const ContactInfo = ({ email, phone, address }: any) => (
  <View style={styles.contactInfo}>
    <Text style={styles.contactLabel}>Email: {email}</Text>
    <Text style={styles.contactLabel}>Phone: {phone}</Text>
    <Text style={styles.contactLabel}>Address: {address}</Text>
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
    marginBottom: 20,
    fontStyle: 'italic',
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
  bulletContainer: {
    marginBottom: 20,
    marginLeft: 8,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bullet: {
    marginRight: 8,
    fontSize: 12,
    color: colors.primary,
    fontWeight: '700',
  },
  bulletText: {
    flex: 1,
    fontSize: 13,
    color: colors.dark,
    lineHeight: 20,
  },
  contactInfo: {
    backgroundColor: colors.backgroundSecondary,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
  },
  contactLabel: {
    fontSize: 12,
    color: colors.dark,
    marginBottom: 6,
  },
});

export default TermsOfServiceScreen;
