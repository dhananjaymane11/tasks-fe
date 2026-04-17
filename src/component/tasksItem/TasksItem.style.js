import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const ItemContainer = styled.View`
  background: #fff;
  padding: 14px 15px;
  border-radius: 12px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  border-width: 1px;
  border-color: #e6edf6;
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  flex-grow: 1;
`;

export const TaskEditButton = styled.TouchableOpacity`
  margin-left: 10px;
  margin-top: -2px;
  width: ${width - 155}px;
`;

export const TaskText = styled.Text`
  color: ${(props) => (props.isDone ? '#90a4ae' : '#1f2937')};
  text-decoration-line: ${(props) => (props.isDone ? 'line-through' : 'none')};
  font-size: 16px;
`;

export const RemoveButton = styled.TouchableOpacity``;

export const RemoveText = styled.Text`
  color: #d32f2f;
  font-weight: 700;
`;
