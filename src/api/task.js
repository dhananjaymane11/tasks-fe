import baseUrl from './baseUrl';

export const tasksApiUrl = `${baseUrl}/tasks`;

export const fetchTasksApi = async () => {
  try {
    const response = await fetch(tasksApiUrl);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const addTaskApi = async (data) => {
  try {
    const response = await fetch(tasksApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const updateTaskApi = async (id, data) => {
  try {
    const apiUrl = `${tasksApiUrl}/${id}`;
    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const deleteTaskApi = async (id) => {
  try {
    const apiUrl = `${tasksApiUrl}/${id}`;
    const response = await fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};
