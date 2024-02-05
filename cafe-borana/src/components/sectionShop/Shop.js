import React from "react";
import "./shop.css";

import shop from '../../assets/boranared.png';
/* /import beans from '../../assets/coffebeans.png'; */ 


const  Shop = () => {
    return ( 
     
        <div className="shop-conteiner">
  
              <img src={shop} alt="cartel"></img>

              <div className="shop-enter-conteiner">
                   
                   <div className="shop-enter">
                       <h2>¡Visita nuestra tienda online!</h2>
                       <h3>Y disfruta tu cafe favorito cada dia.</h3>
                       <button>COMPRAR</button>
                   </div>
                    
              </div> 
        
        </div>

     );
}


export default Shop ;