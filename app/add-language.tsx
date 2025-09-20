
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const AddLanguageScreen = () => {
  const router = useRouter();
  const languages = ['English', 'Español', '汉语/中文', 'Русский', 'العربية', 'Français', 'Deutsch', '日本語', 'Bahasa Indonesia'];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.overlay} onPress={() => router.back()} />
      <View style={styles.modal}>
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Add Language</Text>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="close" size={24} color="#8E8E93" />
                </TouchableOpacity>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Language"
                placeholderTextColor="#8E8E93"
            />

            <View style={styles.languagesContainer}>
                {languages.map((lang, index) => <Text key={index} style={styles.languageChip}>{lang}</Text>)}
                 <TouchableOpacity style={styles.moreButton}>
                    <Text style={styles.moreText}>More</Text>
                    <Ionicons name="arrow-forward" size={16} color="#8E8E93" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add Language</Text>
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
        maxHeight: '70%',
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
    input: {
        backgroundColor: '#2C2C2E',
        color: 'white',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        fontSize: 16,
    },
    languagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    languageChip: {
        backgroundColor: '#2C2C2E',
        color: 'white',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 8,
        marginBottom: 8,
        fontSize: 14
    },
    moreButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    moreText: {
        color: '#8E8E93',
        marginRight: 4,
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

export default AddLanguageScreen;
