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
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Personal Information</Text>
                <FormField
                        title="First Name"

                        value={form.first_name}
                        handleChangeText={(e) => setForm({ ...form, first_name: e })}
                        otherStyles={styles.formField}
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Last Name"

                        value={form.last_name}
                        handleChangeText={(e) => setForm({ ...form, last_name: e })}
                        otherStyles={styles.formField}
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Date of birth"
                        value={form.dateOfBirth}
                        handleChangeText={(e) => setForm({ ...form, dateOfBirth: e })}
                        otherStyles={styles.formField}
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Gender"
                        value={form.gender}
                        handleChangeText={(e) => setForm({ ...form, gender: e })}
                        otherStyles={styles.formField}
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Nationality"
                        value={form.nationality}
                        handleChangeText={(e) => setForm({ ...form, nationality: e })}
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
        </ScrollView>
    </SafeAreaView>
  )
}

export default personal_info

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
      signupLink: {
        fontSize: 16,
        color: '#FFD700', // Assuming secondary color
        marginLeft: 4,
      },
})