import Header from "../components/layout/header";
import Hero from "../components/layout/hero";
import ProductList from "../features/products/productsList";

const MainPage = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <ProductList />
            </main>
        </>
    );
};

export default MainPage;
