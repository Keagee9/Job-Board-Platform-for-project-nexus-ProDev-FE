
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import * as DocumentPicker from 'expo-document-picker';
import { useAppContext } from '../context/AppContext';

const UploadCVScreen = () => {
  const router = useRouter();
  const { appState, setAppState } = useAppContext();
  const [cv, setCv] = useState(null);

  const handleUploadCv = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
    });

    if (result.type === 'success') {
      setCv(result);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logo} />
          <Text style={styles.logoText}>workscout</Text>
        </View>
      </View>

      <Text style={styles.title}>Upload your CV to get analyzed and receive job offers.</Text>

      <Text style={styles.label}>Upload your CV in PDF</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={handleUploadCv}>
        <Text style={styles.uploadButtonText}>{cv ? cv.name : 'Upload your CV in PDF'}</Text>
        <Text style={styles.uploadButtonIcon}>+</Text>
      </TouchableOpacity>

      <Text style={styles.label}>URL Links</Text>
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>URL Links</Text>
        <Text style={styles.uploadButtonIcon}>+</Text>
      </TouchableOpacity>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox} />
        <Text style={styles.checkboxLabel}>I agree to the terms and conditions and privacy policy of the application.</Text>
      </View>

      <TouchableOpacity style={styles.getStartedButton} onPress={() => router.push('/(tabs)')}>
        <Text style={styles.getStartedButtonText}>Get Started</Text>
      </TouchableOpacity>
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
  uploadButton: {
    backgroundColor: '#2C2C2E',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#4A4A4A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadButtonText: {
    color: '#8E8E93',
    fontSize: 16,
  },
  uploadButtonIcon: {
    color: 'white',
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 12,
  },
  checkboxLabel: {
    color: 'white',
    fontSize: 14,
    flex: 1,
  },
  getStartedButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  getStartedButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default UploadCVScreen;
