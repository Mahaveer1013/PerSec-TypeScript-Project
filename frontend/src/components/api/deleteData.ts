export const deleteData = async (url: string, options: RequestInit = {}) => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete data");
  }
  return response.json();
};

