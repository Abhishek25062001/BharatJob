import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Linking,
} from 'react-native';
import { colors } from '../../theme/colors';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    id: '1',
    category: 'Account',
    question: 'How do I reset my password?',
    answer:
      'Go to Settings > Account Security > Change Password. Enter your current password and set a new one.',
  },
  {
    id: '2',
    category: 'Account',
    question: 'How do I delete my account?',
    answer:
      'Contact our support team at support@bharatjobs.com with your account details for account deletion.',
  },
  {
    id: '3',
    category: 'Applications',
    question: 'Can I withdraw my application?',
    answer:
      'Yes, go to Applied Jobs > Select the job > Click "Withdraw Application".',
  },
  {
    id: '4',
    category: 'Applications',
    question: 'When will I hear back from a recruiter?',
    answer:
      'Most recruiters respond within 24-48 hours. You\'ll receive notifications when there\'s activity on your application.',
  },
  {
    id: '5',
    category: 'Resume',
    question: 'How do I upload a new resume?',
    answer:
      'Go to Resume Builder > Click Change Resume > Upload your PDF file.',
  },
  {
    id: '6',
    category: 'Profile',
    question: 'How do I become verified?',
    answer:
      'You can get verified through phone verification or by linking your government ID documents.',
  },
];

const HelpSupportScreen = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Account', 'Applications', 'Resume', 'Profile'];

  const filteredFAQs = faqs.filter(
    (faq) =>
      (selectedCategory === 'All' || faq.category === selectedCategory) &&
      (searchQuery === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Help & Support"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search */}
        <View style={styles.searchSection}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search FAQs..."
            placeholderTextColor={colors.gray}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Contact Support Cards */}
        <View style={styles.contactCards}>
          <TouchableOpacity
            style={styles.contactCard}
            onPress={() =>
              Linking.openURL('mailto:support@bharatjobs.com')
            }
          >
            <Text style={styles.contactIcon}>✉️</Text>
            <Text style={styles.contactTitle}>Email Support</Text>
            <Text style={styles.contactSubtitle}>support@bharatjobs.com</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactCard}
            onPress={() =>
              Linking.openURL('tel:+91-9999999999')
            }
          >
            <Text style={styles.contactIcon}>☎️</Text>
            <Text style={styles.contactTitle}>Call Us</Text>
            <Text style={styles.contactSubtitle}>+91-9999-999-999</Text>
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.categoriesSection}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesScroll}
          >
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[
                  styles.categoryChip,
                  selectedCategory === cat && styles.selectedChip,
                ]}
                onPress={() => setSelectedCategory(cat)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === cat && styles.selectedText,
                  ]}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* FAQs */}
        <View style={styles.faqsSection}>
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <TouchableOpacity
                key={faq.id}
                style={styles.faqItem}
                onPress={() =>
                  setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)
                }
              >
                <View style={styles.faqHeader}>
                  <Text style={styles.faqQuestion}>{faq.question}</Text>
                  <Text style={styles.faqToggle}>
                    {expandedFAQ === faq.id ? '−' : '+'}
                  </Text>
                </View>
                {expandedFAQ === faq.id && (
                  <Text style={styles.faqAnswer}>{faq.answer}</Text>
                )}
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.noResults}>
              <Text style={styles.noResultsIcon}>🔍</Text>
              <Text style={styles.noResultsText}>No FAQs found</Text>
            </View>
          )}
        </View>

        {/* Contact Form */}
        <View style={styles.formSection}>
          <Text style={styles.formTitle}>Didn't find what you're looking for?</Text>
          <Text style={styles.formSubtitle}>Send us a message</Text>
          <Button
            title="Contact Support Team"
            onPress={() => {}}
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
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
    marginBottom: 12,
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 12,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: colors.dark,
  },
  contactCards: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 16,
  },
  contactCard: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
    borderRadius: 12,
    alignItems: 'center',
  },
  contactIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  contactTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 4,
  },
  contactSubtitle: {
    fontSize: 11,
    color: colors.gray,
  },
  categoriesSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  categoriesScroll: {
    flexGrow: 0,
  },
  categoryChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    marginRight: 8,
  },
  selectedChip: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.dark,
  },
  selectedText: {
    color: colors.white,
  },
  faqsSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  faqItem: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  faqQuestion: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.dark,
    flex: 1,
    marginRight: 8,
  },
  faqToggle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  faqAnswer: {
    fontSize: 12,
    color: colors.gray,
    marginTop: 10,
    lineHeight: 18,
  },
  noResults: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  noResultsIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  noResultsText: {
    fontSize: 14,
    color: colors.gray,
    fontWeight: '600',
  },
  formSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: colors.white,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 4,
  },
  formSubtitle: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 12,
  },
});

export default HelpSupportScreen;
