const basepath = `${import.meta.env.VITE_API_URL}/users`;

export const createUser = (username, password) =>
  fetch(basepath, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "content-type": "application/json",
    },
  });

export const deleteUser = (userId) =>
  fetch(`${basepath}/${userId}`, {
    method: "DELETE",
  });
