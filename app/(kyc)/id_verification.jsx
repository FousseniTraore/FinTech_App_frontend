import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchCamera } from 'react-native-image-picker'; 
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { router } from "expo-router";

const id_verification = () => {
  const [form, setForm] = useState({
    idType: '',
    issuing_country: '',
  });
  const [idDocument, setIdDocument] = useState(null);

  const handleTakePhoto = () => {
    launchCamera({ mediaType: 'photo', saveToPhotos: true }, (response) => {
      if (!response.didCancel && !response.error) {
        setIdDocument(response.assets[0]);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Employment Information</Text>
          <FormField
            title="Document Type"
            value={form.idType}
            handleChangeText={(e) => setForm({ ...form, idType: e })}
            otherStyles={styles.formField}
          />
          <FormField
            title="Issuing country"
            value={form.occupation}
            handleChangeText={(e) => setForm({ ...form, occupation: e })}
            otherStyles={styles.formField}
          />
          <CustomButton
            title="Take a Picture of Your Document"
            handlePress={handleTakePhoto}
            containerStyles={styles.buttonContainer}
            textStyles={styles.buttonText}
          />

          {idDocument && (
            <Image source={{ uri: idDocument.uri }} style={styles.image} />
          )}

          <CustomButton
            title="Submit"
            handlePress={() => router.push("/home")}
            containerStyles={styles.buttonContainer}
            textStyles={styles.buttonText}
            // isLoading={isSubmitting}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default id_verification ;

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