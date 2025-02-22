import React, { createContext, useContext, useState } from 'react';  

const sesionContext = createContext();  

export const useAuth = () => useContext(sesionContext);  

const sesionProvider = ({ children }) => {  
  const [usuario, setUsuario] = useState(null);  
  const [rol, setRol] = useState(null); 

  const login = (nombreusuario) => {  
    setUsuario(nombreusuario);  
    setRol(nombreusuario === 'adminUsusario' ? 'admin' : 'consultor'); 
  };  

  const logout = () => {  
    setUsuario(null);  
    setRol(null);  
  };  

  return (  
    <sesionContext.Provider value={{ usuario, rol, login, logout }}>  
      {children}  
    </sesionContext.Provider>  
  );  
};  

export default sesionProvider;