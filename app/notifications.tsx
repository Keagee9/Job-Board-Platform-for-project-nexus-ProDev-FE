
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const NotificationScreen = () => {
  const router = useRouter();

  const notifications = [];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 24 }} />
      </View>

      {notifications.length === 0 ? (
        <View style={styles.noNotificationsContainer}>
          <View style={styles.noNotificationsIconContainer}>
            <Ionicons name="notifications" size={64} color="#007AFF" />
          </View>
          <Text style={styles.noNotificationsTitle}>No Notifications</Text>
          <Text style={styles.noNotificationsBody}>You have no notifications at this time</Text>
          <Text style={styles.noNotificationsBody}>Thank You</Text>
        </View>
      ) : (
        <ScrollView>
          {notifications.map((notification, index) => (
            <View key={index} style={styles.notificationCard}>
              <View style={styles.notificationHeader}>
                <View style={styles.notificationIcon} />
                <View style={styles.notificationTextContainer}>
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text style={styles.notificationBody}>{notification.body}</Text>
                </View>
              </View>
              <View style={styles.notificationFooter}>
                <Text style={styles.notificationTime}>{notification.time}</Text>
                {notification.type === 'delete' && (
                  <TouchableOpacity>
                    <Text style={styles.deleteText}>Delete</Text>
                  </TouchableOpacity>
                )}
                {notification.type === 'button' && (
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{notification.buttonText}</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationCard: {
    backgroundColor: '#2C2C2E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#4A4A4A',
    marginRight: 16,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationBody: {
    color: '#AEAEB2',
    fontSize: 14,
    marginTop: 4,
  },
  notificationFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  notificationTime: {
    color: '#8E8E93',
    fontSize: 12,
  },
  deleteText: {
    color: '#FF453A',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#3A3A3C',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  noNotificationsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noNotificationsIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#2C2C2E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  noNotificationsTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  noNotificationsBody: {
    color: '#8E8E93',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default NotificationScreen;
