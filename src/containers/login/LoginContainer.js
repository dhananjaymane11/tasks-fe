import React from 'react';
import { useRouter } from 'expo-router';

import { useApiCall } from '../../hooks';
import { sendOtpApi, verifyOtpApi } from '../../api/login';
import { useAuth } from '../../context/auth';
import Login from './Login';

const LoginContainer = () => {
  const { storeTokenFromContext } = useAuth();
  const apiCall = useApiCall(false);
  const router = useRouter();

  const onSendOtp = async (data) => {
    await apiCall(sendOtpApi(data));
  };

  const onVerifyOtp = async (data) => {
    const result = await apiCall(verifyOtpApi(data));
    if (result?.success === true) {
      await storeTokenFromContext(result.token);
      router.navigate('/');
    }
  };

  return <Login onSendOtp={onSendOtp} onVerifyOtp={onVerifyOtp} />;
};

export default LoginContainer;
