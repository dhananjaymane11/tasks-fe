import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

import {
  Wrapper,
  InputRow,
  NotesInput,
  AddButton,
} from './AddEditNotesItem.style';

const AddEditNotesItem = ({ addEditNote, noteToEdit }) => {
  const [textInput, setTextInput] = useState(
    noteToEdit ? noteToEdit.title : '',
  );
  const [descriptionInput, setDescriptionInput] = useState(
    noteToEdit ? noteToEdit.description : '',
  );

  const handleAddNote = () => {
    const title = textInput.trim();
    const description = descriptionInput.trim();
    if (!title || !description) return;

    addEditNote({ title, description }, noteToEdit ? noteToEdit._id : null);
    setTextInput('');
    setDescriptionInput('');
    Keyboard.dismiss();
  };

  return (
    <Wrapper>
      <InputRow>
        <NotesInput
          value={textInput}
          onChangeText={setTextInput}
          placeholder="Title"
          returnKeyType="done"
          onSubmitEditing={handleAddNote}
        />
        <NotesInput
          value={descriptionInput}
          onChangeText={setDescriptionInput}
          placeholder="Description"
          returnKeyType="done"
          onSubmitEditing={handleAddNote}
        />
      </InputRow>
      <AddButton onPress={handleAddNote} activeOpacity={0.8}>
        <Entypo name="plus" size={24} color="black" />
      </AddButton>
    </Wrapper>
  );
};

export default AddEditNotesItem;
