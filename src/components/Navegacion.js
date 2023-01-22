import './navegacion.css'
import {Link} from 'react-router-dom';

export default function botonera(){
    return(
    <div className='botonera'>
    <ul className='lista'>
    <li>
        <Link to="/" className='Inicio'>Inicio</Link>
    </li>
    <li>
        <Link to="discografia" className="Discografia">Discografia</Link>
    </li>
    <li>
        <Link to="Historia" className="Historia"> Historia</Link>
    </li>
    <li>
        <Link to="Contacto" className='Contacto'> Contacto </Link>
    </li>
</ul>
</div>

    )

}