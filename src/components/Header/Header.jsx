import dogito from "../../assets/img/doguito.svg"
import "../../assets/css/components/header.css"
import { Link } from "react-router-dom"
const Header = () => {
    return(
        <header className="header container">
            <span className="menu-hamburguer__icon"></span>
            <div className="header-container">
                <Link to="/" className="flex flex--center">
                    <img src={dogito} alt="dogito" className="header__logo" />
                    <h1 className="header__title">Petshop</h1>
                </Link>
            </div>
            <div>
                <nav className="menu-header">
                    <ul className="menu-items">
                        <li>
                            <a href="#" className="menu-item menu-item--entrar">Entrar</a>
                        </li>
                        <li><a href="#" className="menu-item">Productos</a></li>
                        <li><Link to="#" className="menu-item">Blog</Link></li>
                        <li><Link to="/about" className="menu-item">Sobre</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="menu-header-background"></div>
        </header>
    )
}

export default Header