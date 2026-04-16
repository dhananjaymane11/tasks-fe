export const fetchTasksApi = () => ({
  endpoint: 'tasks/get',
});

export const addTaskApi = (data) => ({
  endpoint: 'tasks/create',
  method: 'POST',
  data,
});

export const updateTaskApi = (id, data) => ({
  endpoint: `tasks/update/${id}`,
  method: 'PUT',
  data,
});

export const deleteTaskApi = (id) => ({
  endpoint: `tasks/delete/${id}`,
  method: 'DELETE',
});

// export const fetchTasksApi = async () => {
//   try {
//     const response = apiCall('tasks');
//     return response;
//   } catch (error) {
//     console.error('Error fetching tasks:', error);
//     throw error;
//   }
// };

// export const addTaskApi = async (data) => {
//   try {
//     const response = apiCall('tasks', 'POST', data);
//     return response;
//   } catch (error) {
//     console.error('Error adding task:', error);
//     throw error;
//   }
// };

// export const updateTaskApi = async (id, data) => {
//   try {
//     const response = apiCall(`tasks/${id}`, 'PUT', data);
//     return response;
//   } catch (error) {
//     console.error('Error updating task:', error);
//     throw error;
//   }
// };

// export const deleteTaskApi = async (id) => {
//   try {
//     const response = apiCall(`tasks/${id}`, 'DELETE');
//     return response;
//   } catch (error) {
//     console.error('Error deleting task:', error);
//     throw error;
//   }
// };
