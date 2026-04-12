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
      const { insertedId } = await addTaskApi(data);
      setTasks(
        addDataToArray(tasks, { ...data, isDone: false, _id: insertedId }),
      );
    }
  };

  const toggleTask = async (id) => {
    const newStatus = !tasks.find((task) => task._id === id).isDone;
    await updateTaskApi(id, { isDone: newStatus });
    setTasks(updateDataInArray(tasks, id, { isDone: newStatus }));
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
