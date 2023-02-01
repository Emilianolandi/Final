import { useState } from "react"

export default function Formulario(){

    const [nombre, setName]=useState("");
    return(
    <>
    <label htmlForm= "Name"></label>
    <imput type="text" id="Name" Name="name" value={nombre} onChange={(e)=>
         setName(e.targer.value)}/>
    </>
    
    )

    
}