import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #111;
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
  color: #fff;
`;

export const Error = styled.Text`
  font-size: 14px;
  color: red;
  margin-bottom: 10px;
`;

export const InputWrapper = styled.View``;

export const StyledTextInput = styled.TextInput`
  padding: 10px;
  background: #111;
  margin-bottom: 10px;
  line-height: 20px;
  color: #fff;
  border-style: solid;
  border-bottom-width: 1px;
  border-color: rgb(255, 255, 255);
`;
