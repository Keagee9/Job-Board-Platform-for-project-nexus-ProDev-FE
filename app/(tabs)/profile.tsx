
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Details</Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/68.jpg' }}
          style={styles.avatar}
        />
        <View style={styles.nameContainer}>
            <Text style={styles.name}>Nabilla</Text>
            <Ionicons name="create-outline" size={20} color="#8E8E93" />
        </View>
        <Text style={styles.location}>Indonesia</Text>
      </View>

      <View style={styles.statsSection}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Applied</Text>
          <Text style={styles.statValue}>12 Jobs</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Reviewed</Text>
          <Text style={styles.statValue}>8 Jobs</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Interview</Text>
          <Text style={styles.statValue}>3 Jobs</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <TouchableOpacity>
            <Ionicons name="create-outline" size={20} color="#8E8E93" />
          </TouchableOpacity>
        </View>
        <View style={styles.experienceItem}>
            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/732/732228.png'}} style={styles.companyLogo} />
          <View style={styles.experienceDetails}>
            <Text style={styles.jobTitle}>UI/UX Designer</Text>
            <Text style={styles.company}>Netflix</Text>
          </View>
          <View style={styles.experiencePeriod}>
            <Text style={styles.location}>California, US</Text>
            <Text style={styles.date}>Dec 23 - Feb 24</Text>
          </View>
        </View>
        <View style={styles.experienceItem}>
        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968804.png'}} style={styles.companyLogo} />
          <View style={styles.experienceDetails}>
            <Text style={styles.jobTitle}>Junior UX Designer</Text>
            <Text style={styles.company}>Qivi</Text>
          </View>
          <View style={styles.experiencePeriod}>
            <Text style={styles.location}>California, US</Text>
            <Text style={styles.date}>Aug 22 - Dec 23</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Education</Text>
          <TouchableOpacity>
            <Ionicons name="create-outline" size={20} color="#8E8E93" />
          </TouchableOpacity>
        </View>
        <View style={styles.educationItem}>
        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/2933/2933478.png'}} style={styles.educationLogo} />
          <View style={styles.educationDetails}>
            <Text style={styles.degree}>Computer Science</Text>
            <Text style={styles.university}>Indonesia University</Text>
          </View>
          <View style={styles.educationPeriod}>
            <Text style={styles.degree}>Bachelor (4.0)</Text>
            <Text style={styles.date}>2016 - 2020</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Skill</Text>
          <TouchableOpacity>
            <Ionicons name="create-outline" size={20} color="#8E8E93" />
          </TouchableOpacity>
        </View>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>Figma</Text>
          <Text style={styles.skill}>Photoshop</Text>
          <Text style={styles.skill}>User Interviews</Text>
          <Text style={styles.skill}>User Research</Text>
          <Text style={styles.skill}>Usability Testing</Text>
          <Text style={styles.skill}>Interaction Design</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Language</Text>
          <TouchableOpacity>
            <Ionicons name="create-outline" size={20} color="#8E8E93" />
          </TouchableOpacity>
        </View>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>English</Text>
          <Text style={styles.skill}>Mandarin</Text>
          <Text style={styles.skill}>Indonesia</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>CV</Text>
          <TouchableOpacity>
            <Text style={styles.makeCv}>Make a CV +</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cvItem}>
          <Ionicons name="document-text-outline" size={32} color="#FF453A" />
          <View style={styles.cvDetails}>
            <Text style={styles.cvTitle}>CV UI Designer Eng.pdf</Text>
            <Text style={styles.cvInfo}>1.45 Mb . 23 Agu 2024 at 13:20 am</Text>
          </View>
        </View>
      </View>
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
    marginBottom: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 8
  },
  location: {
    color: '#8E8E93',
    fontSize: 16,
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#4A4A4A',
    paddingVertical: 16,
  },
  stat: {
    alignItems: 'center',
  },
  statLabel: {
    color: '#8E8E93',
    fontSize: 14,
    marginBottom: 4,
  },
  statValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  experienceItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  companyLogo: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 16,
  },
  experienceDetails: {
    flex: 1,
  },
  jobTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  company: {
    color: '#8E8E93',
    fontSize: 14,
  },
  experiencePeriod: {
    alignItems: 'flex-end',
  },
  date: {
    color: '#8E8E93',
    fontSize: 14,
  },
  educationItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  educationLogo: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 16,
    backgroundColor: '#FFD60A'
  },
  educationDetails: {
    flex: 1,
  },
  degree: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  university: {
    color: '#8E8E93',
    fontSize: 14,
  },
  educationPeriod: {
    alignItems: 'flex-end',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skill: {
    backgroundColor: '#2C2C2E',
    color: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  makeCv: {
    color: '#4A90E2',
    fontSize: 16,
  },
  cvItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C2C2E',
    borderRadius: 8,
    padding: 16,
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
});

export default ProfileScreen;
