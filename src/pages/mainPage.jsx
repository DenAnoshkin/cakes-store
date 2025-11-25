import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";

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
