import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useContext, useState } from "react";
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { useRouter } from "expo-router";
import AppContext from '../AppContext';

const PersonalInfo = () => {
  const { personalInfo, setPersonalInfo } = useContext(AppContext)
   
  const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        dateOfBirth: "",
        gender: "",
        nationality: "",
    });

    const router = useRouter();

    const handleNext = () => {
        router.push({
            pathname: 'contact_info'
        });
        setPersonalInfo(form)
    };

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
                    />
                    <FormField
                        title="Last Name"
                        value={form.last_name}
                        handleChangeText={(e) => setForm({ ...form, last_name: e })}
                        otherStyles={styles.formField}
                    />
                    <FormField
                        title="Date of Birth"
                        value={form.dateOfBirth}
                        handleChangeText={(e) => setForm({ ...form, dateOfBirth: e })}
                        otherStyles={styles.formField}
                    />
                    <FormField
                        title="Gender"
                        value={form.gender}
                        handleChangeText={(e) => setForm({ ...form, gender: e })}
                        otherStyles={styles.formField}
                    />
                    <FormField
                        title="Nationality"
                        value={form.nationality}
                        handleChangeText={(e) => setForm({ ...form, nationality: e })}
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

export default PersonalInfo;

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
