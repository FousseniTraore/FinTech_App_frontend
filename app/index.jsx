import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { router } from "expo-router";

export default function App() {

  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Flexpay</Text>
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            Access interest-free installment plans easily.
          </Text>
          <Text style={styles.details}>
            Flexpay helps you access affordable loans to make payment in the merchant of your favorite and essential products.
          </Text>
        </View>
        <CustomButton 
          title="Continue"
          handlePress={() => router.push("/sign-in")}
          containerStyles={styles.buttonContainer}
          textStyles={styles.buttonText}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
  buttonContainer: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
