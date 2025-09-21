
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const jobs = [
  {
    company: 'Netflix',
    title: 'Accounting',
    location: 'Jakarta, Indonesia',
    tags: ['Remote', 'Contract', 'Junior'],
    postDate: '3 days ago',
  },
  {
    company: 'Telegram',
    title: 'UI designer',
    location: 'Jakarta, Indonesia',
    tags: ['Remote', 'Contract', 'Junior'],
    postDate: '3 days ago',
  },
  {
    company: 'Autodesk',
    title: 'Human Resources',
    location: 'Jakarta, Indonesia - Onsite',
    tags: ['Remote', 'Contract', 'Junior'],
    postDate: '3 days ago',
  },
];

const SearchResultsScreen = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Design"
            placeholderTextColor="#8E8E93"
          />
          <Ionicons name="search-outline" size={24} color="#8E8E93" />
        </View>
        <View style={styles.filterContainer}>
            <TouchableOpacity style={styles.filterDropdown}>
                <Text style={styles.filterText}>Most Relevant</Text>
                <Ionicons name="chevron-down-outline" size={16} color="#8E8E93" />
            </TouchableOpacity>
            <View style={styles.locationContainer}>
                <Ionicons name="location-outline" size={16} color="#8E8E93" />
                <Text style={styles.locationText}>Jakarta, Indonesia</Text>
            </View>
        </View>
        <View style={styles.filterButtonsContainer}>
            <TouchableOpacity style={styles.filterButton} onPress={() => router.push('./filter-screen')}>
                <Ionicons name="filter-outline" size={16} color="#fff" />
                <Text style={styles.filterButtonText}>Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterDropdown}>
                <Text style={styles.filterText}>Job Role</Text>
                <Ionicons name="chevron-down-outline" size={16} color="#8E8E93" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterDropdown}>
                <Text style={styles.filterText}>Work Arrangement</Text>
                <Ionicons name="chevron-down-outline" size={16} color="#8E8E93" />
            </TouchableOpacity>
        </View>
        <Text style={styles.jobsAvailableText}>20 Jobs Available</Text>
      </View>
      {jobs.length > 0 ? (
        <View style={styles.jobsContainer}>
            {jobs.map((job, index) => (
            <View key={index} style={styles.jobCard}>
                <View style={styles.jobCardHeader}>
                    <View style={styles.companyLogo} />
                    <View>
                        <Text style={styles.jobTitle}>{job.title}</Text>
                        <Text style={styles.jobCompany}>{job.company}</Text>
                        <Text style={styles.jobLocation}>{job.location}</Text>
                    </View>
                    <Ionicons name="bookmark-outline" size={24} color="#8E8E93" />
                </View>
                <View style={styles.jobCardTags}>
                    {job.tags.map((tag, i) => (
                        <View key={i} style={styles.jobTag}>
                            <Text style={styles.jobTagText}>{tag}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.jobCardFooter}>
                    <Text style={styles.postDate}>{job.postDate}</Text>
                    <TouchableOpacity onPress={() => router.push('/details')}>
                        <Text style={styles.viewDetailsText}>View Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
            ))}
        </View>
      ) : (
        <View style={styles.noResultsContainer}>
          <Ionicons name="sad-outline" size={100} color="#8E8E93" />
          <Text style={styles.noResultsTitle}>Not Found</Text>
          <Text style={styles.noResultsSubtitle}>Sorry, no job available</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#1C1C1E',
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
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  filterDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C2C2E',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  filterText: {
    color: '#fff',
    marginRight: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: '#8E8E93',
    marginLeft: 4,
  },
    filterButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4A90E2',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    filterButtonText: {
        color: '#fff',
        marginLeft: 8,
    },
  jobsAvailableText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  jobsContainer: {
    paddingHorizontal: 24,
  },
  jobCard: {
    backgroundColor: '#2C2C2E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
    jobCardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    companyLogo: {
        width: 40,
        height: 40,
        borderRadius: 8,
        marginRight: 12,
        backgroundColor: '#4A4A4A',
    },
    jobTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    jobCompany: {
        color: '#8E8E93',
        fontSize: 14,
    },
    jobLocation: {
        color: '#8E8E93',
        fontSize: 14,
    },
    jobCardTags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 12,
    },
    jobTag: {
        backgroundColor: '#4A4A4A',
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginRight: 8,
        marginBottom: 8,
    },
    jobTagText: {
        color: '#fff',
        fontSize: 12,
    },
    jobCardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    postDate: {
        color: '#8E8E93',
        fontSize: 12,
    },
    viewDetailsText: {
        color: '#4A90E2',
        fontSize: 14,
        fontWeight: 'bold',
    },
    noResultsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '30%'
    },
    noResultsTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    noResultsSubtitle: {
        color: '#8E8E93',
        fontSize: 16,
        marginTop: 8,
    },
});

export default SearchResultsScreen;
