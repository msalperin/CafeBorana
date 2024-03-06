import "./footer.css";

import fb from '../../assets/fb.png';
import ig from '../../assets/ig.png';
import mountain from '../../assets/mountain.png';
import boranahorizontal from '../../assets/boranahorizontal.png';
import wp from "../../assets/wp.png";
import home from "../../assets/home.png";



const Footer = () => {

    return (
        <>

        <img src={mountain}></img>

          <div className="footer-conteiner-size">

            <div className="footer-conteiner">  
            
              <div className="footer-logo-conteiner"> 

                 <img src={boranahorizontal} alt></img> <br></br>
                 <h3>Tostadores de cafe de especialidad</h3><br></br>
                 
                 <div className="footer-logo-redes">
                   <img src={fb} alt="logofb"></img>
                   <img src={ig} alt="logoig"></img>
                   <img src={wp} alt="wp"></img>
                 </div>
              </div>

              <div className="footer-menu">
                <h3>Menu</h3>
                <ul>
                   <li>Comprar</li>
                   <li>Nosotros</li>
                   <li>Contacto</li>
                </ul>
              </div>
              <div className="footer-contact">
                <h3>Contactanos</h3>
                <ul>
                   <li>Telefono</li>
                   <li>Ubicacion</li>
                </ul>
              </div>
          
          </div> 
        </div>

        </> 
      );
}
 
export default Footer;
