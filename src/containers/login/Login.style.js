import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f4f8;
  padding: 20px;
  width: 100%;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #263238;
`;

export const Error = styled.Text`
  font-size: 14px;
  color: red;
  margin-bottom: 10px;
`;

export const InputWrapper = styled.View``;

export const StyledTextInput = styled.TextInput`
  padding: 10px;
  background: white;
  margin-bottom: 10px;
  line-height: 20px;
`;
