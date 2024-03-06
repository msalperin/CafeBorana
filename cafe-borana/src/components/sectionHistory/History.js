import "./history.css";
import estampilla from '../../assets/cafe-estampilla.png';

const History = () => {

    return ( 
        
        <div className="history-conteiner">
             
              <div className="history-info-conteiner">
                  
                  <h2>¿QUIENES SOMOS?</h2>
                  <br></br>
                  <h3>Borana nace en 2020 en Mar del Plata como un tostadero de café de especialidad impulsado por el deseo de ofrecer café de alta calidad y de diversos orígenes.</h3>
                  <br></br>
                  <h3>Luego de tostar, desarrollar y validar nuestros primeros granos y perfiles,  Borana es introducida al mercado local como una Boutique de Café.</h3>

              </div>

              <div className="history-photo-conteiner">
                  <img src={estampilla} alt="estampilla"></img> 
              </div>

        </div> 

     );
}
 
export default History;