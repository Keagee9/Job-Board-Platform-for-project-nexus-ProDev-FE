
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { useAppContext } from '../../context/AppContext';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const JobCard = ({ job }) => {
  const router = useRouter();

  return (
    <View style={styles.jobCard}>
      <View style={styles.jobCardHeader}>
        <Image source={job.logo} style={styles.jobCardLogo} />
        <Text style={styles.jobCardCompany}>{job.company}</Text>
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.jobCardTitle}>{job.title}</Text>
      <Text style={styles.jobCardLocation}>{job.location}</Text>
      <View style={styles.jobCardTags}>
        <Text style={styles.jobCardTag}>{job.type}</Text>
        <Text style={styles.jobCardTag}>{job.contract}</Text>
        <Text style={styles.jobCardTag}>{job.level}</Text>
      </View>
      <View style={styles.jobCardFooter}>
        <Text style={styles.jobCardDate}>{job.date}</Text>
        <TouchableOpacity onPress={() => router.push('/details')}>
          <Text style={styles.jobCardDetails}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SpecializationCard = ({ specialization }) => (
  <View style={styles.specializationCard}>
    <Ionicons name={specialization.icon} size={24} color="white" />
    <Text style={styles.specializationTitle}>{specialization.title}</Text>
  </View>
);

const HomeScreen = () => {
  const { appState } = useAppContext();
  const router = useRouter();

  const jobs = [
    {
      logo: { uri: 'https://cdn-icons-png.flaticon.com/512/145/145805.png' },
      company: 'Invision',
      title: 'UI designer',
      location: 'Jakarta, Indonesia - Onsite',
      type: 'Remote',
      contract: 'Contract',
      level: 'Junior',
      date: '3 days ago',
    },
    {
      logo: { uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968804.png' },
      company: 'Telegram',
      title: 'Digital Marketer',
      location: 'Jakarta, Indonesia',
      type: 'Remote',
      contract: 'Contract',
      level: 'Senior',
      date: '3 days ago',
    },
  ];

  const specializations = [
    { icon: 'cash-outline', title: 'Finance' },
    { icon: 'code-slash-outline', title: 'Technology' },
    { icon: 'megaphone-outline', title: 'Marketing' },
  ];

  const recommendations = [
    {
      logo: { uri: 'https://cdn-icons-png.flaticon.com/512/732/732228.png' },
      company: 'Netflix',
      title: 'UI Designer',
      location: 'Jakarta, Indonesia - Onsite',
      type: 'Remote',
      contract: 'Contract',
      level: 'Junior',
      date: '3 days ago',
    },
    {
      logo: { uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968804.png' },
      company: 'Telegram',
      title: 'UI designer',
      location: 'Jakarta, Indonesia - Onsite',
      type: 'Remote',
      contract: 'Contract',
      level: 'Junior',
      date: '3 days ago',
    },
    {
      logo: { uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968804.png' },
      company: 'Autodesk',
      title: 'Human Resources',
      location: 'Jakarta, Indonesia - Onsite',
      type: 'Remote',
      contract: 'Contract',
      level: 'Junior',
      date: '3 days ago',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/women/68.jpg' }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.userName}>{appState.fullName ? appState.fullName.split(' ')[0] : 'Nabilla'}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.userTitle}>{appState.professionalTitle.join(', ') || 'UI/UX Designer'}</Text>
                  <Ionicons name="chevron-down-outline" size={16} color="#8E8E93" />
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => router.push('./notifications')}>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search Job" placeholderTextColor="#8E8E93" />
          <TouchableOpacity onPress={() => router.push('./filter-screen')}>
            <Ionicons name="search-outline" size={24} color="#8E8E93" />
          </TouchableOpacity>
        </View>

        <View style={styles.filtersContainer}>
          <Text style={styles.filterText}>Most Relevant</Text>
          <Ionicons name="location-outline" size={16} color="#8E8E93" />
          <Text style={styles.filterLocation}>Jakarta, Indonesia</Text>
        </View>

        <View style={styles.promoCard}>
          <Text style={styles.promoTitle}>10 ways to increase your chances of getting hired</Text>
          <TouchableOpacity style={styles.promoButton}>
            <Text style={styles.promoButtonText}>Read a blog</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.curatedJobsTitle}>Curated Jobs For You</Text>

        <View style={styles.jobCategories}>
          <TouchableOpacity style={[styles.jobCategory, styles.jobCategoryActive]}>
            <Text style={[styles.jobCategoryText, styles.jobCategoryTextActive]}>Design</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.jobCategory}>
            <Text style={styles.jobCategoryText}>Business</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.jobCategory}>
            <Text style={styles.jobCategoryText}>Marketing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.jobCategory}>
            <Text style={styles.jobCategoryText}>Technology</Text>
          </TouchableOpacity>
        </View>

        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}

        <Text style={styles.sectionTitle}>Specialization</Text>
        <View style={styles.specializationContainer}>
          {specializations.map((spec, index) => (
            <SpecializationCard key={index} specialization={spec} />
          ))}
        </View>

        <Text style={styles.sectionTitle}>Recommendation</Text>
        {recommendations.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  contentContainer: {
    width: '100%',
    maxWidth: 800,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  userName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  userTitle: {
    color: '#8E8E93',
    fontSize: 14,
    marginRight: 4
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C2C2E',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    paddingVertical: 12,
  },
  filtersContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'center'
  },
  filterText: {
    color: 'white',
    marginRight: 20,
  },
  filterLocation: {
    color: '#8E8E93',
    marginLeft: 4
  },
  promoCard: {
    backgroundColor: '#00A896',
    borderRadius: 8,
    padding: 20,
    marginBottom: 30,
  },
  promoTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    width: '70%',
    marginBottom: 12,
  },
  promoButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  promoButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  curatedJobsTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  jobCategories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  jobCategory: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4A4A4A',
  },
  jobCategoryActive: {
    backgroundColor: 'white',
    borderColor: 'white',
  },
  jobCategoryText: {
    color: '#8E8E93',
  },
  jobCategoryTextActive: {
    color: '#1C1C1E',
    fontWeight: 'bold',
  },
  jobCard: {
    backgroundColor: '#2C2C2E',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  jobCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  jobCardLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  jobCardCompany: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  jobCardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  jobCardLocation: {
    color: '#8E8E93',
    marginBottom: 12,
  },
  jobCardTags: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  jobCardTag: {
    color: '#8E8E93',
    backgroundColor: '#4A4A4A',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
    fontSize: 12,
  },
  jobCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  jobCardDate: {
    color: '#8E8E93',
    fontSize: 12,
  },
  jobCardDetails: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },
  specializationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  specializationCard: {
    backgroundColor: '#2C2C2E',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    width: '30%',
  },
  specializationIcon: {
    fontSize: 24,
    color: 'white',
    marginBottom: 8,
  },
  specializationTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
