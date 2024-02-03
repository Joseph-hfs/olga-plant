
import "../styles/components/productsCard.sass";

const ProductsCard = ({ title, description, link, value }) => {
    return (
        <div className="products-card">
            <div className="products-card-img">
                <img src={link} ></img>
            </div>
            <div className="products-card-content">
                <div className='products-card-content-box'>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <div className='products-card-content-value'>
                    <span>{value}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductsCard