import { apiCall } from './index';

export const sendOtpApi = async (data) => {
  try {
    const response = apiCall('login/send-otp', 'POST', data);
    return response;
  } catch (error) {
    console.error('Error sending otp:', error);
    throw error;
  }
};

export const verifyOtpApi = async (data) => {
  try {
    const response = apiCall('login/verify-otp', 'POST', data);
    return response;
  } catch (error) {
    console.error('Error verifying otp:', error);
    throw error;
  }
};
