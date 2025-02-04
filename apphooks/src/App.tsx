import { useEffect, useState } from 'react';  
import './App.css';  
import FormularioContador from './Components/FormularioContador';  

function App() {  
   //hook usestate [set,get]
  const [contador, setContador] = useState(0);  

  useEffect(() => {  
    console.log("Componente montado");  

    const intervalId = setInterval(() => {  
      setContador(prevContador => prevContador + 1);  
    }, 1000);  

    return () => clearInterval(intervalId);  
  }, []);  

  return (  
    <>  
      <h1> Valor del contador: {contador}</h1>  
      <FormularioContador></FormularioContador>
    </>  
  );  
}  

export default App;  
