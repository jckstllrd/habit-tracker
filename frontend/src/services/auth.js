const basepath = `${import.meta.env.VITE_API_URL}/auth`;

export const login = (email, password) =>
  fetch(`${basepath}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "content-type": "application/json",
    },
  });

export const register = (email, password, confirmPassword) =>
  fetch(`${basepath}/register`, {
    method: "POST",
    body: JSON.stringify({ email, password, confirmPassword }),
    headers: {
      "content-type": "application/json",
    },
  });
