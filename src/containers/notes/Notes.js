import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

import { NotesItem, AddEditNotesItem, Modal } from '../../component';
import {
  Header,
  Container,
  Title,
  NotesContent,
  EmptyText,
  AddButton,
} from './Notes.style';

export default function Notes({ notes, addEditNote, removeNote }) {
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (id) => {
    const noteToEditLocal = id && notes.find((note) => note._id === id);
    setNoteToEdit(noteToEditLocal || null);
    setShowModal(true);
  };

  const handleAddEditNote = async (data, id) => {
    await addEditNote(data, id);
    setShowModal(false);
  };

  return (
    <Container>
      <Header>
        <Title>Notes</Title>
        <AddButton onPress={handleShowModal} activeOpacity={0.8}>
          <Entypo name="plus" size={24} color="black" />
        </AddButton>
      </Header>

      <NotesContent>
        <FlatList
          data={notes}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <NotesItem
              item={item}
              addEditNote={addEditNote}
              removeNote={removeNote}
              handleShowModal={handleShowModal}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          ListEmptyComponent={<EmptyText>No Notes</EmptyText>}
        />
      </NotesContent>

      <Modal
        showModal={showModal}
        title={noteToEdit ? 'Edit Note' : 'Add Note'}
        setShowModal={setShowModal}
      >
        <AddEditNotesItem
          addEditNote={handleAddEditNote}
          noteToEdit={noteToEdit}
          setShowModal={setShowModal}
        />
      </Modal>
    </Container>
  );
}
