
import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/components/header.sass";

import { BsFillTreeFill, BsFillCartFill } from "react-icons/bs";
import { BiX, BiMenu } from "react-icons/bi";


const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header id="header">
            <div className="center">
                <div className="logo">
                    <a href="#home">Olgaplant <i><BsFillTreeFill /></i></a>
                </div>

                <div
                    className="menu"
                    onClick={toggleMenu}>
                    {showMenu ? (
                        <button
                            className="close-button"
                            onClick={toggleMenu}>
                            <BiX />
                        </button>
                    ) : (
                        <button className="hamburguer">
                            <BiMenu />
                        </button>
                    )}
                </div>

                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/products-hot">Produtos</Link>
                    <Link to="/about">Sobre</Link>
                    <Link to="/tips">Dicas</Link>
                </nav>

                {showMenu && (
                    <div className="mobile-menu">
                        <Link to="/">Home</Link>
                        <Link to="/products-hot">Produtos</Link>
                        <Link to="/about">Sobre</Link>
                        <Link to="/tips">Dicas</Link>
                        <Link to="/tips">Carrinho</Link>
                    </div>
                )}

                <div className="cart">
                    <a className="cart-icon"><BsFillCartFill /></a>
                </div>
            </div>
        </header>
    )
}

export default Header;
