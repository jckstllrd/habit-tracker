const basepath = `${import.meta.env.VITE_API_URL}/habits`;

export const getAllHabits = () => fetch(basepath).then((data) => data.json());

export const createHabit = (name) =>
  fetch(basepath, {
    method: "POST",
    body: JSON.stringify({ name }),
    headers: {
      "content-type": "application/json",
    },
  });

export const deleteHabit = (habitId) =>
  fetch(`${basepath}/${habitId}`, {
    method: "DELETE",
  });
