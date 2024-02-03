
import "../styles/components/workOrder.sass";

const WorkOrder = ({ number, title, description }) => {
    return (
        <div className="about-work">
            <div className='about-work-number'>
                <span>{number}</span>
            </div>
            <div className="about-work-content">
                <h4>{title}</h4>
                <h6>{description}</h6>
            </div>
        </div>
    )
}

export default WorkOrder