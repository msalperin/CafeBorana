import React from "react";
import './header.css';
import logo from '../../assets/boranahorizontal.png';
import logoBanner from '../../assets/boranaverticalblanco.png';
import tostadoresdecafe from '../../assets/tostadoresdecafe.png';
/* import DropdownMenu from "./Dropdown"; */

const Header = () => {

    return (
       

       <header>

        <div className="pre-head"><h3>ENVIOS A TODO EL PAIS</h3></div>
        
        <div className="header-conteiner">

               <div className="head-logo"><img src={logo} alt="logo"></img></div>
               
               <navbar className="navbar-conteiner">
                     <ul>
                        <li>NOSOTROS</li>
                        <li>CONTACTO</li>
                        <li><button>TIENDA</button></li>
                     </ul>

               </navbar>
               
        </div>

        <div className='slider-conteiner'>
            <img src={logoBanner} alt="borana logo" className='slider-logo'/>
            <img src={tostadoresdecafe} alt="subtitulo borana" className='slider-slogan' />
        
        </div>


       </header> 

    );
}
 
export default Header;