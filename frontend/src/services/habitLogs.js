const basepath = "http://localhost:8080/logs";

export const getAllHabitLogs = () =>
  fetch(basepath).then((data) => data.json());

export const getHabitCurrentStreak = (habit_id) =>
  fetch(`${basepath}/habit/streak/${habit_id}`).then((data) => data.json());

export const createHabitLog = (habit_id, logged_on) =>
  fetch(basepath, {
    method: "POST",
    body: JSON.stringify({ habit_id, logged_on }),
    headers: {
      "content-type": "application/json",
    },
  });

export const deleteHabitLog = (id) =>
  fetch(`${basepath}/${id}`, {
    method: "DELETE",
  });
