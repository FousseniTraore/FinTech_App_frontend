import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useContext, useEffect, useState } from "react";
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { useRouter, useLocalSearchParams } from "expo-router";
import AppContext from '../AppContext';

const ContactInfo = () => {
  const { contactInfo, setContactInfo} = useContext(AppContext)
  //use to get parameters from personalInfo
    const {personalInfo} = useContext(AppContext);


    const [form, setForm] = useState({
        email: "",
        phone_number: "",
        street_address: "",
        city: "",
        provice_state: "",
        postal_code: "",
        country: personalInfo?.nationality || "",
    });

    useEffect(()=>{
      console.log("PERSONAL INFORMATION HERE", personalInfo)
    }, [])

    const router = useRouter();

    const handleNext = () => {
        router.push({
            pathname: 'employ_info',
        });
        setContactInfo(form)
    };

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
                        handleChangeText={(e) => setForm({ ...form, phone_number: e })}
                        otherStyles={styles.formField}
                        keyboardType="phone-pad"
                    />
                    <FormField
                        title="Street Address"
                        value={form.street_address}
                        handleChangeText={(e) => setForm({ ...form, street_address: e })}
                        otherStyles={styles.formField}
                    />
                    <FormField
                        title="City"
                        value={form.city}
                        handleChangeText={(e) => setForm({ ...form, city: e })}
                        otherStyles={styles.formField}
                    />
                    <FormField
                        title="Province/State"
                        value={form.provice_state}
                        handleChangeText={(e) => setForm({ ...form, provice_state: e })}
                        otherStyles={styles.formField}
                    />
                    <FormField
                        title="Postal Code"
                        value={form.postal_code}
                        handleChangeText={(e) => setForm({ ...form, postal_code: e })}
                        otherStyles={styles.formField}
                        keyboardType="numeric"
                    />
                    <FormField
                        title="Country"
                        value={form.country}
                        handleChangeText={(e) => setForm({ ...form, country: e })}
                        otherStyles={styles.formField}
                    />

                    <CustomButton
                        title="Next"
                        handlePress={handleNext}
                        containerStyles={styles.buttonContainer}
                        textStyles={styles.buttonText}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ContactInfo;

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
});
