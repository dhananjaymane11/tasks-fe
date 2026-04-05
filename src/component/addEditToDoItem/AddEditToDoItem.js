import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { Picker } from '@react-native-picker/picker';

import { toDoSelectOptions } from '../../constants';
import {
  Wrapper,
  InputRow,
  ToDoInput,
  AddButton,
} from './AddEditToDoItem.style';

const AddEditToDoItem = ({ addEditTask, taskToEdit }) => {
  const [input, setInput] = useState(taskToEdit ? taskToEdit.title : '');
  const [selectedPriority, setSelectedPriority] = useState(
    taskToEdit ? taskToEdit.selectedPriority : 1,
  );

  const handleAddTask = () => {
    const title = input.trim();
    if (!title) return;

    addEditTask(
      { title, selectedPriority: +selectedPriority },
      taskToEdit ? taskToEdit._id : null,
    );
    setInput('');
    Keyboard.dismiss();
  };

  return (
    <Wrapper>
      <InputRow>
        <ToDoInput
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
        {toDoSelectOptions.map((option) => (
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

export default AddEditToDoItem;
