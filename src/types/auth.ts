export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  message?: string;
}

export interface User {
  id: string;
  email: string;
  role?: string;
}