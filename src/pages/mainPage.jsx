import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import ProductList from "../features/products/ProductList";

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
