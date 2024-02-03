
import "../styles/components/about.sass";
import WorkOrder from "./WorkOrder";

import planta from "../img/planta.png"

const About = () => {
    return (
        <section id="about">
            <div className="center">
                <div className="about-img">
                    <img src={planta}></img>
                </div>

                <div className="about-content">
                    <h3>Como Trabalhamos?</h3>
                    <p>Vendemos plantas de variadas espécies, além de arranjos, adubo e outros acessórios para o tratamento e cuidado das suas plantas.</p>

                    <div className='about-content-order'>
                        <WorkOrder number="1" title="Entrar em contato" description="Através das nossas redes sociais ou pelo site" />
                        <WorkOrder number="2" title="Escolher no catálogo" description="Escolher a opção mais adequada para você" />
                        <WorkOrder number="3" title="Fechar pedido" description="Informar o endereço e fazer o pagamento" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About