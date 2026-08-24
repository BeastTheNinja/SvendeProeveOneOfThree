const API_URL = import.meta.env.VITE_API_URL;

async function api<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const accessToken = localStorage.getItem("accessToken");

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
      ...(accessToken
        ? { Authorization: `Bearer ${accessToken}` }
        : {}),
    },
  });

  if (!response.ok) {
    const errorBody = await response.text();

    throw new Error(
      `API Error ${response.status}: ${errorBody}`
    );
  }

  return response.json();
}

export default api;
