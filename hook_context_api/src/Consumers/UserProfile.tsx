import { useAuth } from '../Providers/AuthProvider';

const UserProfile = () => {  
  const { user, login, logout } = useAuth();  

  return (  
    <div>  
      {user ? (  
        <>  
          <h3>Bienvenido, {user}</h3>  
          <button className="button" onClick={logout}>Cerrar Sesión</button>  
        </>  
      ) : (  
        <>  
          <h3>Usuario no está autenticado.</h3>  
          <button onClick={() => login('Usuario')}>Iniciar Sesión</button>  
        </>  
 
      )}  
    </div>  
  );  
};  

export default UserProfile; 
