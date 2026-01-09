import axios from 'axios';

export const apiClient = axios.create({
  // This looks at .env file
  baseURL: import.meta.env.VITE_API_BASE_URL, 
});