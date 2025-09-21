
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { getAuth, signOut } from 'firebase/auth';

const LogoutScreen = () => {
  const router = useRouter();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.overlay} onPress={() => router.back()} />
      <View style={styles.modal}>
        <Text style={styles.title}>Logout from WorkScout</Text>
        <Text style={styles.subtitle}>Do you want to logout?</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.noButton} onPress={() => router.back()}>
                <Text style={styles.noText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.yesButton} onPress={handleLogout}>
                <Text style={styles.yesText}>Yes</Text>
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
    noButton: {
        backgroundColor: '#2C2C2E',
        paddingVertical: 16,
        paddingHorizontal: 64,
        borderRadius: 8,
    },
    noText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    yesButton: {
        backgroundColor: '#4A90E2',
        paddingVertical: 16,
        paddingHorizontal: 64,
        borderRadius: 8,
    },
    yesText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LogoutScreen;
