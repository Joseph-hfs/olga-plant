
import "../styles/components/button.sass";

const Button = ({ description, link }) => {
    return (
        <button className="btn" href={link}>{description}</button>
    )
}

export default Button
