import React, { useState, useContext } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from 'expo-router';
import { useRouter } from "expo-router";
import * as ImagePicker from 'expo-image-picker';
import AppContext from '../AppContext';

const DocumentUpload = () => {
  const { uploadDocument, setUploadDocument } = useContext(AppContext);
  const [documents, setDocuments] = useState({
    idDocument: null,
    salaryTaxDocument: null,
    addressDocument: null,
  });
  const navigation = useNavigation();
  const router = useRouter();

  const pickImage = async (docType) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setDocuments((prevDocuments) => ({
        ...prevDocuments,
        [docType]: result.assets[0].uri,
      }));
    }
  };

  const handleNext = () => {
    setUploadDocument(documents);
    router.push({ pathname: 'confirm_page' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Upload Documents</Text>
          <View style={styles.uploadContainer}>
            <TouchableOpacity style={styles.uploadBox} onPress={() => pickImage('idDocument')}>
              <Ionicons name="cloud-upload-outline" size={30} color="#000" />
              <Text style={styles.uploadText}>Click here to upload ID Document</Text>
            </TouchableOpacity>
            {documents.idDocument && <Image source={{ uri: documents.idDocument }} style={styles.image} />}
          </View>
          <View style={styles.uploadContainer}>
            <TouchableOpacity style={styles.uploadBox} onPress={() => pickImage('salaryTaxDocument')}>
              <Ionicons name="cloud-upload-outline" size={30} color="#000" />
              <Text style={styles.uploadText}>Click here to upload Salary/Tax Document</Text>
            </TouchableOpacity>
            {documents.salaryTaxDocument && <Image source={{ uri: documents.salaryTaxDocument }} style={styles.image} />}
          </View>
          <View style={styles.uploadContainer}>
            <TouchableOpacity style={styles.uploadBox} onPress={() => pickImage('addressDocument')}>
              <Ionicons name="cloud-upload-outline" size={30} color="#000" />
              <Text style={styles.uploadText}>Click here to upload Address Document</Text>
            </TouchableOpacity>
            {documents.addressDocument && <Image source={{ uri: documents.addressDocument }} style={styles.image} />}
          </View>
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

export default DocumentUpload;

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
  uploadContainer: {
    width: '100%',
    marginTop: 28,
    alignItems: 'center',
  },
  uploadBox: {
    width: '100%',
    borderColor: '#000000',
    borderWidth: 2,
    borderStyle: 'dashed',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadText: {
    marginTop: 10,
    color: '#000000',
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
