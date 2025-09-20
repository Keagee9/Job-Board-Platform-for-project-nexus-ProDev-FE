
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const AccountSettingsScreen = () => {
  const router = useRouter();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account Settings</Text>
        <View style={{width: 24}} />
      </View>

      <View style={styles.settingItem}>
        <Ionicons name="notifications-outline" size={24} color="white" />
        <Text style={styles.settingText}>Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={notifications ? '#f5dd4b' : '#f4f3f4'} />
      </View>

      <TouchableOpacity style={styles.settingItem} onPress={() => router.push('../change-password')}>
        <Ionicons name="lock-closed-outline" size={24} color="white" />
        <Text style={styles.settingText}>Change Password</Text>
        <Ionicons name="chevron-forward" size={24} color="#8E8E93" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem} onPress={() => router.push('../contact-support')}>
        <Ionicons name="call-outline" size={24} color="white" />
        <Text style={styles.settingText}>Contact Support</Text>
        <Ionicons name="chevron-forward" size={24} color="#8E8E93" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem} onPress={() => router.push('../logout')}>
        <Ionicons name="log-out-outline" size={24} color="white" />
        <Text style={styles.settingText}>Logout</Text>
        <Ionicons name="chevron-forward" size={24} color="#8E8E93" />
      </TouchableOpacity>

      <View style={styles.settingItem}>
        <Ionicons name="moon-outline" size={24} color="white" />
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} trackColor={{false: '#767577', true: '#81b0ff'}} thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'} />
      </View>
    </View>
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
    marginBottom: 40,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2E',
  },
  settingText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 16,
    flex: 1,
  },
});

export default AccountSettingsScreen;
