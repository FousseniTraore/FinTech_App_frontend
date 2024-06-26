import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchCamera } from 'react-native-image-picker'; 
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import { router } from "expo-router";

const IdVerification = () => {
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
          <Text style={styles.title}>Identity Information</Text>
          <FormField
            title="Document Type"
            value={form.idType}
            handleChangeText={(e) => setForm({ ...form, idType: e })}
            otherStyles={styles.formField}
          />
          <FormField
            title="Issuing country"
            value={form.issuing_country}
            handleChangeText={(e) => setForm({ ...form, issuing_country: e })}
            otherStyles={styles.formField}
          />
          
          <View style={styles.photoContainer}>
            <TouchableOpacity style={styles.circleButton} onPress={handleTakePhoto}>
              <Ionicons name="camera" size={30} color="#fff" />
            </TouchableOpacity>
          </View>

          {idDocument && (
            <Image source={{ uri: idDocument.uri }} style={styles.image} />
          )}

          <CustomButton
            title="Submit"
            handlePress={() => router.push("/home")}
            containerStyles={styles.buttonContainer}
            textStyles={styles.buttonText}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IdVerification;

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
  photoContainer: {
    borderColor: '#000000',
    borderWidth: 2,
    borderStyle: 'dashed',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
    width: '100%',
  },
  circleButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
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
