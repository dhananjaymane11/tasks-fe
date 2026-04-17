import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { Picker } from '@react-native-picker/picker';

import { tasksSelectOptions } from '../../constants';
import {
  Wrapper,
  InputRow,
  TasksInput,
  AddButton,
} from './AddEditTasksItem.style';

const AddEditTasksItem = ({ addEditTask, taskToEdit }) => {
  const [input, setInput] = useState(taskToEdit ? taskToEdit.title : '');
  const [selectedPriority, setSelectedPriority] = useState(
    taskToEdit ? taskToEdit.priority : 1,
  );

  const handleAddTask = () => {
    const title = input.trim();
    if (!title) return;

    addEditTask(
      { title, priority: +selectedPriority },
      taskToEdit ? taskToEdit._id : null,
    );
    setInput('');
    Keyboard.dismiss();
  };

  return (
    <Wrapper>
      <InputRow>
        <TasksInput
          value={input}
          onChangeText={setInput}
          placeholder="What do you need to do?"
          returnKeyType="done"
          onSubmitEditing={handleAddTask}
        />
        <AddButton onPress={handleAddTask} activeOpacity={0.8}>
          <Entypo name="plus" size={24} color="black" />
        </AddButton>
      </InputRow>

      <Picker
        selectedValue={selectedPriority}
        onValueChange={(itemValue) => setSelectedPriority(itemValue)}
      >
        {tasksSelectOptions.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
    </Wrapper>
  );
};

export default AddEditTasksItem;
