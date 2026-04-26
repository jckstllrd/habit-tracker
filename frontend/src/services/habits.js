const basepath = `${import.meta.env.VITE_API_URL}/habits`;

const userId = 1;

export const getAllHabitsByUser = () =>
  fetch(`${basepath}/user/${userId}`).then((data) => data.json());

export const createHabit = (name) =>
  fetch(basepath, {
    method: "POST",
    body: JSON.stringify({ name, userId }),
    headers: {
      "content-type": "application/json",
    },
  });

export const deleteHabit = (habitId) =>
  fetch(`${basepath}/${habitId}`, {
    method: "DELETE",
  });
