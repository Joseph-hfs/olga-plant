
import "../styles/components/cardServices.sass";

const cardServices = ({ icon, title, description }) => {
    return (
        <div className="card-services">
            <div className="card-services-icon">
                <i>{icon}</i>
            </div>
            <div className="card-services-text">
                <h6>{title}</h6>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default cardServices
