export const putData = async (url: string, body: unknown, options: RequestInit = {}) => {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Failed to update data");
  }
  return response.json();
};
