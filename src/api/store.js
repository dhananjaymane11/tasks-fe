import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const isWeb = Platform.OS === 'web';

export const getStoredToken = async () => {
  try {
    return isWeb
      ? localStorage.getItem('accessToken')
      : await SecureStore.getItemAsync('accessToken');
  } catch (error) {
    console.error('Failed to get stored token:', error);
    return null;
  }
};

export const storeToken = async (token) => {
  try {
    return isWeb
      ? localStorage.setItem('accessToken', token)
      : await SecureStore.setItemAsync('accessToken', token);
  } catch (error) {
    console.error('Failed to store token:', error);
  }
};

export const clearToken = async () => {
  try {
    if (isWeb) {
      localStorage.removeItem('accessToken');
    } else {
      await SecureStore.deleteItemAsync('accessToken');
    }
  } catch (error) {
    console.error('Failed to clear tokens:', error);
  }
};
