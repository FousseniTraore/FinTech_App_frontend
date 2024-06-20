import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image, StyleSheet } from "react-native";


import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
// import { getCurrentUser, signIn } from "../../lib/appwrite";
// import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  // const { setUser, setIsLogged } = useGlobalContext();
  // const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  // const submit = async () => {
  //   if (form.email === "" || form.password === "") {
  //     Alert.alert("Error", "Please fill in all fields");
  //     return;
  //   }

  //   setSubmitting(true);

  //   try {
  //     await signIn(form.email, form.password);
  //     const result = await getCurrentUser();
  //     setUser(result);
  //     setIsLogged(true);

  //     Alert.alert("Success", "User signed in successfully");
  //     router.replace("/home");
  //   } catch (error) {
  //     Alert.alert("Error", error.message);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>

          <Text style={styles.title}>
            Sign up to Flexpay
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={styles.formField}
            keyboardType="email-address"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={styles.formField}
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={styles.formField}
          />

          <CustomButton
            title="Sign up"
            handlePress={() => router.push("/sign-in")}
            containerStyles={styles.buttonContainer}
            textStyles={styles.buttonText}
            // isLoading={isSubmitting}
          />

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              style={styles.signupLink}
            >
              Log in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: '#AAAAAA',
  },
  signupLink: {
    fontSize: 16,
    color: '#FFD700', // Assuming secondary color
    marginLeft: 4,
  },
});

export default SignUp;
