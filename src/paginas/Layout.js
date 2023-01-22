import { Outlet } from 'react-router-dom'
import Navegacion from '../components/Navegacion'

export default function Layout(){
    return(
        <>
        <Navegacion/>
        <Outlet/>
        {/* <footer/> */}
        </>
    )
}