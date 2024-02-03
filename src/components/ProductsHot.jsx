
import "../styles/components/productsHot.sass";
import ProductsCard from "./ProductsCard";



import catalogo1 from "../img/catalogo1.png";
import catalogo2 from "../img/catalogo2.png";
import catalogo3 from "../img/catalogo3.png";
import catalogo4 from "../img/catalogo4.png";
import catalogo5 from "../img/catalogo5.png";
import catalogo6 from "../img/catalogo6.png";
import catalogo7 from "../img/catalogo7.png";
import catalogo8 from "../img/catalogo8.png";

const productsHot = () => {
    return (
        <section id="products-hot">
            <h2>Produtos Populares</h2>
            <div className="center">
                <ProductsCard link={catalogo1} title="Bonsai" description="árvore japonesa criada em casa" value="R$7,90" />
                <ProductsCard link={catalogo2} title="Zotopia Plant" description="possos, pisifie e fweofm" value="R$ 10,90" />
                <ProductsCard link={catalogo3} title="Zotopia Plant" description="possos, pisifie e fweofm" value="R$ 7,90" />
                <ProductsCard link={catalogo4} title="Zotopia Plant" description="possos, pisifie e fweofm" value="R$ 7,90" />
                <ProductsCard link={catalogo5} title="Zotopia Plant" description="possos, pisifie e fweofm" value="R$ 7,90" />
                <ProductsCard link={catalogo6} title="Zotopia Plant" description="possos, pisifie e fweofm" value="R$ 7,90" />
                <ProductsCard link={catalogo7} title="Zotopia Plant" description="possos, pisifie e fweofm" value="R$ 7,90" />
                <ProductsCard link={catalogo8} title="Zotopia Plant" description="possos, pisifie e fweofm" value="R$ 7,90" />
            </div>
        </section>
    )
}

export default productsHot
