import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(routes)" options={{ headerShown: false}} />
        <Stack.Screen name="(routes)/repay_loan" title="Loan repayment" options={{ headerShown: false}} />
        <Stack.Screen name="(routes)/request_loan" title="Loan request" options={{ headerShown: false}} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(kyc)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

