import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; 
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello User</Text>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Text style={styles.balanceText}>Account Balance</Text>
          <Text style={styles.balanceAmount}>XOF 100,000.00</Text>
        </View>
        <View style={styles.buttonRow}>
        <CustomButton
            title="Request loan"
            handlePress={() => router.push("/(routes)/request_loan")}
            containerStyles={styles.buttonContainer}
            textStyles={styles.buttonText}
            // isLoading={isSubmitting}
          />
          <CustomButton
            title="Repay loan"
            handlePress={() => router.push("/(routes)/repay_loan")}
            containerStyles={styles.buttonContainer}
            textStyles={styles.buttonText}
            // isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  notificationIcon: {
    padding: 10,
  },
  card: {
    width: '100%',

    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  balanceText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonContainer: {
    backgroundColor: '#0000FF',
    padding: 15,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
