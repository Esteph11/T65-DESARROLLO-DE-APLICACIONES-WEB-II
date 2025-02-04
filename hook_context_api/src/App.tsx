import './App.css'
import AuthProvider  from './Providers/AuthProvider';  
import UserProfile from './Consumers/UserProfile';  

function App() {  
  return (  
    <div>
      <AuthProvider> 
                    
          <UserProfile />  
        
      </AuthProvider>  
    </div> 
  );  
}  

export default App;  
