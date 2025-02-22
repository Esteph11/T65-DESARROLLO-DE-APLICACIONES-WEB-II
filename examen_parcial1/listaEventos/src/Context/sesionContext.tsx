import { createContext } from 'react';  

export const sesionContext = createContext({  
  usuario: null, 
  setUser: () => {},  
  login: () => {},  
  logout: () => {}  
});  

