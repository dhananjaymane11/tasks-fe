import React, { useState } from 'react';
import { Button } from 'react-native';
import { validateEmail, validateOtp } from '../../util';

import {
  Header,
  Container,
  Title,
  Error,
  InputWrapper,
  StyledTextInput,
} from './Login.style';

const Login = ({ onSendOtp, onVerifyOtp }) => {
  const [screen, setScreen] = useState('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleSendOTP = async () => {
    if (validateEmail(email)) {
      setError('');
      await onSendOtp({ email });
      setScreen('otp');
    } else {
      setError('Enter valid email id');
    }
  };

  const handleVerifyOTP = async () => {
    if (validateOtp(otp)) {
      setError('');
      await onVerifyOtp({ email, otp });
    } else {
      setError('Enter valid OTP');
    }
  };

  const renderLoginView = () => {
    return (
      <InputWrapper>
        <StyledTextInput
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Button title="Send OTP" onPress={handleSendOTP} />
      </InputWrapper>
    );
  };

  const renderOtpView = () => {
    return (
      <InputWrapper>
        <StyledTextInput
          placeholder="Enter OTP"
          value={otp}
          onChangeText={setOtp}
          keyboardType="numeric"
        />
        <Button title="Verify OTP" onPress={handleVerifyOTP} />
      </InputWrapper>
    );
  };

  return (
    <Container>
      <Header>
        <Title>Login</Title>
      </Header>
      <Error>{error}</Error>
      {screen === 'email' ? renderLoginView() : renderOtpView()}
    </Container>
  );
};

export default Login;
