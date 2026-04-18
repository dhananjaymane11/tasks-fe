import React, { useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';

import { TasksContent, AddEditTasksItem, Modal } from '../../component';
import { Header, Container, Title, AddButton } from './Tasks.style';

const Tasks = ({ tasks, addEditTask, toggleTask, removeTask }) => {
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
        <Title>Tasks</Title>
        <AddButton onPress={handleShowModal} activeOpacity={0.8}>
          <Entypo name="plus" size={24} color="black" />
        </AddButton>
      </Header>

      <TasksContent
        tasks={tasks}
        toggleTask={toggleTask}
        removeTask={removeTask}
        handleShowModal={handleShowModal}
      />

      <Modal
        showModal={showModal}
        title={taskToEdit ? 'Edit Task' : 'Add Task'}
        setShowModal={setShowModal}
      >
        <AddEditTasksItem
          addEditTask={handleAddEditTask}
          taskToEdit={taskToEdit}
          setShowModal={setShowModal}
        />
      </Modal>
    </Container>
  );
};

export default Tasks;
