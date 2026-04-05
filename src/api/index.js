import { getStoredToken } from './store';
import API_URL from './baseUrl';

export const apiCall = async (endpoint, method = 'GET', body = null) => {
  try {
    let token = await getStoredToken();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const config = {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    };

    let response = await fetch(`${API_URL}${endpoint}`, config);

    if (!response.ok) {
      throw new Error('Request failed');
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};
