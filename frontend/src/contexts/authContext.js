import { createContext } from "react";

export const authContext = createContext({
  user =[],
  token: [],
  login: () => { },
  logout: () => { }
})
