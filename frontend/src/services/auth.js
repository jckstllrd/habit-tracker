const basepath = `${import.meta.env.VITE_API_URL}/auth`;

export const login = (username, password) =>
  fetch(`${basepath}/login`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "content-type": "application/json",
    },
  });

export const register = (username, password, confirmPassword) =>
  fetch(`${basepath}/registerj`, {
    method: "POST",
    body: JSON.stringify({ username, password, confirmPassword }),
    headers: {
      "content-type": "application/json",
    },
  });
