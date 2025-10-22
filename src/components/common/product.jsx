import { useDispatch } from "react-redux";
import cardImg from "../../assets/images/card-img.png";
import { changeCakesQuantity } from "../../redux/slices/cakesSlice";

const Product = ({ id, name, description, price, count }) => {
  const dispatch = useDispatch();
  return (
    <div className="products__card">
      <img className="card_img" src={cardImg} alt="Изображение товара" />
      <div className="card__content">
        <h3 className="card__title">{name}</h3>
        <p className="card__description">{description}</p>
        <p className="card__price">{price}₽/шт.</p>
        <div className="card__buttons">
          <button
            className="order__button"
            onClick={() => dispatch(changeCakesQuantity(id, 1))}
          >
            Заказать
          </button>
          {count !== 0 ? (
            <div className="product__counter">
              <button
                className="count__button"
                onClick={() => dispatch(changeCakesQuantity(id, 1))}
              >
                +
              </button>
              <span className="card__buttons-counter">{count}</span>
              <button
                className="count__button"
                onClick={() => dispatch(changeCakesQuantity(id, -1))}
              >
                -
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Product;
