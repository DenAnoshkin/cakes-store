import cardImg from "../assets/images/card.png";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Header = () => {
    const productQuantity = useSelector((state) => {
        return state.cakes.entities.reduce((acc, cake) => {
            return cake.count === 0 ? acc + 0 : acc + 1;
        }, 0);
    });
    return (
        <header className="header">
            <div className="header__container">
                <Link to="./" className="header__logo">
                    Сладкий сундук
                </Link>
                <address className="header__contacts">
                    <p className="header__address">
                        г. Санкт Петербург, ул. Куйбышева 31
                    </p>
                    <div className="header__telephone">
                        <a className="telephone" href="tel:+78128449549">
                            8 (812) 844-95-49
                        </a>
                        <span className="telephone__caption">
                            Ежедневно с 9:00 до 20:00
                        </span>
                    </div>
                </address>
                <Link to="/payment" className="header__card">
                    <img src={cardImg} alt="Корзина" />
                    {productQuantity !== 0 ? (
                        <span className="header__card-count">
                            {productQuantity}
                        </span>
                    ) : null}
                </Link>
            </div>
        </header>
    );
};

export default Header;
