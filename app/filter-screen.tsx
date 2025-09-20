
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const FilterScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Filter</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close-outline" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.filterSection}>
          <View style={styles.filterHeader}>
            <Text style={styles.filterTitle}>Date Posted</Text>
            <Ionicons name="chevron-up-outline" size={20} color="#fff" />
          </View>
          <View style={styles.filterOptions}>
            {['Anytime', 'Last Month', 'Last Week', 'Last 24 Hours'].map((option) => (
              <TouchableOpacity key={option} style={styles.option}>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.filterSection}>
          <View style={styles.filterHeader}>
            <Text style={styles.filterTitle}>Job Type</Text>
            <Ionicons name="chevron-up-outline" size={20} color="#fff" />
          </View>
          <View style={styles.filterOptions}>
            {['Full-Time', 'Part-Time', 'Contract', 'Temporary', 'Internship', 'Freelance'].map((option) => (
              <TouchableOpacity key={option} style={styles.option}>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.filterSection}>
          <View style={styles.filterHeader}>
            <Text style={styles.filterTitle}>Location</Text>
            <Ionicons name="chevron-up-outline" size={20} color="#fff" />
          </View>
          <View style={styles.locationInputContainer}>
            <TextInput
              style={styles.locationInput}
              placeholder="Find your location"
              placeholderTextColor="#8E8E93"
            />
            <Ionicons name="search-outline" size={24} color="#8E8E93" />
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.filterSection}>
          <View style={styles.filterHeader}>
            <Text style={styles.filterTitle}>Industry</Text>
            <Ionicons name="chevron-up-outline" size={20} color="#fff" />
          </View>
          <View style={styles.filterOptions}>
            {['Technology', 'Healthcare', 'Finance', 'Education', 'Marketing', 'Engineering', 'Sales', 'Human Resources', 'Creative & Design'].map((option) => (
              <TouchableOpacity key={option} style={styles.option}>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  filterSection: {
    marginBottom: 20,
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  filterTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  option: {
    backgroundColor: '#2C2C2E',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 12,
    marginBottom: 12,
  },
  optionText: {
    color: '#fff',
  },
  divider: {
    height: 1,
    backgroundColor: '#3A3A3C',
    marginVertical: 10,
  },
  locationInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C2C2E',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  locationInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    paddingVertical: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#3A3A3C',
    paddingTop: 20,
  },
  resetButton: {

  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  applyButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    paddingHorizontal: 32,
    paddingVertical: 12,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FilterScreen;
