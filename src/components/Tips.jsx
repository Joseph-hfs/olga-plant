import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Button from "./Button";
import "../styles/components/tips.sass";


import tips1 from "../img/tips1.jpg";
import tips2 from "../img/tips2.jpg";
import tips3 from "../img/tips3.jpg";
import tips4 from "../img/tips4.jpg";
import tips5 from "../img/tips5.jpg";
import tips6 from "../img/tips6.jpg";

const Tips = () => {

    const [slidePreView] = useState(2)

    const data = [
        { id: "1", image: tips1, title: "SOLO", description: "O solo mais adequado é necessário, pois cada planta tem suas necessidades. Um solo bem drenado é importante para evitar o excesso de água e evitar também que apareçam algumas doenças nas plantas. Adicionar compostos orgânicos pode ajudar a fornecer nutrientes." },
        { id: "2", image: tips2, title: "ÁGUA", description: "É necessário regar as plantas regularmente para mantê-las saudáveis, mas é importante não exagerar. Verificar o solo antes de regar e só adicionar água se o solo estiver seco a uma certa profundidade é essencial. Também é importante levar em consta o tipo de planta e o clima local." },
        { id: "3", image: tips3, title: "ILUMINAÇÃO", description: "A luz solar é importante para a maioria das plantas, mas a quantidade e a qualidade da luz variam entre as espécies. Algumas plantas precisam de mais luz direta enquanto outras precisam de menos, então é importante verificar as recomendações para cada tipo de planta." },
        { id: "4", image: tips4, title: "DOENÇAS", description: "É importante ter atenção a sinais de doenãs ou infestações de pragas nas plantas, como manchas nas folhas ou insetos no solo ou também nas folhas. Tratar problemas rapidamente pode ajudar a evitar que eles piorem e danifiquem a planta" },
        { id: "5", image: tips5, title: "ADUBAÇÃO", description: "Adubar periodicamente suas plantas com fertilizantes específicos pode ajudar a fornecer nutrientes extras e promover o crescimento saudável. Mas é importante seguir as instruções de dosagem do fabricante e nunca exagerar, pois isso pode fazer mal à planta. " },
        { id: "6", image: tips6, title: "TRANSPLANTE", description: "À medida que a planta cresce, pode ser necessário transplantá-la para um vaso maior ou para um local com condições mais adequadas. Isso pode ajudar a garantir que a planta tenha espaço suficiente para crescer e que esteja recebendo as condições adequadas de luz, umidade e temperatura." },
    ]

    return (
        <section id="tips">
            <h2>Dicas e Truques</h2>
            <div className="center">
                <div className="tips-slider">
                    <div className="tips-container">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={slidePreView}
                            navigation
                        >
                            {data.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="card">
                                        <div className="tips-img">
                                            <img
                                                src={item.image}
                                                alt="Dicas"
                                            />
                                        </div>

                                        <div className="tips-text">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <Button description="Ver mais dicas" />
            </div>
        </section>
    )
}

export default Tips