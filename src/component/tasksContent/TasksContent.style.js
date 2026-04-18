import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const BoxWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10;
`;

export const TasksBox = styled.View`
  background-color: #2c2c2c;
  padding: 10px;
  border-radius: 8px;
  width: ${width / 2 - 15}px;
  height: ${height / 2 - 40 - 10 - 22}px;
`;

export const Title = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const TaskText = styled.Text`
  color: ${(props) => (props.isDone ? '#90a4ae' : '#1f2937')};
  text-decoration-line: ${(props) => (props.isDone ? 'line-through' : 'none')};
  font-size: 14px;
`;

export const EmptyText = styled.Text`
  color: #aaa;
  font-size: 13px;
  text-align: center;
`;
