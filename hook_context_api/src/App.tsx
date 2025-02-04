import './App.css'
import AuthProvider  from './Providers/AuthProvider';  
import UserProfile from './Consumers/UserProfile';  

function App() {  
  return (  
    <div>
      <AuthProvider> 
        <div>  
          <h1>Sistema de Autenticación</h1>  
          <UserProfile />  
        </div>
      </AuthProvider>  
    </div> 
  );  
}  

export default App;  
