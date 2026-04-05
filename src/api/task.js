import { apiCall } from './index';

export const fetchTasksApi = async () => {
  try {
    const response = apiCall('tasks');
    return response;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const addTaskApi = async (data) => {
  try {
    const response = apiCall('tasks', 'POST', data);
    return response;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const updateTaskApi = async (id, data) => {
  try {
    const response = apiCall(`tasks/${id}`, 'PUT', data);
    return response;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const deleteTaskApi = async (id) => {
  try {
    const response = apiCall(`tasks/${id}`, 'DELETE');
    return response;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};
