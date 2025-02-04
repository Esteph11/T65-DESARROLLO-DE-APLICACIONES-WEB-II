import { useAuth } from '../Providers/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = () => {
  const { user, login, logout } = useAuth();

  return (
    <div className="card text-dark mb-3 mx-auto mt-5" style={{ maxWidth: '800px' }}>
      <div className="card-header bg-light text-dark text-center">
        <h3 className="mb-0">Sistema de Autenticación</h3>
      </div>
      <div className="card-body text-center">
        {user ? (
          <>
            <h5>Bienvenido, {user}</h5>
            <button className="button-1" onClick={logout}>Cerrar Sesión</button>
          </>
        ) : (
          <>
            <h5>Usuario no está autenticado.</h5>
            <button className="button" onClick={() => login('Usuario')}>Iniciar Sesión</button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile; 
