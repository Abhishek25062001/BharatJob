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

interface Interview {
  id: string;
  jobTitle: string;
  company: string;
  companyLogo?: string;
  date: string;
  time: string;
  type: 'video' | 'call' | 'in-person';
  recruiter: {
    name: string;
    image?: string;
    role: string;
  };
  status: 'confirmed' | 'pending';
  prepNotes: string[];
}

const InterviewScheduleScreen = ({ navigation }: any) => {
  const [selectedTab, setSelectedTab] = useState<'Upcoming' | 'Past'>(
    'Upcoming'
  );

  const interviews: Interview[] = [
    {
      id: '1',
      jobTitle: 'Senior UI Developer',
      company: 'Tech Mahindra',
      companyLogo: 'https://via.placeholder.com/50',
      date: 'Oct 24, 2023',
      time: '10:30 AM',
      type: 'video',
      recruiter: {
        name: 'Priya Sharma',
        image: 'https://via.placeholder.com/60',
        role: 'Senior Technical Recruiter',
      },
      status: 'confirmed',
      prepNotes: [
        'Keep your digital portfolio ready for screen sharing',
        'Stable internet connection is required',
        'Review BharatJobs design guidelines',
      ],
    },
    {
      id: '2',
      jobTitle: 'Product Designer',
      company: 'Zomato',
      date: 'Oct 26, 2023',
      time: '02:00 PM',
      type: 'call',
      recruiter: {
        name: 'Rahul Verma',
        image: 'https://via.placeholder.com/60',
        role: 'HR Manager',
      },
      status: 'pending',
      prepNotes: [
        'Expect questions on user empathy and local scale',
        'Be ready to discuss previous case studies',
      ],
    },
  ];

  const pastInterviews: Interview[] = [
    {
      id: '3',
      jobTitle: 'Senior Frontend Developer',
      company: 'TechFlow Solutions',
      date: 'Oct 12, 2023',
      time: '11:00 AM',
      type: 'video',
      recruiter: {
        name: 'Ananya Sharma',
        role: 'Technical Recruiter',
      },
      status: 'confirmed',
      prepNotes: [],
    },
  ];

  const displayInterviews = selectedTab === 'Upcoming' ? interviews : pastInterviews;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Interview Schedule"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />

      {/* Next Interview Card */}
      {interviews.length > 0 && selectedTab === 'Upcoming' && (
        <View style={styles.nextInterviewCard}>
          <View>
            <Text style={styles.nextLabel}>NEXT INTERVIEW</Text>
            <Text style={styles.nextTime}>In 2 Days</Text>
          </View>
          <TouchableOpacity style={styles.calendarButton}>
            <Text style={styles.calendarIcon}>📅</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {(['Upcoming', 'Past'] as const).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              selectedTab === tab && styles.activeTab,
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
              {tab === 'Upcoming' && ` (${interviews.length})`}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {displayInterviews.map((interview) => (
            <View key={interview.id} style={styles.interviewCard}>
              {/* Header */}
              <View style={styles.cardHeader}>
                <View style={styles.companyInfo}>
                  <View style={styles.logo}>
                    <Text style={styles.logoIcon}>🏢</Text>
                  </View>
                  <View style={styles.jobInfo}>
                    <Text style={styles.jobTitle}>{interview.jobTitle}</Text>
                    <Text style={styles.company}>{interview.company}</Text>
                  </View>
                </View>
                <View>
                  {interview.status === 'confirmed' ? (
                    <View style={styles.statusBadgeConfirmed}>
                      <Text style={styles.statusText}>Confirmed</Text>
                    </View>
                  ) : (
                    <View style={styles.statusBadgePending}>
                      <Text style={styles.statusText}>Pending</Text>
                    </View>
                  )}
                </View>
              </View>

              {/* Date & Time */}
              <View style={styles.dateTimeSection}>
                <View style={styles.dateTimeItem}>
                  <Text style={styles.dateTimeIcon}>📅</Text>
                  <View>
                    <Text style={styles.dateTimeLabel}>Date</Text>
                    <Text style={styles.dateTimeValue}>{interview.date}</Text>
                  </View>
                </View>
                <View style={styles.dateTimeItem}>
                  <Text style={styles.dateTimeIcon}>⏰</Text>
                  <View>
                    <Text style={styles.dateTimeLabel}>Time</Text>
                    <Text style={styles.dateTimeValue}>{interview.time}</Text>
                  </View>
                </View>
                <View style={styles.dateTimeItem}>
                  <Text style={styles.dateTimeIcon}>
                    {interview.type === 'video' ? '📹' : interview.type === 'call' ? '☎️' : '📍'}
                  </Text>
                  <View>
                    <Text style={styles.dateTimeLabel}>Type</Text>
                    <Text style={styles.dateTimeValue}>
                      {interview.type === 'video'
                        ? 'Video Call'
                        : interview.type === 'call'
                        ? 'Call'
                        : 'In-Person'}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Action Buttons */}
              {selectedTab === 'Upcoming' && interview.status === 'confirmed' && (
                <View style={styles.actionButtons}>
                  <Button
                    title={`${interview.type === 'video' ? '🎥' : '☎️'} ${interview.type === 'video' ? 'Join Video' : 'Call for'} Interview`}
                    onPress={() => {}}
                    variant="primary"
                    fullWidth
                    style={styles.joinButton}
                  />
                </View>
              )}

              {/* Recruiter Info */}
              <View style={styles.recruiterSection}>
                <Image
                  source={{ uri: interview.recruiter.image || 'https://via.placeholder.com/60' }}
                  style={styles.recruiterImage}
                />
                <View style={styles.recruiterInfo}>
                  <Text style={styles.recruiterName}>{interview.recruiter.name}</Text>
                  <Text style={styles.recruiterRole}>{interview.recruiter.role}</Text>
                </View>
                <TouchableOpacity hitSlop={{ top: 10, bottom: 10 }}>
                  <Text style={styles.messageIcon}>💬</Text>
                </TouchableOpacity>
              </View>

              {/* Preparation Notes */}
              {interview.prepNotes.length > 0 && (
                <View style={styles.prepNotesSection}>
                  <Text style={styles.notesIcon}>📝</Text>
                  <View style={styles.notesContent}>
                    <Text style={styles.notesTitle}>PREPARATION NOTES</Text>
                    {interview.prepNotes.map((note, idx) => (
                      <View key={idx} style={styles.noteItem}>
                        <Text style={styles.noteBullet}>•</Text>
                        <Text style={styles.noteText}>{note}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}

              {/* Reschedule/Cancel */}
              {selectedTab === 'Upcoming' && (
                <View style={styles.cardFooter}>
                  <TouchableOpacity style={styles.linkButton}>
                    <Text style={styles.linkText}>Reschedule</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cancelLink}>
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}

          {/* Interview Success Guide */}
          {selectedTab === 'Upcoming' && (
            <View style={styles.guideCard}>
              <Text style={styles.guideIcon}>📋</Text>
              <Text style={styles.guideTitle}>Interview Success Guide</Text>
              <Text style={styles.guideSubtitle}>
                Top 10 tips to crack interviews in India.
              </Text>
              <TouchableOpacity style={styles.guideButton}>
                <Text style={styles.guideButtonText}>→</Text>
              </TouchableOpacity>
            </View>
          )}
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
  nextInterviewCard: {
    marginHorizontal: 16,
    marginVertical: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.primaryLight,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nextLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  nextTime: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  calendarButton: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarIcon: {
    fontSize: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.white,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.gray,
  },
  activeTabText: {
    color: colors.primary,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  interviewCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.backgroundSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoIcon: {
    fontSize: 20,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 2,
  },
  company: {
    fontSize: 12,
    color: colors.gray,
  },
  statusBadgeConfirmed: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: colors.primaryLight,
    borderRadius: 4,
  },
  statusBadgePending: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#FFF3E0',
    borderRadius: 4,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.primary,
  },
  dateTimeSection: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  dateTimeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  dateTimeIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  dateTimeLabel: {
    fontSize: 10,
    color: colors.gray,
    marginBottom: 2,
  },
  dateTimeValue: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.dark,
  },
  actionButtons: {
    marginBottom: 16,
  },
  joinButton: {
    marginBottom: 12,
  },
  recruiterSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 8,
    marginBottom: 12,
  },
  recruiterImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  recruiterInfo: {
    flex: 1,
  },
  recruiterName: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 2,
  },
  recruiterRole: {
    fontSize: 11,
    color: colors.gray,
  },
  messageIcon: {
    fontSize: 18,
  },
  prepNotesSection: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: colors.primaryLight,
    borderRadius: 8,
    marginBottom: 12,
  },
  notesIcon: {
    fontSize: 16,
    marginRight: 12,
  },
  notesContent: {
    flex: 1,
  },
  notesTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.dark,
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  noteItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  noteBullet: {
    fontSize: 10,
    color: colors.dark,
    marginRight: 8,
    marginTop: 2,
  },
  noteText: {
    fontSize: 11,
    color: colors.dark,
    flex: 1,
    lineHeight: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  linkButton: {
    paddingVertical: 8,
  },
  linkText: {
    fontSize: 12,
    color: colors.dark,
    fontWeight: '600',
  },
  cancelLink: {
    paddingVertical: 8,
  },
  cancelText: {
    fontSize: 12,
    color: colors.error,
    fontWeight: '600',
  },
  guideCard: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  guideIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  guideTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 4,
  },
  guideSubtitle: {
    fontSize: 12,
    color: colors.gray,
    textAlign: 'center',
    marginBottom: 12,
  },
  guideButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.primary,
    borderRadius: 6,
  },
  guideButtonText: {
    color: colors.white,
    fontWeight: '700',
  },
});

export default InterviewScheduleScreen;
