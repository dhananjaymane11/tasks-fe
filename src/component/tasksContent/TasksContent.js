import React from 'react';
import { FlatList } from 'react-native';

import TasksItem from '../tasksItem/TasksItem';
import { tasksSelectOptions } from '../../constants';

import { BoxWrapper, TasksBox, Title, EmptyText } from './TasksContent.style';

const tasksContent = ({ tasks, toggleTask, removeTask, handleShowModal }) => {
  return (
    <BoxWrapper>
      {tasksSelectOptions.map((option) => (
        <TasksBox key={option.value}>
          <Title>{option.label}</Title>
          <FlatList
            data={tasks.filter((task) =>
              task.priority === option.value ? task : null,
            )}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <TasksItem
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
        </TasksBox>
      ))}
    </BoxWrapper>
  );
};

export default tasksContent;
