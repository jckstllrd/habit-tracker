const basepath = `${import.meta.env.VITE_API_URL}/logs`;

export const getAllHabitLogs = async () => {
  const token = localStorage.getItem("session");
  return fetch(basepath, {
    headers: { authorization: `Bearer ${token}` },
  }).then((data) => data.json());
};
export const getHabitCurrentStreak = async (habit_id) => {
  const token = localStorage.getItem("session");
  return fetch(`${basepath}/habit/streak/${habit_id}`, {
    headers: { authorization: `Bearer ${token}` },
  }).then((data) => data.json());
};
export const createHabitLog = (habit_id, logged_on) => {
  const token = localStorage.getItem("session");
  return fetch(basepath, {
    method: "POST",
    body: JSON.stringify({ habit_id, logged_on }),
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};
export const deleteHabitLog = (id) => {
  const token = localStorage.getItem("session");
  return fetch(`${basepath}/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
