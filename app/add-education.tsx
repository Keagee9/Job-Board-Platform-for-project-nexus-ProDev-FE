
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const AddEducationScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.overlay} onPress={() => router.back()} />
      <View style={styles.modal}>
        <ScrollView>
            <View style={styles.header}>
            <Text style={styles.headerTitle}>Add Education</Text>
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="close" size={24} color="#8E8E93" />
            </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.addLogoButton}>
            <Text style={styles.addLogoText}>Add Logo</Text>
            <Ionicons name="add" size={20} color="white" />
            </TouchableOpacity>

            <TextInput
            style={styles.input}
            placeholder="University"
            placeholderTextColor="#8E8E93"
            />
            <TextInput
            style={styles.input}
            placeholder="Degree"
            placeholderTextColor="#8E8E93"
            />
            <TextInput
            style={styles.input}
            placeholder="Field of study"
            placeholderTextColor="#8E8E93"
            />

            <View style={styles.dateContainer}>
            <TextInput
                style={[styles.input, styles.dateInput]}
                placeholder="Start date"
                placeholderTextColor="#8E8E93"
            />
            <TextInput
                style={[styles.input, styles.dateInput]}
                placeholder="End date"
                placeholderTextColor="#8E8E93"
            />
            </View>

            <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Education</Text>
            </TouchableOpacity>
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
        maxHeight: '80%',
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
    addLogoButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#4A4A4A',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    addLogoText: {
        color: 'white',
        fontSize: 16,
    },
    input: {
        backgroundColor: '#2C2C2E',
        color: 'white',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        fontSize: 16,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateInput: {
        width: '48%',
    },
    addButton: {
        backgroundColor: '#3A3A3C',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AddEducationScreen;
