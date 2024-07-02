import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useContext, useState } from "react";
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { useRouter, useLocalSearchParams } from "expo-router";
import AppContext from '../AppContext';

const EmployInfo = () => {
    const { employmentInfo, setEmploymentInfo } = useContext(AppContext);

    const [form, setForm] = useState({
        employment_status: "",
        occupation: "",
        employer_name: "",
        monthly_income: "",
        years_of_employment: "",
    });

    const router = useRouter();

    const handleNext = () => {
        router.push({
            pathname: 'id_verification',
        });
        setEmploymentInfo(form)
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>Employment Information</Text>
                    <FormField
                        title="Employment Status"
                        value={form.employment_status}
                        handleChangeText={(e) => setForm({ ...form, employment_status: e })}
                        otherStyles={styles.formField}
                    />
                    <FormField
                        title="Occupation"
                        value={form.occupation}
                        handleChangeText={(e) => setForm({ ...form, occupation: e })}
                        otherStyles={styles.formField}
                    />
                    <FormField
                        title="Employer Name"
                        value={form.employer_name}
                        handleChangeText={(e) => setForm({ ...form, employer_name: e })}
                        otherStyles={styles.formField}
                    />
                    <FormField
                        title="Monthly Income"
                        value={form.monthly_income}
                        handleChangeText={(e) => setForm({ ...form, monthly_income: e })}
                        otherStyles={styles.formField}
                        keyboardType="numeric"
                    />
                    <FormField
                        title="Years of Employment"
                        value={form.years_of_employment}
                        handleChangeText={(e) => setForm({ ...form, years_of_employment: e })}
                        otherStyles={styles.formField}
                        keyboardType="numeric"
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

export default EmployInfo;

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
