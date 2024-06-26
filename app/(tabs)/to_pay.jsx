import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const to_pay = () => {
  // Mock data for loan installments
  const installments = [
    { month: 'January', amount: '1000 XOF', dueDate: '2024-07-01' },
    { month: 'February', amount: '1000 XOF', dueDate: '2024-08-01' },
    { month: 'March', amount: '1000 XOF', dueDate: '2024-09-01' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>To Pay</Text>
          {installments.map((installment, index) => (
            <View key={index} style={styles.installmentContainer}>
              <Text style={styles.installmentText}>
                {installment.month}: {installment.amount} - Due Date: {installment.dueDate}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default to_pay;

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
  innerContainer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  installmentContainer: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  installmentText: {
    fontSize: 16,
    color: '#333333',
  },
});
