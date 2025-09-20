
import React from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppContext } from '../context/AppContext';

const PersonalInfoScreen = () => {
  const router = useRouter();
  const { appState, setAppState } = useAppContext();

  const isFormComplete = appState.fullName && appState.email && appState.phone && appState.location;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logo} />
          <Text style={styles.logoText}>workscout</Text>
        </View>
        <TouchableOpacity onPress={() => router.push('/(tabs)')}>
          <Text style={styles.skipText}>Skip →</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Personal Information</Text>

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Your full name"
        placeholderTextColor="#8E8E93"
        value={appState.fullName}
        onChangeText={(text) => setAppState(prevState => ({ ...prevState, fullName: text }))}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Your email address"
        placeholderTextColor="#8E8E93"
        value={appState.email}
        onChangeText={(text) => setAppState(prevState => ({ ...prevState, email: text }))}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Your phone number"
        placeholderTextColor="#8E8E93"
        value={appState.phone}
        onChangeText={(text) => setAppState(prevState => ({ ...prevState, phone: text }))}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Location</Text>
      <View style={styles.locationInputContainer}>
        <TextInput
          style={styles.locationInput}
          placeholder="Your locations"
          placeholderTextColor="#8E8E93"
          value={appState.location}
          onChangeText={(text) => setAppState(prevState => ({ ...prevState, location: text }))}
        />
        <Text style={styles.locationIcon}>📍</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.nextButton, !isFormComplete && styles.nextButtonDisabled]}
          onPress={() => router.push('/professional-profile')}
          disabled={!isFormComplete}
        >
          <Text style={styles.nextButtonText}>Next →</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
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
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: 'white',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#2C2C2E',
    borderRadius: 8,
    padding: 16,
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#4A4A4A',
  },
  locationInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C2C2E',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4A4A4A',
    paddingRight: 16,
  },
  locationInput: {
    flex: 1,
    padding: 16,
    color: 'white',
    fontSize: 16,
  },
  locationIcon: {
    fontSize: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  backButton: {
    backgroundColor: '#2C2C2E',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4A4A4A',
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  nextButtonDisabled: {
    backgroundColor: '#333',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PersonalInfoScreen;
