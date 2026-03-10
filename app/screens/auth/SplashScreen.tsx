import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Animated,
} from 'react-native';
import { colors } from '../../theme/colors';

const SplashScreen = () => {
  const scaleAnim = React.useRef(new Animated.Value(0.8)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.logoCircle}>
          <Text style={styles.logoIcon}>⚡</Text>
        </View>
      </Animated.View>

      <Text style={styles.title}>Sahi Job, Sahi Waqt Par</Text>
      <Text style={styles.subtitle}>
        India's most trusted platform{'\n'}for local & verified hiring.
      </Text>

      <View style={styles.progressContainer}>
        <View style={styles.progressBar} />
        <ActivityIndicator
          size="small"
          color={colors.primary}
          style={styles.loader}
        />
      </View>

      <Text style={styles.connectingText}>Connecting to verified jobs...</Text>

      <View style={styles.iconsContainer}>
        <Text style={styles.icon}>🛡️</Text>
        <Text style={styles.icon}>🌍</Text>
        <Text style={styles.icon}>✨</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.verifiedText}>100% VERIFIED EMPLOYERS</Text>
        <Text style={styles.companyText}>
          BHARATJOBS TECH PVT LTD · MADE FOR BHARAT
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 40,
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoIcon: {
    fontSize: 60,
  },
  title: {
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
    marginBottom: 40,
  },
  progressContainer: {
    width: 80,
    height: 4,
    backgroundColor: colors.border,
    borderRadius: 2,
    marginBottom: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  progressBar: {
    width: '30%',
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  loader: {
    position: 'absolute',
    right: -30,
  },
  connectingText: {
    fontSize: 14,
    color: colors.primary,
    marginTop: 12,
    marginBottom: 40,
    fontWeight: '500',
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 60,
  },
  icon: {
    fontSize: 28,
  },
  footer: {
    alignItems: 'center',
    marginTop: 40,
  },
  verifiedText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.dark,
    letterSpacing: 1,
    marginBottom: 4,
  },
  companyText: {
    fontSize: 10,
    color: colors.gray,
    letterSpacing: 0.5,
  },
});

export default SplashScreen;
