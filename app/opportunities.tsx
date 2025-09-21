
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const OpportunitiesScreen = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logo} />
          <Text style={styles.logoText}>workscout</Text>
        </View>
        <TouchableOpacity onPress={() => router.push('/(tabs)')}>
          <Text style={styles.skipText}>Skip →</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Are you currently looking for new opportunities</Text>

      <TouchableOpacity
        style={[styles.option, selectedOption === 'actively' && styles.selectedOption]}
        onPress={() => setSelectedOption('actively')}
      >
        <Text style={styles.optionTitle}>Yes, Actively looking</Text>
        <Text style={styles.optionSubtitle}>Receive exclusive job invites and get contracted by employers</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, selectedOption === 'open' && styles.selectedOption]}
        onPress={() => setSelectedOption('open')}
      >
        <Text style={styles.optionTitle}>I'm Open Job for seeking</Text>
        <Text style={styles.optionSubtitle}>Choose this to occasionally receive exclusive job invites.</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, !selectedOption && styles.buttonDisabled]}
          onPress={() => router.push('/personal-info')}
          disabled={!selectedOption}
        >
          <Text style={styles.buttonText}>Next →</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 60,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 24,
    height: 24,
    backgroundColor: 'white',
    transform: [{ rotate: '45deg' }],
    marginRight: 8,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  skipText: {
    color: '#8E8E93',
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
    width: '80%',
  },
  option: {
    backgroundColor: '#2C2C2E',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#2C2C2E',
  },
  selectedOption: {
    borderColor: '#4A90E2',
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginBottom: 8,
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#8E8E93',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 18,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#333',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OpportunitiesScreen;
