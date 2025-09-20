
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SavedScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Saved Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default SavedScreen;
