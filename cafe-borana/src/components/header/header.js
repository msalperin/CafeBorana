import React from "react";
import './header.css';
import logo from '../../assets/boranahorizontal.png'

const Header = () => {
    return (
       <>
        <div className="pre-head"><h3>ENVIOS A TODO EL PAIS</h3></div>
        
        <div className="header-conteiner">

               <div className="head-logo"><img src={logo}></img></div>
               <navbar className="navbar-conteiner">
                     <ul>
                        <li>NOSOTROS</li>
                        <li>CONTACTO</li>
                        <li>TIENDA</li>
                     </ul>
               </navbar>
               
        </div>

        <div>Banner</div>
       </>

    );
}
 
export default Header;