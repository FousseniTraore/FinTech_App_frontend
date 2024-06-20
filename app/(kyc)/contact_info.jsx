import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { router } from "expo-router";

const contact_info = () => {

    const [form, setForm] = useState({
        email: "",
        phone_number: "",
        street_address: "",
        city: "",
        provice_state: "",
        postal_code: "",
        country: "",
      });

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Contact Information</Text>
                <FormField
                    title="Email"
                    value={form.email}
                    handleChangeText={(e) => setForm({ ...form, email: e })}
                    otherStyles={styles.formField}
                    keyboardType="email-address"
                />
                <FormField
                    title="Phone Number"
                    value={form.phone_number}
                    handleChangeText={(e) => setForm({ ...form, email: e })}
                    otherStyles={styles.formField}
                    keyboardType="email-address"
                />
                <FormField
                    title="Street Address"
                    value={form.street_address}
                    handleChangeText={(e) => setForm({ ...form, email: e })}
                    otherStyles={styles.formField}
                    keyboardType="email-address"
                />
                <FormField
                        title="City"
                        value={form.city}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles={styles.formField}
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Province/State"
                        value={form.provice_state}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles={styles.formField}
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Postal code"
                        value={form.postal_code}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles={styles.formField}
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Country"
                        value={form.country}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles={styles.formField}
                        keyboardType="email-address"
                    />

                    <CustomButton
                        title="next"
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

export default contact_info

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
      signupText: {
        fontSize: 16,
        color: '#AAAAAA',
      },
})