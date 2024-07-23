import React from 'react';
import { Stack } from 'expo-router';

const kycLayout = () => {
  return (
    <>
        <Stack>
            <Stack.Screen
                name="personal_info"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="contact_info"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="employ_info"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="financial_info"
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="id_verification"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="upload_doc"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="confirm_page"
                options={{
                    headerShown: false,
                }}
            />
      </Stack>
    </>
  )
}

export default kycLayout