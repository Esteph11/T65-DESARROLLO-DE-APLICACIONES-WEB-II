import NavBar from "../Components/NavBar";
import ProviderEventos from "../Provider/ProviderEventos";

export default function  LayoutSecundario({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    
    <ProviderEventos>
      <NavBar></NavBar>
      {children}
    </ProviderEventos>
 
   
      
    </>
  );
}