import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../../components/FormField'
import CustomButton from '../../../components/CustomButton'

const repay_loan = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Mobile');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.boxContainer}>
            <View style={styles.box}>
                <Text style={styles.boxText}>Jan</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.boxText}>Feb</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.boxText}>Mar</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.boxText}>Apr</Text>
            </View>
          </View>
          <Text style={styles.title}>Loan Repayment</Text>
          <View style={styles.card}>
            <Text style={styles.subText}>Pending Repayment</Text>
            <Text style={styles.balanceAmount}>XOF 20,000.00</Text>
            <Text style={styles.subText}>Repayment deadline: 30 Jan</Text>
          </View>
          
          <View style={styles.paymentMethodsContainer}>
            <TouchableOpacity 
              style={[styles.paymentMethod, selectedPaymentMethod === 'Mobile' && styles.selectedPaymentMethod]} 
              onPress={() => setSelectedPaymentMethod('Mobile')}
            >
              <Text style={styles.paymentMethodText}>Mobile</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.paymentMethod, selectedPaymentMethod === 'Card' && styles.selectedPaymentMethod]} 
              onPress={() => setSelectedPaymentMethod('Card')}
            >
              <Text style={styles.paymentMethodText}>Card</Text>
            </TouchableOpacity>
          </View>
          
          {selectedPaymentMethod === 'Mobile' ? (
            <View style={styles.formContainer}>
              <FormField
                title="Mobile Number"
                handleChangeText={(e) => {}}
                otherStyles={styles.formField}
                keyboardType="phone-pad"
              />
            </View>
          ) : (
            <View style={styles.formContainer}>
              <FormField
                title="Card Number"
                handleChangeText={(e) => {}}
                otherStyles={styles.formField}
                keyboardType="numeric"
              />
              <FormField
                title="Expiry Date"
                handleChangeText={(e) => {}}
                otherStyles={styles.formField}
                keyboardType="numeric"
              />
              <FormField
                title="CVV"
                handleChangeText={(e) => {}}
                otherStyles={styles.formField}
                keyboardType="numeric"
              />
            </View>
          )}

          <CustomButton
            title="Submit Payment"
            handlePress={() => {}}
            containerStyles={styles.buttonContainer}
            textStyles={styles.buttonText}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default repay_loan

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  innerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 40,
  },
  card: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  subText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  formField: {
    marginTop: 28,
    color: '#000000',
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
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: '#AAAAAA',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
  },
  box: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    width: '22%', // Ensure the boxes fit within the container
    alignItems: 'center',
  },
  boxText: {
    fontSize: 16,
    color: '#000000',
  },
  paymentMethodsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  paymentMethod: {
    width: '48%',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    alignItems: 'center',
  },
  selectedPaymentMethod: {
    backgroundColor: '#000000',
  },
  paymentMethodText: {
    fontSize: 16,
    color: '#000000',
  },
  formContainer: {
    width: '100%',
  },
});
