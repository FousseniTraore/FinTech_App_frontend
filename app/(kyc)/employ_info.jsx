import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { router } from "expo-router";

const employ_info = () => {

    const [form, setForm] = useState({
        employement_status: "",
        occupation: "",
        employer_name: "",
        monthly_income: "",
        year_of_employment: "",
      });

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Employment Information</Text>
                <FormField
                    title="Employment status"
                    value={form.employement_status}
                    handleChangeText={(e) => setForm({ ...form, employement_status: e })}
                    otherStyles={styles.formField}
                    keyboardType="email-address"
                />
                <FormField
                    title="Occupation"
                    value={form.occupation}
                    handleChangeText={(e) => setForm({ ...form, occupation: e })}
                    otherStyles={styles.formField}
                    keyboardType="email-address"
                />
                <FormField
                    title="Employer Name"
                    value={form.employer_name}
                    handleChangeText={(e) => setForm({ ...form, employer_name: e })}
                    otherStyles={styles.formField}
                    keyboardType="email-address"
                />
                <FormField
                    title="Monthly income"
                    value={form.monthly_income}
                    handleChangeText={(e) => setForm({ ...form, monthly_income: e })}
                    otherStyles={styles.formField}
                    keyboardType="email-address"
                />
                <FormField
                    title="Year of employment"
                    value={form.year_of_employment}
                    handleChangeText={(e) => setForm({ ...form, year_of_employment: e })}
                    otherStyles={styles.formField}
                    keyboardType="email-address"
                />
                
                <CustomButton
                    title="next"
                    handlePress={() => router.push("/id_verification")}
                    containerStyles={styles.buttonContainer}
                    textStyles={styles.buttonText}
                    // isLoading={isSubmitting}
                />

            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default employ_info

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Assuming primary color
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
})