import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import {
  NotesBox,
  TextWrapper,
  NoteText,
  NoteDescription,
  NoteEditButton,
  RemoveButton,
} from './NotesItem.style';

const NotesItem = ({ item, removeNote, handleShowModal }) => {
  return (
    <NotesBox>
      <TextWrapper>
        <NoteEditButton onPress={() => handleShowModal(item._id)}>
          <NoteText>{item.title}</NoteText>
          <NoteDescription>{item.description}</NoteDescription>
        </NoteEditButton>
      </TextWrapper>
      <RemoveButton onPress={() => removeNote(item._id)}>
        <MaterialIcons name="delete-outline" size={22} color={'red'} />
      </RemoveButton>
    </NotesBox>
  );
};

export default NotesItem;
