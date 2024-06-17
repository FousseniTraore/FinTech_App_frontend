import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
