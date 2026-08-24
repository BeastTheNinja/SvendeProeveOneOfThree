import api from "./api";

import type {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
} from "../types/auth";

export function login(credentials: LoginCredentials) {
  return api<AuthResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}

export function register(
  credentials: RegisterCredentials
) {
  return api<AuthResponse>("/api/users", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}

export function logout() {
  return api<void>("/api/auth/logout", {
    method: "POST",
  });
}

export async function isLoggedIn() {
  try {
    await api("/api/auth/verify");

    return true;
  } catch {
    return false;
  }
}
