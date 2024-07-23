import { Stack } from 'expo-router';
import { useState } from 'react';
import AppContext from './AppContext';

export default function RootLayout() {

  const [personalInfo, setPersonalInfo] = useState({});
  const [contactInfo, setContactInfo] = useState({});
  const [employmentInfo, setEmploymentInfo] = useState({});
  const [idVerification, setIdVerification] = useState({});
  const [idDocumentPic, setIdDocumentPic] = useState({});
  const [uploadDocument, setUploadDocument] = useState({});


  const [accountBalance, setAccountBalance] = useState(0); // initial balance
  const creditLimit = 100000; // set credit limit by using machine learning
  const updateBalance = (amount) => {
    setAccountBalance((prevBalance) => prevBalance + amount);
  };

  const values = {
    personalInfo,
    setPersonalInfo,
    contactInfo,
    setContactInfo,
    employmentInfo,
    setEmploymentInfo,
    idVerification,
    setIdVerification,
    idDocumentPic,
    setIdDocumentPic,
    uploadDocument,
    setUploadDocument,
    accountBalance,
    setAccountBalance,
    creditLimit,
    updateBalance
  }


  return (
    <AppContext.Provider value={values}>
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(routes)" options={{ headerShown: false}} />
        <Stack.Screen name="(routes)/repay_loan" title="Loan repayment" options={{ headerShown: false}} />
        <Stack.Screen name="(routes)/request_loan" title="Loan request" options={{ headerShown: false}} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(kyc)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    </AppContext.Provider>
  );
}

