import styled from 'styled-components/native';

export const NotesBox = styled.View`
  background-color: #2c2c2c;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  flex-grow: 1;
`;

export const NoteEditButton = styled.TouchableOpacity`
  margin-left: 5px;
  margin-top: -1px;
`;

export const NoteText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const NoteDescription = styled.Text`
  color: #fff;
  font-size: 12px;
`;

export const RemoveButton = styled.TouchableOpacity``;

export const RemoveText = styled.Text`
  color: #d32f2f;
  font-weight: 700;
`;
