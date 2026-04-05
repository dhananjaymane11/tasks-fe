import React, { useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';

import { ToDoContent, AddEditToDoItem, Modal } from '../../component';
import { Header, Container, Title, AddButton } from './ToDo.style';

const ToDo = ({ tasks, addEditTask, toggleTask, removeTask }) => {
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (id) => {
    const taskToEdit = id && tasks.find((task) => task._id === id);
    setTaskToEdit(taskToEdit || null);
    setShowModal(true);
  };

  const handleAddEditTask = async (data, id) => {
    await addEditTask(data, id);
    setShowModal(false);
  };

  return (
    <Container>
      <Header>
        <Title>ToDo List</Title>
        <AddButton onPress={handleShowModal} activeOpacity={0.8}>
          <Entypo name="plus" size={24} color="black" />
        </AddButton>
      </Header>

      <ToDoContent
        tasks={tasks}
        toggleTask={toggleTask}
        removeTask={removeTask}
        handleShowModal={handleShowModal}
      />

      <Modal
        showModal={showModal}
        title={taskToEdit ? 'Edit Todo' : 'Add Todo'}
        setShowModal={setShowModal}
      >
        <AddEditToDoItem
          addEditTask={handleAddEditTask}
          taskToEdit={taskToEdit}
          setShowModal={setShowModal}
        />
      </Modal>
    </Container>
  );
};

export default ToDo;
