const basepath = "http://localhost:8080/habits";

const userId = 1;

export const getAllHabits = () => fetch(basepath).then((data) => data.json());

export const getAllHabitsByUser = () =>
  fetch(`${basepath}/user/${userId}`).then((data) => data.json());

export const createHabit = (name) =>
  fetch(basepath, {
    method: "POST",
    body: JSON.stringify({ name }),
  });

export const deleteHabit = (habitId) =>
  fetch(`${basepath}/${habitId}`, {
    method: "DELETE",
  });
