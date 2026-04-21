const basepath = "http://localhost:8080/habits";

export const getAllHabits = () => fetch(basepath).then((data) => data.json());
