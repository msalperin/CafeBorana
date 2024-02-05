import React from "react";
import "./WhyChoose.css";

import coffee from '../../assets/coffee.png';
import home from '../../assets/home.png';
import facture from '../../assets/facture.png';




const WhyChoose  = () => {

    let CardData = [

        {
            logo: coffee, 
            text: 'Sólo adquirimos cafés de especialidad con ficha de trazabilidad y calificaciones mayores a 82 puntos según la SCA (Specialty Coffee Association)',
            id: 1
        },
        {
            logo: home,
            text: 'Trabajamos con modalidad Boutique, es decir sólo tostamos cantidades que nos aseguramos vender en el corto plazo, asegurando la frescura del producto.',
            id: 2
        },
        {
            logo: facture,
            text: 'Aplicamos técnicas de manufactura y métodos de control que permiten asegurar la consistencia en la calidad de nuestros productos y la inocuidad de los mismos.',
            id: 3  
        }
    ]
    return (

        <div className="whyChoose-conteiner">
            
            <h2>¿POR QUÉ ELEGIRNOS?</h2>
           
            <div className="whyChoose-card-conteiner">
              
              {CardData.map( (dataText, i) => {
                return <div className="whyChoose-card">
                            <img src={dataText.logo}></img>
                            <h3 key={i}> {dataText.text}  </h3>
                            
                       </div>
              })}

            </div>




        </div>
        
      );
}
 
export default WhyChoose ;