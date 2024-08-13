import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import CustomButton from '../../components/CustomButton';

const RejectionKYC = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/home'); 
  };

  return (
    <View style={styles.container}>
      <Ionicons name="close-circle-outline" size={100} color="red" style={styles.icon} />
      <Text style={styles.title}>Oops!</Text>
      <Text style={styles.message}>Your KYC process has been rejected. Please review and try again.</Text>
      <CustomButton
        title="Go back"
        handlePress={handleGoHome}
        containerStyles={styles.buttonContainer}
        textStyles={styles.buttonText}
      />
    </View>
  );
};

export default RejectionKYC;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
