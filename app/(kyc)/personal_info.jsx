import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { router } from "expo-router";

const personal_info = () => {

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        dateOfBirth: "",
        gender: "",
        nationality: "",
      });

  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Personal Information</Text>
                <View>
                    <FormField
                        title="First Name"

                        value={form.first_name}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles={styles.formField}
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Last Name"

                        value={form.last_name}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles={styles.formField}
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Date of birth"
                        value={form.dateOfBirth}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles={styles.formField}
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Gender"
                        value={form.gender}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles={styles.formField}
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Nationality"
                        value={form.nationality}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles={styles.formField}
                        keyboardType="email-address"
                    />

                    <CustomButton
                        title="next"
                        handlePress={() => router.push("/contact_info")}
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

export default personal_info

const styles = StyleSheet.create({})