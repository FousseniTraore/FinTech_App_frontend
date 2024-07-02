import React, { useContext, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { useRouter, useLocalSearchParams } from 'expo-router';
import AppContext from '../AppContext';

const ReviewSubmit = () => {
  const { personalInfo, contactInfo, employmentInfo, idVerification } = useContext(AppContext);

  const router = useRouter();

  useEffect(()=>{
    console.log("PERSONAL INFORMATION HERE", personalInfo, contactInfo, employmentInfo, idVerification)
  }, [])

  const handleSubmit = () => {
    // Implement your submit logic here, e.g., send data to backend, navigate to success screen, etc.
    console.log('Submitting data:', {
      first_name: personalInfo.first_name,
      email: contactInfo.email,
      occupation: employmentInfo.occupation,
      idType: idVerification.idType,
    });
    // For example, navigate back to the home screen after submission
    router.push("/home");
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Review Information</Text>

          {/* Display Personal Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Information:</Text>
            <Text>First Name: {personalInfo.first_name}</Text>
            <Text>Last Name: {personalInfo.last_name}</Text>
            <Text>Date of Birth: {personalInfo.dateOfBirth}</Text>
            <Text>Gender: {personalInfo.gender}</Text>
            <Text>Nationality: {personalInfo.nationality}</Text>
          </View>

          {/* Display Contact Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact Information:</Text>
            <Text>Email: {contactInfo.email}</Text>
            <Text>Phone Number: {contactInfo.phone_number}</Text>
            <Text>Street Address: {contactInfo.street_address}</Text>
            <Text>City: {contactInfo.city}</Text>
            <Text>Province/State: {contactInfo.province_state}</Text>
            <Text>Postal Code: {contactInfo.postal_code}</Text>
            <Text>Country: {contactInfo.country}</Text>
          </View>

          {/* Display Employment Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Employment Information:</Text>
            <Text>Employment Status: {employmentInfo.employement_status}</Text>
            <Text>Occupation: {employmentInfo.occupation}</Text>
            <Text>Employer Name: {employmentInfo.employer_name}</Text>
            <Text>Monthly Income: {employmentInfo.monthly_income}</Text>
            <Text>Year of Employment: {employmentInfo.year_of_employment}</Text>
          </View>

          {/* Display ID Verification Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>ID Verification:</Text>
            <Text>ID Type: {idVerification.idType}</Text>
            <Text>Issuing Country: {idVerification.issuing_country}</Text>
            {idVerification.idDocument && (
              <Image source={{ uri: idVerification.idDocument.uri }} style={styles.image} />
            )}
          </View>

          {/* Submit Button */}
          <CustomButton
            title="Submit"
            handlePress={handleSubmit}
            containerStyles={styles.buttonContainer}
            textStyles={styles.buttonText}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewSubmit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
    resizeMode: 'contain',
  },
  buttonContainer: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    marginTop: 28,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
