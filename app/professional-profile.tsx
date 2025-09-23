
import React from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppContext } from '../context/AppContext';

const ProfessionalProfileScreen = () => {
  const router = useRouter();
  const { appState, setAppState } = useAppContext();

  const isFormComplete = appState.professionalTitle.length > 0;

  const addTitle = () => {
    setAppState(prevState => ({
      ...prevState,
      professionalTitle: [...prevState.professionalTitle, '']
    }));
  };

  const updateTitle = (index, text) => {
    const newTitles = [...appState.professionalTitle];
    newTitles[index] = text;
    setAppState(prevState => ({ ...prevState, professionalTitle: newTitles }));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.contentWrapper}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
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

          <Text style={styles.title}>Professional Profile</Text>

          {appState.professionalTitle.map((title, index) => (
            <View key={index}>
              <Text style={styles.label}>Professional Title</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. UI/UX Designer"
                placeholderTextColor="#8E8E93"
                value={title}
                onChangeText={text => updateTitle(index, text)}
              />
            </View>
          ))}
          
          <TouchableOpacity style={styles.addButton} onPress={addTitle}>
            <Text style={styles.addButtonText}>+ Add another title</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.nextButton, !isFormComplete && styles.nextButtonDisabled]}
            onPress={() => router.push('/(tabs)')}
            disabled={!isFormComplete}
          >
            <Text style={styles.nextButtonText}>Next →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
    maxWidth: 800,
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
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
  addButton: {
    backgroundColor: '#2C2C2E',
    paddingVertical: 18,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4A4A4A',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#4A90E2',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: '#1C1C1E',
    borderTopWidth: 1,
    borderTopColor: '#2C2C2E',
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

export default ProfessionalProfileScreen;
