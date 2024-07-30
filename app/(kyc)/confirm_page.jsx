import React, { useContext, useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { useRouter } from 'expo-router';
import AppContext from '../AppContext';
import axios from 'axios';
import * as ImageManipulator from 'expo-image-manipulator';

const ReviewSubmit = () => {
  const { personalInfo, contactInfo, employmentInfo, uploadDocument } = useContext(AppContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("PERSONAL INFORMATION HERE", personalInfo, contactInfo, employmentInfo)
  }, []);

  const handleSubmit = async () => {
    setLoading(true);

    // Convert images to base64
    const convertImageToBase64 = async (uri) => {
      if (!uri) return null;
      const manipulatedImage = await ImageManipulator.manipulateAsync(uri, [], { base64: true });
      return manipulatedImage.base64;
    };

    // Convert images and prepare JSON payload
    const uploadIdDocumentBase64 = uploadDocument.idDocument ? await convertImageToBase64(uploadDocument.idDocument) : null;
    const salaryTaxDocumentBase64 = uploadDocument.salaryTaxDocument ? await convertImageToBase64(uploadDocument.salaryTaxDocument) : null;
    const addressDocumentBase64 = uploadDocument.addressDocument ? await convertImageToBase64(uploadDocument.addressDocument) : null;

    const requestData = {
      first_name: personalInfo.first_name,
      last_name: personalInfo.last_name,
      dateOfBirth: personalInfo.dateOfBirth,
      gender: personalInfo.gender,
      nationality: personalInfo.nationality,
      email: contactInfo.email,
      phone_number: contactInfo.phone_number,
      street_address: contactInfo.street_address,
      city: contactInfo.city,
      province_state: contactInfo.province_state,
      postal_code: contactInfo.postal_code,
      country: contactInfo.country,
      employment_status: employmentInfo.employement_status,
      occupation: employmentInfo.occupation,
      employer_name: employmentInfo.employer_name,
      monthly_income: employmentInfo.monthly_income,
      year_of_employment: employmentInfo.year_of_employment,
      uploadIdDocument: uploadIdDocumentBase64,
      salaryTaxDocument: salaryTaxDocumentBase64,
      addressDocument: addressDocumentBase64
    };

    try {
      const response = await axios.post('https://osotgv9nng.execute-api.us-east-1.amazonaws.com/dev/user_info', requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Success:', response.data);
      router.push("/success_kyc");
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
              <Text style={styles.loadingText}>Verification in process, please wait...</Text>
            </View>
          ) : (
            <>
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

              {/* Document uploaded */}
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>ID Document</Text>
                {uploadDocument.idDocument && <Image source={{ uri: uploadDocument.idDocument }} style={styles.image} />}

                <Text style={styles.sectionTitle}>Salary/Tax Document</Text>
                {uploadDocument.salaryTaxDocument && <Image source={{ uri: uploadDocument.salaryTaxDocument }} style={styles.image} />}

                <Text style={styles.sectionTitle}>Address Document</Text>
                {uploadDocument.addressDocument && <Image source={{ uri: uploadDocument.addressDocument }} style={styles.image} />}
              </View>

              {/* Submit Button */}
              <CustomButton
                title="Submit"
                handlePress={handleSubmit}
                containerStyles={styles.buttonContainer}
                textStyles={styles.buttonText}
              />
            </>
          )}
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
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    color: '#000000',
  },
});
