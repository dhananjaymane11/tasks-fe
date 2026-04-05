import styled from 'styled-components/native';

export const BoxWrapper = styled.View``;

export const ToDoBox = styled.View`
  background-color: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: #263238;
  margin-bottom: 15px;
  text-align: center;
`;

export const TaskText = styled.Text`
  color: ${(props) => (props.done ? '#90a4ae' : '#1f2937')};
  text-decoration-line: ${(props) => (props.done ? 'line-through' : 'none')};
  font-size: 14px;
`;

export const EmptyText = styled.Text`
  color: #607d8b;
  font-size: 14px;
  text-align: center;
`;
