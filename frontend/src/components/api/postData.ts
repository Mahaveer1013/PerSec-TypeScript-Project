export const postData = async (url: string, body: unknown, options: RequestInit = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Failed to submit form data");
  }
  return response.json();
};
