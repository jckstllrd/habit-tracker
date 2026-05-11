const basepath = `${import.meta.env.VITE_API_URL}/users`;

export const createUser = (email, password, confirmPassword) => {
  const token = localStorage.getItem("session");
  return fetch(basepath, {
    method: "POST",
    body: JSON.stringify({ email, password, confirmPassword }),
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const deleteUser = (userId) => {
  const token = localStorage.getItem("session");
  return fetch(`${basepath}/${userId}`, {
    method: "DELETE",
    headers: { authorization: `Bearer ${token}` },
  });
};
