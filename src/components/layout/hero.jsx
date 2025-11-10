const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container">
                <p className="hero__caption">вкуснейшие</p>
                <h1 className="hero__title">
                    Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт Петербургу
                </h1>
                <p className="hero__description">
                    Приготовим за 3 часа в день заказа.
                    <br /> Доставка на авто в холодильнике.
                </p>
                <div className="hero__button">
                    <a href="#catalog" className="hero__button-link">
                        Перейти в каталог
                    </a>
                    <span className="hero__button-caption">
                        9 различных
                        <br /> видов на выбор
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
