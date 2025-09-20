
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const AddExperienceScreen = () => {
  const router = useRouter();
  const [isStillWorking, setIsStillWorking] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.overlay} onPress={() => router.back()} />
      <View style={styles.modal}>
        <ScrollView>
            <View style={styles.header}>
            <Text style={styles.headerTitle}>Add Experience</Text>
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
            placeholder="Job Position"
            placeholderTextColor="#8E8E93"
            />
            <TextInput
            style={styles.input}
            placeholder="Name Company"
            placeholderTextColor="#8E8E93"
            />
            <TextInput
            style={styles.input}
            placeholder="Company Address"
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
                editable={!isStillWorking}
                backgroundColor={isStillWorking ? '#4A4A4A' : '#2C2C2E'}
            />
            </View>

            <View style={styles.switchContainer}>
                <TouchableOpacity onPress={() => setIsStillWorking(!isStillWorking)} style={styles.checkbox}>
                    {isStillWorking && <Ionicons name="checkmark" size={18} color="white" />}
                </TouchableOpacity>
                <Text style={styles.switchText}>I am still working in this role</Text>
            </View>

            <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Experience</Text>
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
        maxHeight: '90%',
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
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: '#8E8E93',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    switchText: {
        color: 'white',
        marginLeft: 10,
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

export default AddExperienceScreen;
