import React from 'react';
import Checkbox from 'expo-checkbox';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import {
  ItemContainer,
  TextWrapper,
  TaskText,
  TaskEditButton,
  RemoveButton,
} from './TasksItem.style';

const TasksItem = ({ item, toggleTask, removeTask, handleShowModal }) => {
  return (
    <ItemContainer>
      <TextWrapper>
        <Checkbox
          value={item.isDone}
          onValueChange={() => toggleTask(item._id)}
          color={item.isDone ? '#2f80ed' : undefined}
        />
        <TaskEditButton onPress={() => handleShowModal(item._id)}>
          <TaskText isDone={item.isDone}>
            {item.title} - {item.priority}
          </TaskText>
        </TaskEditButton>
      </TextWrapper>
      <RemoveButton onPress={() => removeTask(item._id)}>
        <MaterialIcons name="delete-outline" size={22} color={'red'} />
      </RemoveButton>
    </ItemContainer>
  );
};

export default TasksItem;
