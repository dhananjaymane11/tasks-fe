import React, { useEffect, useState } from 'react';

import {
  fetchTasksApi,
  addTaskApi,
  updateTaskApi,
  deleteTaskApi,
} from '../../api/task';
import {
  addDataToArray,
  removeDataFromArray,
  updateDataInArray,
} from '../../util';
import ToDo from './ToDo';

const ToDoContainer = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await fetchTasksApi();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addEditTask = async (data, id) => {
    if (id) {
      await updateTaskApi(id, data);
      setTasks(updateDataInArray(tasks, id, data));
    } else {
      const newTask = {
        ...data,
        done: false,
      };
      const { insertedId } = await addTaskApi(newTask);
      setTasks(addDataToArray(tasks, { ...newTask, _id: insertedId }));
    }
  };

  const toggleTask = async (id) => {
    const newStatus = !tasks.find((task) => task._id === id).done;
    await updateTaskApi(id, { done: newStatus });
    setTasks(updateDataInArray(tasks, id, { done: newStatus }));
  };

  const removeTask = async (id) => {
    await deleteTaskApi(id);
    setTasks(removeDataFromArray(tasks, id));
  };

  return (
    <ToDo
      tasks={tasks}
      setTasks={setTasks}
      addEditTask={addEditTask}
      toggleTask={toggleTask}
      removeTask={removeTask}
    />
  );
};

export default ToDoContainer;
