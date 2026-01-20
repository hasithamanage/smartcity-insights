import axios from 'axios';

export const apiClient = axios.create({
  // This looks at .env file
  baseURL: import.meta.env.VITE_API_BASE_URL, 
});

// Request Interceptor: Attach token to every request
apiClient.interceptors.request.use((config) => {
  const savedUser = localStorage.getItem('smartcity_user');
  if (savedUser) {
    const { token } = JSON.parse(savedUser);
    // This injects the Bearer token into the header
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response Interceptor: Handle expired tokens (401 Unauthorized)

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid - clear local storage and reload
      localStorage.removeItem('smartcity_user');
      window.location.href = '/'; // Force back to login
    }
    return Promise.reject(error);
  }
);