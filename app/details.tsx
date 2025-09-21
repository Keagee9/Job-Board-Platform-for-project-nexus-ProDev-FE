
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';

const DetailsScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.backButton}>←</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Details</Text>
            <TouchableOpacity>
                <Text style={styles.saveButton}>🔖</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.jobHeader}>
            <Image source={{uri: 'https://assets/images/netflix.png'}} style={styles.logo} />
            <View>
                <Text style={styles.jobTitle}>UI designer</Text>
                <Text style={styles.companyName}>Netflix</Text>
            </View>
        </View>

        <View style={styles.jobInfo}>
            <Text style={styles.infoText}>📍 Jakarta, Indonesia - Onsite</Text>
            <Text style={styles.infoText}>$ 12,000</Text>
        </View>

        <View style={styles.jobStats}>
            <View style={styles.stat}>
                <Text style={styles.statTitle}>Experience</Text>
                <Text style={styles.statValue}>2 - 6 Years</Text>
            </View>
            <View style={styles.stat}>
                <Text style={styles.statTitle}>Job Type</Text>
                <Text style={styles.statValue}>Fulltime</Text>
            </View>
            <View style={styles.stat}>
                <Text style={styles.statTitle}>Level</Text>
                <Text style={styles.statValue}>Entry level</Text>
            </View>
        </View>

        <Text style={styles.updatedText}>Updated 23 days ago</Text>

        <View style={styles.managerInfo}>
            <Image source={{uri: 'https://assets/images/autodesk.png'}} style={styles.managerPhoto} />
            <View>
                <Text style={styles.managerName}>Nabila Nanda</Text>
                <Text style={styles.managerStatus}>Online 2 days ago</Text>
            </View>
        </View>

        <View style={styles.skillsSection}>
            <Text style={styles.sectionTitle}>Must Have Skills</Text>
            <View style={styles.skillsContainer}>
                {['UI Design', 'Teamwork', 'UX Design', 'Adaptability', 'Critical Thnking', 'Analytical Skills', 'Creative Design', 'Communication Skills'].map(skill => (
                    <View key={skill} style={styles.skillBadge}>
                        <Text style={styles.skillText}>{skill}</Text>
                    </View>
                ))}
            </View>
        </View>

        <View style={styles.descriptionSection}>
            <Text style={styles.sectionTitle}>Job Description</Text>
            <Text style={styles.descriptionText}>
                Netflix is seeking a talented UI Designer to join our design team. In this role, you will be responsible for crafting innovative and engaging user interfaces for our streaming platform. You will work closely with UX
            </Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => router.push('/(tabs)')}>
            <Text style={styles.footerIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => router.push('/search-results')}>
            <Text style={styles.footerIcon}>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerIcon}>📄</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => router.push('/(tabs)/profile')}>
            <Text style={styles.footerIcon}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E',
    },
    scrollContainer: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        color: 'white',
        fontSize: 24,
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    saveButton: {
        color: 'white',
        fontSize: 24,
    },
    jobHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 15,
    },
    jobTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    companyName: {
        color: '#8E8E93',
        fontSize: 16,
    },
    jobInfo: {
        marginBottom: 20,
    },
    infoText: {
        color: '#8E8E93',
        fontSize: 16,
        marginBottom: 5,
    },
    jobStats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    stat: {
        alignItems: 'center',
    },
    statTitle: {
        color: '#8E8E93',
        fontSize: 14,
    },
    statValue: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    updatedText: {
        color: '#8E8E93',
        fontSize: 12,
        marginBottom: 20,
    },
    managerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    managerPhoto: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    managerName: {
        color: 'white',
        fontSize: 16,
    },
    managerStatus: {
        color: '#8E8E93',
        fontSize: 14,
    },
    skillsSection: {
        marginBottom: 20,
    },
    sectionTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    skillBadge: {
        backgroundColor: '#2C2C2E',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        margin: 5,
    },
    skillText: {
        color: 'white',
    },
    descriptionSection: {
        marginBottom: 20,
    },
    descriptionText: {
        color: '#8E8E93',
        fontSize: 16,
        lineHeight: 24,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1C1C1E',
        borderTopWidth: 1,
        borderTopColor: '#2C2C2E',
        paddingVertical: 10,
    },
    footerButton: {
        alignItems: 'center',
    },
    footerIcon: {
        color: 'white',
        fontSize: 24,
    },
});

export default DetailsScreen;
