import { useState } from "react";
import { BsFlower1, BsTruck, BsTree, BsImageAlt } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

import Button from "./Button";
import CardServices from "./CardServices";

import "../styles/components/home.sass";

import home1 from "../img/home1.png";
import home2 from "../img/home2.png";
import home3 from "../img/home3.png";
import home4 from "../img/home4.png";

const Home = () => {

    const [slidePreView] = useState(1)

    const data = [
        { id: "1", image: home1 },
        { id: "2", image: home2 },
        { id: "3", image: home3 },
        { id: "4", image: home4 },
    ]

    return (
        <main id="home">
            <div className="center">
                <div className="home-container">
                    <div className="home-content">
                        <h3>Melhor Planta</h3>
                        <h3>Melhor Ambientação</h3>
                        <p>As melhores e mais belas plantas para o seu ambiente..As melhores e mais belas plantas para o seu ambiente..As melhores e mais belas plantas para o seu ambiente</p>
                        <Button description="Compre Agora" />
                    </div>

                    <div className="home-carousel">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={slidePreView}
                            navigation
                        >
                            {data.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className='img-slider'>
                                        <img
                                            src={item.image}
                                            alt="Slider"
                                            className="slide-item"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>


                </div>
                <div className="home-cards">
                    <CardServices icon={<BsFlower1 />} title="Manutenção" description="Deixe sua terra melhor" />
                    <CardServices icon={<BsTree />} title="Produtos" description="Um milhão de variedades" />
                    <CardServices icon={<BsTruck />} title="Delivery" description="Entrega para todo o Brasil" />
                    <CardServices icon={<BsImageAlt />} title="Paisagismo" description="Faça sua própria paisagem" />
                </div>
            </div>
        </main>
    )
}

export default Home
