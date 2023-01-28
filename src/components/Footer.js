
import './Footer.css'
import React from "react";
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <>
        <div className='pie-de-pagina'>
           <h4 className="copyright">
            &copy; ntvg <br></br>
            Todos los derechos reservados
        </h4>
        
    
        <h5 className="direccion-BSAS">
            Argentina<br></br>
          
            Buenos Aires<br></br>
            Tel/Fax: +54 11 1111-1111

        </h5>
        <div className='Firma'>
         <Link to='#'>Emiliano.D.L</Link>
    </div>
    <div className='Logo'>
             
<Link to="https://www.facebook.com/NTVG.OFICIALPAGE/">
	<img alt= './img/logoF.png'  src="./img/logoF.png" width="66" height="49"/>
</Link>
    

<Link to={"https://web.whatsapp.com/"}>
<img alt= './img/logoF.png'  src="./img/logoF.png" width="66" height="49" />
</Link>


<Link to={"https://web.whatsapp.com/"}>
<img alt= './img/logoF.png'  src="./img/logoF.png" width="66" height="49" />
</Link>


<Link to={"https://web.whatsapp.com/"}>
<img alt= './img/logoF.png'  src="./img/logoF.png" width="66" height="49" />
    </Link>
    
    </div>
</div>

        </>
    )
    }