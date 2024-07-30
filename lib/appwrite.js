import { Client, Account, Databases, ID, Query, Storage } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    projectId: '66a267980027e3a836df', 
    platform: 'com.hp.flexpay',
    databaseId: '66a26f6e00018398e9bb',
    usersCollectionId: '66a2710e003756a43f1d',
    accountsCollectionId: '66a271ca002ac3e4bcc3',
    transactionsCollectionId:'66a2721200303b974c99',
    merchantsCollectionId: '66a2722300206ae3167a',
    loansCollectionId: '66a27232002894789862',
    loanApplicationsCollectionId: '66a272cb0025ae50ba13',
    instalmentsCollectionId: '66a272f00034391a8fbc',
    loanRepaymentsCollectionId: '66a2759d0017f6f593d8'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // project ID
    .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const databases = new Databases(client);

// Register user
export async function createUser(email, password, username) {
    try {
      const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      );
  
      if (!newAccount) throw new Error('Failed to create account.');
  
      await signIn(email, password);
  
      const newUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
        ID.unique(),
        {
          accountId: newAccount.$id,
          email: email,
          username: username,
        }
      );
  
      return newUser;
    } catch (error) {
      throw new Error(error.message);
    }
}


// Sign In
export async function signIn(email, password) {
    try {
      await account.deleteSessions();
      const session = await account.createEmailPasswordSession(email, password);
      return session;
    } catch (error) {
      throw new Error(error.message);
    }
}

// Get Account
export async function getAccount() {
  try {
    const currentAccount = await account.get();
    return currentAccount;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Get Current User
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw new Error('No account found.');

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser.documents || currentUser.documents.length === 0) throw new Error('No user found.');

    return currentUser.documents[0];
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

// Sign Out

export async function signOut() {
  try {
      const sessions = await account.listSessions();
      if (sessions.total > 0) {
          await account.deleteSession(sessions.sessions[0].$id); // Sign out the first active session
      }
  } catch (error) {
      throw new Error(error.message);
  }
}
