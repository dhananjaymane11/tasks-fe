import React from 'react';
import { FlatList } from 'react-native';

import ToDoItem from '../toDoItem/ToDoItem';
import { toDoSelectOptions } from '../../constants';

import { BoxWrapper, ToDoBox, Title, EmptyText } from './ToDoContent.style';

const toDoContent = ({ tasks, toggleTask, removeTask, handleShowModal }) => {
  return (
    <BoxWrapper>
      {toDoSelectOptions.map((option) => (
        <ToDoBox key={option.value}>
          <Title>{option.label}</Title>
          <FlatList
            data={tasks.filter((task) =>
              task.selectedPriority === option.value ? task : null,
            )}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <ToDoItem
                item={item}
                toggleTask={toggleTask}
                removeTask={removeTask}
                handleShowModal={handleShowModal}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <EmptyText>No todos yet. Add one above!</EmptyText>
            }
          />
        </ToDoBox>
      ))}
    </BoxWrapper>
  );
};

export default toDoContent;
