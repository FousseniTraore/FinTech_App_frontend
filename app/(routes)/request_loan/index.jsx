import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../../components/FormField'
import CustomButton from '../../../components/CustomButton'
import { useState } from "react";

const index = () => {
    const [form, setForm] = useState({
        amount: "",
      });
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
            <Text style={styles.title}>Request Loan</Text>
            <Text>Your credit limit is: 100.000 XOF</Text>
            <FormField
                title="Enter Loan Amount"
                value={form.amount}
                handleChangeText={(e) => setForm({ ...form, amount: e })}
                otherStyles={styles.formField}
                keyboardType="email-address"
            />
            <Text style={styles.title}>Loan repayment terms</Text>
            <Text>Your loan will be repaid over four instalments</Text>
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
            <CustomButton
                title="Submit your loan request"
                handlePress={() => router.push("/employ_info")}
                containerStyles={styles.buttonContainer}
                textStyles={styles.buttonText}
                // isLoading={isSubmitting}
            />
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', //
      },
      scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
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
})
