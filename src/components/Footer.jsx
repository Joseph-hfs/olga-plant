
import "../styles/components/footer.sass";

import { BsFillTreeFill, BsWhatsapp, BsFacebook, BsInstagram } from 'react-icons/bs';


const Footer = () => {
    return (
        <footer id="footer">
            <div className="center">
                <div className="footer-content">
                    <div className="footer-logo">
                        <a href="#home">Olgaplant <i>{<BsFillTreeFill />}</i></a>
                    </div>

                    <div className="footer-email">
                        <p>CONTATO PARA PARCERIAS E EVENTOS</p>
                        <div className='footer-contact'>
                            <input type='email' placeholder='SEU E-MAIL'></input>
                            <button>CADASTRAR</button>
                        </div>
                    </div>

                    <div className="footer-redes">
                        <h6>CONTATE-ME</h6>
                        <div className='footer-icons'>
                            <a>{<BsWhatsapp />}</a>
                            <a>{<BsFacebook />}</a>
                            <a>{<BsInstagram />}</a>
                        </div>
                    </div>
                </div>

                <div className="footer-reserved">
                    <p>Copyright <span>&copy;</span> 2023 by Joseph Hudson | All Rights Reserved.</p>
                    <p className='footer-reserved-second'>PRIVACY POLICY  TERMS AND CONDTIONS</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer