import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { colors } from '../../theme/colors';
import { Header } from '../../components/Header';

interface Message {
  id: string;
  conversationId: string;
  senderName: string;
  senderImage?: string;
  senderRole: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isOnline: boolean;
}

const MessagesScreen = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      conversationId: '1',
      senderName: 'Rajesh Kumar',
      senderRole: 'HR Manager · Tech Mahindra',
      lastMessage: 'Your interview is scheduled for to',
      timestamp: '10:45 AM',
      unreadCount: 2,
      isOnline: true,
    },
    {
      id: '2',
      conversationId: '2',
      senderName: 'Priya Sharma',
      senderRole: 'Senior Recruiter · Infosys BPM',
      lastMessage: 'Can you please share your updat',
      timestamp: 'Yesterday',
      unreadCount: 0,
      isOnline: false,
    },
    {
      id: '3',
      conversationId: '3',
      senderName: 'Amit Patel',
      senderRole: 'Project Lead · Zomato Delivery',
      lastMessage: 'The onboarding starts next Mond',
      timestamp: 'Tuesday',
      unreadCount: 0,
      isOnline: false,
    },
    {
      id: '4',
      conversationId: '4',
      senderName: 'Anjali Gupta',
      senderRole: 'Operations Head · Amazon Logistics',
      lastMessage: 'Welcome to the team! Glad to ha',
      timestamp: '2 days ago',
      unreadCount: 0,
      isOnline: true,
    },
    {
      id: '5',
      conversationId: '5',
      senderName: 'Suresh Varma',
      senderRole: 'Hiring Specialist · Swiggy',
      lastMessage: 'Are you available for a quick scre',
      timestamp: '3 days ago',
      unreadCount: 5,
      isOnline: false,
    },
    {
      id: '6',
      conversationId: '6',
      senderName: 'Meera Das',
      senderRole: 'Talent Acquisition · Reliance Retail',
      lastMessage: 'We have reviewed your applicatio',
      timestamp: '1 week ago',
      unreadCount: 0,
      isOnline: false,
    },
  ]);

  const renderMessage = ({ item }: { item: Message }) => (
    <TouchableOpacity
      style={styles.messageItem}
      onPress={() => navigation.navigate('ChatDetail', { message: item })}
    >
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: item.senderImage || 'https://via.placeholder.com/50',
          }}
          style={styles.avatar}
        />
        {item.isOnline && <View style={styles.onlineBadge} />}
      </View>

      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.senderName}>{item.senderName}</Text>
          <Text
            style={[
              styles.timestamp,
              item.unreadCount > 0 && styles.unreadTimestamp,
            ]}
          >
            {item.timestamp}
          </Text>
        </View>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
        <Text style={styles.senderRole}>{item.senderRole}</Text>
      </View>

      {item.unreadCount > 0 && (
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadBadgeText}>{item.unreadCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Messages"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />

      {/* Search */}
      <View style={styles.searchSection}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search chats or companies..."
          placeholderTextColor={colors.gray}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Messages List */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Empty State */}
      {messages.length === 0 && (
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>💬</Text>
          <Text style={styles.emptyTitle}>No Messages Yet</Text>
          <Text style={styles.emptyText}>
            When you apply for jobs or recruiters contact you, conversations will
            appear here.
          </Text>
        </View>
      )}
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
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
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
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 4,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginBottom: 8,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.success,
    borderWidth: 2,
    borderColor: colors.white,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  senderName: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.dark,
  },
  timestamp: {
    fontSize: 11,
    color: colors.gray,
  },
  unreadTimestamp: {
    color: colors.primary,
    fontWeight: '600',
  },
  lastMessage: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 2,
  },
  senderRole: {
    fontSize: 11,
    color: colors.gray,
  },
  unreadBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  unreadBadgeText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '700',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emptyIcon: {
    fontSize: 60,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 13,
    color: colors.gray,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default MessagesScreen;
