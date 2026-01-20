import { apiClient } from './apiClient';

export interface LoginResponse {
  username: string;
  token: string;
}

export const authService = {
  async login(username: string, password: string): Promise<LoginResponse> {
    const response = await apiClient.post<LoginResponse>('/api/Auth/login', {
      username,
      password
    });
    return response.data;
  }
};