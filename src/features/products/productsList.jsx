import { useSelector, useDispatch } from "react-redux";
import Product from "../../components/common/product";
import SearchBar from "../../components/ui/SearchBar";
import { useState,useEffect } from "react";
import { getCakes } from "../../redux/slices/cakesSlice";

const ProductList = () => {
  const [searchCake, setSearchCake] = useState("");
  const cakes = useSelector((state) => state.cakes.entities);
  const dispatch = useDispatch();
  const getError = useSelector((state) => state.cakes.isLoading);

  useEffect(() => {
    dispatch(getCakes());
  }, [dispatch]);

  const filteredCakes = cakes.filter((cake) => {
    return cake.name.includes(searchCake);
  });

  const handleSearchCake = (e) => {
    setSearchCake(e.target.value);
  };

  return (
    <section className="products" id="catalog">
      <div className="products__container">
        <h2 className="products__title">Товары</h2>
        <SearchBar className="products__search" value={searchCake} onChange={handleSearchCake}/>
        {getError 
          ? <h2 className="product__loading">Loading...</h2> 
          : <div className="products__list">
          {filteredCakes.map((card) => {
            return <Product key={card.id} {...card} />;
          })}
        </div>}
      </div>
    </section>
  );
};

export default ProductList;
