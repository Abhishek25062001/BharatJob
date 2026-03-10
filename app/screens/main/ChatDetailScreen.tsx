import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import { colors } from '../../theme/colors';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  text: string;
  timestamp: string;
  isOwn: boolean;
  attachments?: {
    type: 'pdf' | 'image';
    name: string;
    size: string;
    url: string;
  }[];
}

const ChatDetailScreen = ({ route, navigation }: any) => {
  const { message: recruiterInfo } = route.params || {
    message: {
      senderName: 'Priya Sharma',
      senderRole: 'Senior Recruiter · Infosys BPM',
      isOnline: true,
    },
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      senderId: 'recruiter',
      senderName: 'Priya Sharma',
      text: 'Hi Rajesh, I saw your profile on BharatJobs. We\'re looking for a Senior Frontend Developer at Infosys BPM.',
      timestamp: '10:30 AM',
      isOwn: false,
    },
    {
      id: '2',
      senderId: 'user',
      senderName: 'You',
      text: 'Hello Priya! Thanks for reaching out. I\'m definitely interested in exploring this opportunity.',
      timestamp: '10:35 AM',
      isOwn: true,
    },
    {
      id: '3',
      senderId: 'recruiter',
      senderName: 'Priya Sharma',
      text: 'Great! Can you please share more details about your React and Tailwind experience?',
      timestamp: '10:38 AM',
      isOwn: false,
    },
    {
      id: '4',
      senderId: 'user',
      senderName: 'You',
      text: 'Sure! I have 4+ years of experience with React and 2 years with Tailwind CSS. I\'ve worked on multiple projects with these technologies.',
      timestamp: '10:42 AM',
      isOwn: true,
    },
    {
      id: '5',
      senderId: 'recruiter',
      senderName: 'Priya Sharma',
      text: 'That sounds perfect! Would you be available for a quick screening call today at 4:00 PM?',
      timestamp: '10:45 AM',
      isOwn: false,
    },
    {
      id: '6',
      senderId: 'user',
      senderName: 'You',
      text: 'Yes, 4 PM works! I\'ve attached my latest resume for your reference.',
      timestamp: '10:46 AM',
      isOwn: true,
      attachments: [
        {
          type: 'pdf',
          name: 'Rajesh_Kumar_Resume_2024.pdf',
          size: '850 KB',
          url: 'https://example.com/resume.pdf',
        },
      ],
    },
  ]);

  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage: ChatMessage = {
        id: (messages.length + 1).toString(),
        senderId: 'user',
        senderName: 'You',
        text: inputText,
        timestamp: 'Now',
        isOwn: true,
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const renderMessage = ({ item }: { item: ChatMessage }) => (
    <View
      style={[
        styles.messageContainer,
        item.isOwn && styles.ownMessageContainer,
      ]}
    >
      {!item.isOwn && (
        <Image
          source={{ uri: 'https://via.placeholder.com/40' }}
          style={styles.messageAvatar}
        />
      )}

      <View
        style={[
          styles.messageBubble,
          item.isOwn ? styles.ownBubble : styles.otherBubble,
        ]}
      >
        <Text style={[
          styles.messageText,
          item.isOwn && styles.ownMessageText,
        ]}>
          {item.text}
        </Text>

        {item.attachments && item.attachments.length > 0 && (
          <View style={styles.attachmentsContainer}>
            {item.attachments.map((attachment, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.attachmentItem}
              >
                <Text style={styles.attachmentIcon}>
                  {attachment.type === 'pdf' ? '📄' : '📷'}
                </Text>
                <View style={styles.attachmentInfo}>
                  <Text style={styles.attachmentName} numberOfLines={1}>
                    {attachment.name}
                  </Text>
                  <Text style={styles.attachmentSize}>{attachment.size}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <Text
          style={[
            styles.messageTime,
            item.isOwn ? styles.ownMessageTime : styles.otherMessageTime,
          ]}
        >
          {item.timestamp}
        </Text>
      </View>

      {item.isOwn && (
        <View style={styles.ownMessageAvatar}>
          <Text style={styles.ownAvatarIcon}>👤</Text>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 10, bottom: 10 }}
        >
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.recruiterName}>{recruiterInfo.senderName}</Text>
          <View style={styles.statusRow}>
            {recruiterInfo.isOnline && (
              <View style={styles.onlineDot} />
            )}
            <Text style={styles.recruiterRole}>
              {recruiterInfo.isOnline ? 'Online' : recruiterInfo.senderRole}
            </Text>
          </View>
        </View>
        <TouchableOpacity hitSlop={{ top: 10, bottom: 10 }}>
          <Text style={styles.moreIcon}>⋮</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesContent}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}
      >
        <View style={styles.inputWrapper}>
          <TouchableOpacity style={styles.attachButton}>
            <Text style={styles.attachIcon}>📎</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            placeholderTextColor={colors.gray}
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSendMessage}
            disabled={!inputText.trim()}
          >
            <Text style={styles.sendIcon}>📤</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickAction}>
            <Text style={styles.quickActionText}>Schedule Interview</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction}>
            <Text style={styles.quickActionText}>Verified Conversation</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.dark,
    marginRight: 12,
  },
  headerContent: {
    flex: 1,
  },
  recruiterName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.dark,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.success,
    marginRight: 6,
  },
  recruiterRole: {
    fontSize: 11,
    color: colors.gray,
  },
  moreIcon: {
    fontSize: 20,
    color: colors.dark,
  },
  messagesContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 6,
    alignItems: 'flex-end',
  },
  ownMessageContainer: {
    justifyContent: 'flex-end',
  },
  messageAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  ownMessageAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: 8,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ownAvatarIcon: {
    fontSize: 16,
  },
  messageBubble: {
    maxWidth: '75%',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  otherBubble: {
    backgroundColor: colors.backgroundSecondary,
    borderBottomLeftRadius: 2,
  },
  ownBubble: {
    backgroundColor: colors.primary,
    borderBottomRightRadius: 2,
  },
  messageText: {
    fontSize: 13,
    color: colors.dark,
    lineHeight: 18,
  },
  ownMessageText: {
    color: colors.white,
  },
  attachmentsContainer: {
    marginTop: 8,
  },
  attachmentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 6,
    marginVertical: 4,
  },
  attachmentIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  attachmentInfo: {
    flex: 1,
  },
  attachmentName: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.white,
  },
  attachmentSize: {
    fontSize: 10,
    color: colors.white,
    marginTop: 2,
  },
  messageTime: {
    fontSize: 10,
    marginTop: 4,
  },
  otherMessageTime: {
    color: colors.gray,
  },
  ownMessageTime: {
    color: colors.white,
  },
  inputContainer: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    padding: 12,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  attachButton: {
    padding: 8,
  },
  attachIcon: {
    fontSize: 18,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 13,
    color: colors.dark,
    maxHeight: 100,
  },
  sendButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  sendIcon: {
    fontSize: 18,
  },
  quickActions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  quickAction: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 6,
    alignItems: 'center',
  },
  quickActionText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.dark,
  },
});

export default ChatDetailScreen;
