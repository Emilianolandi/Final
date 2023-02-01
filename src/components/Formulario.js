import { useState } from "react"

export default function Formulario(){

    const [nombre, setName]=useState("");
    return(
    <>
    <label htmlForm= "Name">
    <imput type="text" id="Name" name="name" value={nombre} onChange={(e)=>
         setName(e.targer.value)}/>
         </label>
    </>
    
    )

    
}