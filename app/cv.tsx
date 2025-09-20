
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const CVScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.overlay} onPress={() => router.back()} />
      <View style={styles.modal}>
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>CV</Text>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="close" size={24} color="#8E8E93" />
                </TouchableOpacity>
            </View>

            <View style={styles.cvItem}>
                <Ionicons name="document-text-outline" size={32} color="#FF453A" />
                <View style={styles.cvDetails}>
                    <Text style={styles.cvTitle}>CV UI Designer Eng.pdf</Text>
                    <Text style={styles.cvInfo}>1.45 Mb . 23 Agu 2024 at 13:20 am</Text>
                </View>
            </View>
            <View style={styles.cvItem}>
                <Ionicons name="document-text-outline" size={32} color="#FF453A" />
                <View style={styles.cvDetails}>
                    <Text style={styles.cvTitle}>CV UI Designer Eng.pdf</Text>
                    <Text style={styles.cvInfo}>1.45 Mb . 23 Agu 2024 at 13:20 am</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.addCvButton}>
                    <Text style={styles.addCvText}>Add CV +</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.applyButton}>
                    <Text style={styles.applyText}>Apply Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
        maxHeight: '60%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    cvItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2C2C2E',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    cvDetails: {
        marginLeft: 16,
    },
    cvTitle: {
        color: 'white',
        fontSize: 16,
    },
    cvInfo: {
        color: '#8E8E93',
        fontSize: 12,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    addCvButton: {
        backgroundColor: '#2C2C2E',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 8,
    },
    addCvText: {
        color: '#4A90E2',
        fontSize: 16,
        fontWeight: 'bold',
    },
    applyButton: {
        backgroundColor: '#4A90E2',
        paddingVertical: 16,
        paddingHorizontal: 48,
        borderRadius: 8,
    },
    applyText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CVScreen;
