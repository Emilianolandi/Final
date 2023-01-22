import './CardWrapper.css';
import Tarjetas from '../Data/Tarjetas.json';
import Card from './Card.js';


export default function CardWrapper ({titulo}) {
    console.log(Tarjetas);
    return (
        <>
            <h2>{titulo}</h2>
            <div className="grilla">

                {/* {Tarjetas.map((Tarjeta, index) => ( */}
                    {/* <p key ={index}> */}
                     {/* {Tarjeta.titulo} */}
                    {/* </p> */}
                {/* ))} */}
                {Tarjetas.map((Tarjeta, index) => ( 
                    <Card
                        key={index}
                        Card= {Tarjeta}
                    />
                    ))}
               {/* <Card />
                <Card />
                <Card />
                <Card /> */}
            </div>
        </>
    )
}