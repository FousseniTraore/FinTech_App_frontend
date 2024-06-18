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
    <SafeAreaView>
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Personal Information</Text>
                <View>
                    <FormField
                        title="Employment status"
                        value={form.employement_status}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles={styles.formField}
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Occupation"
                        value={form.occupation}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles={styles.formField}
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Employer Name"
                        value={form.employer_name}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles={styles.formField}
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Monthly income"
                        value={form.monthly_income}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles={styles.formField}
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Year of employment"
                        value={form.year_of_employment}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles={styles.formField}
                        keyboardType="email-address"
                    />
                    
                    <CustomButton
                        title="next"
                        handlePress={() => router.push("/financial_info")}
                        containerStyles={styles.buttonContainer}
                        textStyles={styles.buttonText}
                        // isLoading={isSubmitting}
                    />

                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default employ_info

const styles = StyleSheet.create({})