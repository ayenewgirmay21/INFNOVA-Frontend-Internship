import api from "./axios";

import type {
  LoginRequest,
  LoginResponse,
  User
} from "../types/auth";


export const loginUser = async (
  credentials: LoginRequest
) => {

  const response =
    await api.post<LoginResponse>(
      "/auth/login",
      credentials
    );

  return response.data;

};



export const getCurrentUser = async () => {

  const response =
    await api.get<User>(
      "/auth/me"
    );

  return response.data;

};



export const logoutUser = async () => {

  const response =
    await api.post(
      "/auth/logout"
    );

  return response.data;

};