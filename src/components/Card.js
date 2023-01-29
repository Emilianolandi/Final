import './Card.css'


export default function Card({Card}) {
    let precio
    let envio_gratis = true;

    return(
        <div className = "Card">
           <img className = "Card-img"src={Card.imagen} alt= ""/>
           <div>
          
             <h3 >{Card.titulo}</h3> 
             <p className = "card-info_precio">${2300}</p> 
             {precio > 20000 && 
                <p>Ho por dios</p> 
            }
            {envio_gratis &&
               <p className = "gratis">¡Envio gratis!</p>
            }
            {!envio_gratis &&
                <p>No es gratis</p>
            }
            </div>
            </div>

            
    )
    
    
}