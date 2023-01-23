import './Formulario.css';

export default function Formulario(){
    return(
     <>
         <form action="ejemplo.js">
        <label>
        Nombre:<br></br>
        <input type= "text" required placeholder= "ingrese nombre "/>
        
        </label><br></br>
        <label>
        apellido:<br></br>
        <input type= "text" required placeholder= "ingrese  apellido"/>
        
        </label><br></br><label>
        telefono:<br></br>
        <input type= "Text" required placeholder= "ingrese telefono"/>
        
        </label><br></br>
        </form>
        </>
    )
         }