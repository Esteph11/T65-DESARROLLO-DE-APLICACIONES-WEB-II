import { useAuth } from '../Providers/sesionProvider';  

const iniciarSesion = () => {  
  const { usuario } = useAuth();  

  return (  
    <div>  
      {usuario? (  
        <p>Usuario: Administrador</p>  
      ) : (  
        <p>Usuario: Consultor</p>  
      )}  
    </div>  
  );  
};  

export default iniciarSesion;  
