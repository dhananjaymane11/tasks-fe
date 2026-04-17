import styled from 'styled-components/native';

export const Wrapper = styled.View``;

export const InputRow = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;

export const TasksInput = styled.TextInput`
  background: #ffffff;
  border-radius: 12px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccd7e3;
  margin-right: 8px;
  flex-grow: 1;
`;

export const AddButton = styled.TouchableOpacity`
  background: #2f80ed;
  padding: 12px 16px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;
