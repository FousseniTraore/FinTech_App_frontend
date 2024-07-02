import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { useContext, useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import CustomButton from '../../components/CustomButton';
import AppContext from '../AppContext';
import FormField from '../../components/FormField';

const Pay_merchant = () => {
  const { personalInfo } = useContext(AppContext);
  const [form, setForm] = useState({
    merchant: '',
    amount: '',
    description: '',
  });

  const handleNext = () => {
    // Handle the next button press, e.g., form validation, navigation, etc.
    console.log(form);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.toText}>From</Text>
        <View style={styles.card}>
          <Text style={styles.balanceText}>Account Balance</Text>
          <Text style={styles.balanceAmount}>XOF 100,000.00</Text>
        </View>
        <Text style={styles.toText}>To merchant</Text>
        <FormField
          title="Merchant"
          value={form.merchant}
          handleChangeText={(e) => setForm({ ...form, merchant: e })}
          otherStyles={styles.formField}
        />
        <FormField
          title="Amount"
          value={form.amount}
          handleChangeText={(e) => setForm({ ...form, amount: e })}
          otherStyles={styles.formField}
        />
        <FormField
          title="Description"
          value={form.description}
          handleChangeText={(e) => setForm({ ...form, description: e })}
          otherStyles={styles.formField}
        />
        <CustomButton
          title="Next"
          handlePress={handleNext}
          containerStyles={styles.buttonContainer}
          textStyles={styles.buttonText}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pay_merchant;

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
  toText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 18,
    marginBottom: 10,
  },
  formField: {
    width: '100%',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    marginTop: 28,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
