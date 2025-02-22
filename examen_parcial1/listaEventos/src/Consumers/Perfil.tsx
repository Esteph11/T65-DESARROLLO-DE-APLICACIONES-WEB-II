import { useAuth } from '../Providers/sesionProvider';  
import 'bootstrap/dist/css/bootstrap.min.css';  

const Perfil = () => {  
  const { usuario, rol, login, logout } = useAuth(); 

  return (  
    <div className="card text-dark mb-3 mx-auto mt-5" style={{ maxWidth: '800px' }}>  
      <div className="card-header bg-light text-dark text-center">  
        <h3 className="mb-0">Inicio de Sesión</h3>  
      </div>  
      <div className="card-body text-center">  
        {usuario ? (  
          <>  
            <h5>Bienvenido, {usuario}</h5>  
            <p>Rol: {rol === 'admin' ? 'Administrador' : 'Consultor'}</p> {/* Muestra el rol del usuario */}  
            <button className="btn btn-danger" onClick={logout}>Cerrar Sesión</button>  
          </>  
        ) : (  
          <>  
            <h5>Usuario no está autenticado.</h5>  
            <button className="btn btn-primary" onClick={() => login('Usuario')}>Iniciar Sesión</button>  
          </>  
        )}  
      </div>  
    </div>  
  );  
};  

 
export default Perfil;
