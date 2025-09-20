
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const recentSearches = [
    { term: 'Design', location: 'Jakarta, Indonesia' },
  ];

  const searchSuggestions = [
    'Product Manager',
    'Product Owner',
    'UI/UX Designer',
    'User Researcher',
    'Visual Designer',
    'Deskprint',
    'Graphic Design',
  ];

  const suggestedCategories = [
    'Design',
    'Product Management',
    'Visual Designer',
  ];

  const popularCategories = [
    'Administrasi',
    'Business Development',
    'Customer Services',
    'Digital Marketing',
    'Finance',
    'Human Resources',
  ];

  const filteredSuggestions = searchSuggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Job" 
            placeholderTextColor="#8E8E93"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Text style={styles.searchIcon}>-</Text>
        </View>

        {searchQuery.length > 0 ? (
          <ScrollView>
            {filteredSuggestions.map((suggestion, index) => (
              <TouchableOpacity key={index} style={styles.suggestionItem}>
                <Text style={styles.suggestionText}>{suggestion}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <ScrollView>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Recent Searches</Text>
                <TouchableOpacity>
                  <Text style={styles.clearButton}>Clear</Text>
                </TouchableOpacity>
              </View>
              {recentSearches.map((search, index) => (
                <View key={index} style={styles.recentSearchItem}>
                  <Text style={styles.recentSearchIcon}>-</Text>
                  <View>
                    <Text style={styles.recentSearchTerm}>{search.term}</Text>
                    <Text style={styles.recentSearchLocation}>{search.location}</Text>
                  </View>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Try Searching for</Text>
              {searchSuggestions.map((suggestion, index) => (
                <TouchableOpacity key={index} style={styles.suggestionItem}>
                  <Text style={styles.suggestionIcon}>-</Text>
                  <Text style={styles.suggestionText}>{suggestion}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Suggest Categories</Text>
              {suggestedCategories.map((category, index) => (
                <TouchableOpacity key={index} style={styles.categoryItem}>
                  <Text style={styles.categoryText}>{category}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Popular Categories</Text>
              {popularCategories.map((category, index) => (
                <TouchableOpacity key={index} style={styles.categoryItem}>
                  <Text style={styles.categoryText}>{category}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C2C2E',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    paddingVertical: 12,
  },
  searchIcon: {
    fontSize: 20,
    color: '#8E8E93',
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
  clearButton: {
    color: '#4A90E2',
    fontSize: 14,
  },
  recentSearchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  recentSearchIcon: {
    fontSize: 20,
    color: '#8E8E93',
    marginRight: 12,
  },
  recentSearchTerm: {
    color: 'white',
    fontSize: 16,
  },
  recentSearchLocation: {
    color: '#8E8E93',
    fontSize: 14,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  suggestionIcon: {
    fontSize: 20,
    color: '#8E8E93',
    marginRight: 12,
  },
  suggestionText: {
    color: 'white',
    fontSize: 16,
  },
  categoryItem: {
    marginBottom: 16,
  },
  categoryText: {
    color: '#8E8E93',
    fontSize: 16,
  },
});

export default SearchScreen;
