import './Formulario.css';

export default function Formulario(){
    return(
     <>
         <form action="ejemplo.js">
        <label>
        Nombre:
        <input type="text" required placeholder="ingrese nombre y apellido"/>
        
        </label><br></br>
        </form>
        </>
    )
         }