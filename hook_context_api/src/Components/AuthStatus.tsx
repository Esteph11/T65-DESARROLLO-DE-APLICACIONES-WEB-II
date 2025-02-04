import { useAuth } from '../Providers/AuthProvider';  

const AuthStatus = () => {  
  const { user } = useAuth();  

  return (  
    <div>  
      {user ? (  
        <p>Estado: Autenticado</p>  
      ) : (  
        <p>Estado: No Autenticado</p>  
      )}  
    </div>  
  );  
};  

export default AuthStatus;  
