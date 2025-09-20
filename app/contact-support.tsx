
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const ContactSupportScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.overlay} onPress={() => router.back()} />
      <View style={styles.modal}>
        <Text style={styles.title}>Have further question?</Text>
        <Text style={styles.subtitle}>Reach out to us anytime by WhatsApp</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactButton}>
                <Text style={styles.contactText}>Contact Us</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modal: {
        backgroundColor: '#1C1C1E',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 24,
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        color: '#8E8E93',
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    backButton: {
        backgroundColor: '#2C2C2E',
        paddingVertical: 16,
        paddingHorizontal: 48,
        borderRadius: 8,
    },
    backText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    contactButton: {
        backgroundColor: '#4A90E2',
        paddingVertical: 16,
        paddingHorizontal: 48,
        borderRadius: 8,
    },
    contactText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ContactSupportScreen;
