const basepath = `${import.meta.env.VITE_API_URL}/habits`;

export const getAllHabits = async () => {
  const token = localStorage.getItem("session");
  return fetch(basepath, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((data) => data.json());
};
export const createHabit = async (name) => {
  const token = localStorage.getItem("session");
  return fetch(basepath, {
    method: "POST",
    body: JSON.stringify({ name }),
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};
export const deleteHabit = (habitId) => {
  const token = localStorage.getItem("session");
  return fetch(`${basepath}/${habitId}`, {
    method: "DELETE",
    headers: { authorization: `Bearer ${token}` },
  });
};
