import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../theme/colors';
import { Button } from '../../components/Button';

interface AppStateScreenProps {
  type:
    | 'no-jobs'
    | 'no-messages'
    | 'no-candidates'
    | 'network-error'
    | 'app-failed'
    | 'loading';
}

export const AppStateScreen: React.FC<AppStateScreenProps> = ({ type }) => {
  const getStateConfig = () => {
    switch (type) {
      case 'no-jobs':
        return {
          icon: '🔍',
          title: 'No Jobs Found',
          description:
            'We couldn\'t find any jobs matching Astronaut in Mumbai. Try adjusting your filters.',
          action: 'Clear All Filters',
          actionOnPress: () => {},
        };
      case 'no-messages':
        return {
          icon: '💬',
          title: 'No Messages Yet',
          description:
            'When you apply for jobs or recruiters contact you, conversations will appear here.',
          action: 'Start Exploring',
          actionOnPress: () => {},
        };
      case 'no-candidates':
        return {
          icon: '👤',
          title: 'No Candidates',
          description:
            'Your job posting hasn\'t received any applications yet. Try promoting your post.',
          action: 'Promote Job',
          actionOnPress: () => {},
        };
      case 'network-error':
        return {
          icon: '✈️',
          title: 'Network Error',
          description:
            'Please check your internet connection and try again to fetch latest jobs.',
          action: 'Retry Connection',
          actionOnPress: () => {},
        };
      case 'app-failed':
        return {
          icon: '❌',
          title: 'Application Failed',
          description:
            'Something went wrong while submitting your resume. Please try again.',
          action: 'View Error Details',
          actionOnPress: () => {},
        };
      case 'loading':
        return {
          icon: '⚙️',
          title: 'Loading',
          description: 'Please wait while we fetch the latest opportunities...',
          action: '',
          actionOnPress: () => {},
        };
      default:
        return {
          icon: '❓',
          title: 'Unknown State',
          description: 'Something unexpected happened.',
          action: 'Go Back',
          actionOnPress: () => {},
        };
    }
  };

  const config = getStateConfig();

  if (type === 'loading') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <View style={styles.spinnerContainer}>
            <Text style={[styles.loadingIcon, styles.spinning]}>⚙️</Text>
          </View>
          <Text style={styles.loadingTitle}>{config.title}</Text>
          <Text style={styles.loadingDescription}>{config.description}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.icon}>{config.icon}</Text>
          <Text style={styles.title}>{config.title}</Text>
          <Text style={styles.description}>{config.description}</Text>

          {config.action && (
            <Button
              title={config.action}
              onPress={config.actionOnPress}
              variant="primary"
              fullWidth
              style={styles.button}
            />
          )}
        </View>
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
    flexGrow: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    fontSize: 80,
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: colors.gray,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
  },
  button: {
    minWidth: 200,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerContainer: {
    marginBottom: 24,
  },
  loadingIcon: {
    fontSize: 60,
  },
  spinning: {
    // Add animation or rotation effect here
  },
  loadingTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 8,
    textAlign: 'center',
  },
  loadingDescription: {
    fontSize: 13,
    color: colors.gray,
    textAlign: 'center',
    lineHeight: 20,
  },
});
