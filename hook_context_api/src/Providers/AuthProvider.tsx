import { ReactNode, useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';  

interface ViewReact{
    children: ReactNode
}

export default function AuthProvider (props:ViewReact) { 

    const [user, setUser] = useState (null)
   
    const login = (username) => {  
      setUser(username);  
    };  
  
    const logout = () => {  
      setUser(null);  
    };  
  
    return (  
      <AuthContext.Provider value={{ user, login, logout }}>  
        {props.children}  
      </AuthContext.Provider>  
    );  
};

export const useAuth = () => {  
  return useContext(AuthContext)
};
