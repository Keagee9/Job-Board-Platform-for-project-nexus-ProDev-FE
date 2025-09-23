
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView, Platform, Image } from 'react-native';
import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const SignUpScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    router.push('/success');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Ionicons name="diamond-outline" size={48} color="white" />
        </View>
        <Text style={styles.title}>Create Your WorkScout Account</Text>
        <Text style={styles.subtitle}>
          Join WorkScout to find your perfect job. Create an account for personalized matches and career resources.
        </Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Please enter your full name"
          placeholderTextColor="#8E8E93"
          value={fullName}
          onChangeText={setFullName}
          autoCapitalize="words"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Please enter your email address."
          placeholderTextColor="#8E8E93"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Text"
            placeholderTextColor="#8E8E93"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeIcon}>
            <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="#8E8E93" />
          </TouchableOpacity>
        </View>
        <Text style={styles.passwordInfo}>Password must be at least 8 characters long</Text>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton}>
          <Image source={{ uri: 'https://developers.google.com/identity/images/g-logo.png' }} style={styles.googleIcon} />
          <Text style={styles.googleButtonText}>Sign Up with Google</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <Link href="/login" style={styles.loginLink}>Login here</Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60, // Add paddingTop
    paddingBottom: 20, // Add paddingBottom
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#A9A9A9',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 14,
    color: 'white',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    padding: 16,
    color: 'white',
    fontSize: 16,
    marginBottom: 16,
  },
  passwordContainer: {
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
    marginBottom: 8,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    padding: 8,
  },
  passwordInfo: {
    color: '#A9A9A9',
    alignSelf: 'flex-start',
    marginBottom: 20,
    fontSize: 12,
  },
  button: {
    width: '100%',
    backgroundColor: '#3E5A64',
    padding: 18,
    borderRadius: 8,
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
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
    backgroundColor: '#2A2A2A',
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    color: '#A9A9A9',
    textAlign: 'center',
  },
  loginLink: {
    color: '#4A90E2',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default SignUpScreen;
