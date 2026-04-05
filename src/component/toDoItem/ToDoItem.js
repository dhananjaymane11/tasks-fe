import React from 'react';
import Checkbox from 'expo-checkbox';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import {
  ItemContainer,
  TextWrapper,
  TaskText,
  TaskEditButton,
  RemoveButton,
} from './ToDoItem.style';

const ToDoItem = ({ item, toggleTask, removeTask, handleShowModal }) => {
  return (
    <ItemContainer>
      <TextWrapper>
        <Checkbox
          value={item.done}
          onValueChange={() => toggleTask(item._id)}
          color={item.done ? '#2f80ed' : undefined}
        />
        <TaskEditButton onPress={() => handleShowModal(item._id)}>
          <TaskText done={item.done}>
            {item.title} - {item.selectedPriority}
          </TaskText>
        </TaskEditButton>
      </TextWrapper>
      <RemoveButton onPress={() => removeTask(item._id)}>
        <MaterialIcons name="delete-outline" size={22} color={'red'} />
      </RemoveButton>
    </ItemContainer>
  );
};

export default ToDoItem;
