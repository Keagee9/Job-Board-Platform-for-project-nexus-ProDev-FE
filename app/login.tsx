
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo} />
        <Text style={styles.brandName}>WORKSCOUT</Text>
        <Text style={styles.tagline}>FIND YOUR DREAM JOB</Text>
      </View>
      <Text style={styles.title}>Login to Your WorkScout Account</Text>
      <Text style={styles.subtitle}>
        Welcome back to WorkScout. Login to continue your job search.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Please enter your email address."
      />
      <TextInput
        style={styles.input}
        placeholder="Text"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Login with Google</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>
        Don't have an account? <Link href="/(tabs)" style={styles.loginLink}>Sign up here</Link>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 40,
    marginBottom: 10,
  },
  brandName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  tagline: {
    fontSize: 16,
    color: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: '#2C2C2E',
    borderRadius: 10,
    padding: 15,
    color: 'white',
    marginBottom: 15,
  },
  button: {
    width: '100%',
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  googleButton: {
    width: '100%',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  googleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  loginText: {
    color: 'gray',
  },
  loginLink: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
