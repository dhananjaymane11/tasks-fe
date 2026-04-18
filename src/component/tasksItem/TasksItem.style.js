import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const ItemContainer = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  flex-grow: 1;
`;

export const TaskEditButton = styled.TouchableOpacity`
  margin-left: 5px;
  margin-top: -1px;
  width: ${width - 155}px;
`;

export const TaskText = styled.Text`
  color: ${(props) => (props.isDone ? '#eee' : '#fff')};
  text-decoration-line: ${(props) => (props.isDone ? 'line-through' : 'none')};
  font-size: 14px;
`;

export const RemoveButton = styled.TouchableOpacity``;

export const RemoveText = styled.Text`
  color: #d32f2f;
  font-weight: 700;
`;
