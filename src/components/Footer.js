
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer(){
    return(
        <>
        <div className='pie-de-pagina'>
       
        <h6 className="copyright">
            &copy; ntvg <br></br>
            Todos los derechos reservados
        </h6>
        
    
        <h5 className="direccion-BSAS">
            Argentina<br></br>
            lanus<br></br>
            Buenos Aires<br></br>
            Tel/Fax: +54 11 1111-1111

        </h5>
        <div className='Firma'>
         <a href='#'>Emiliano.D.L</a>
    </div>
    <div className='LogoFaceBook'>
            {/* <h3 className='Logos'> */}
    <a href="https://www.facebook.com/NTVG.OFICIALPAGE" >
	<img alt= './img/logoF.png'  src="./img/logoF.png" width="66" height="49" />
</a>
    
<br></br>
<a href="https://web.whatsapp.com/">
<img alt= './img/logoF.png'  src="./img/logoF.png" width="66" height="49" />
</a>

<br></br>
<a href="https://web.whatsapp.com/">
<img alt= './img/logoF.png'  src="./img/logoF.png" width="66" height="49" />
</a>

<br></br>
<a href="https://web.whatsapp.com/" />
<img alt= './img/logoF.png'  src="./img/logoF.png" width="66" height="49" />
    <a/>
    
<h3/>
</div>

</div>

        </>
    )
    }