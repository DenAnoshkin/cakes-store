import * as yup from "yup";
import backImg from "../../assets/images/back.png";
import { Link } from "react-router";
import FormBlock from "../ui/FormBlock";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PaymentForm = () => {
    const cakes = useSelector( ( state ) => state.cakes.entities );
    const [ formData, setFormData ] = useState( { name: '', number: '', expiry: '', cvc: '' } );
    const [ formErrors, setFormErrors ] = useState( {} );
    const sumOfProduct = cakes.reduce( ( acc, cake ) => acc + cake.count * cake.price, 0 );

    const formValidate = yup.object().shape( {
        name: yup.string().required( "Введите имя на карте" ),
        number: yup.string().required( "Введите номер карты" ),
        expiry: yup.string().required( "Введите срок действия" ),
        cvc: yup.string().required( "Введите CVC" ),
    } );

    useEffect( () => {
        formValidate
            .validate( formData, { abortEarly: false } )
            .then( () => setFormErrors( {} ) )
            .catch( ( err ) => {
                const errors = err.inner.reduce( ( acc, e ) => {
                    return { ...acc, [ e.path ]: e.message };
                }, {} );
                setFormErrors( errors );
            } );
    }, [ formData ] );

    const handleSubmit = ( e ) => {
        e.preventDefault();
        alert( `Сумма товартов ${ sumOfProduct } р. Оплата прошла успешно!` );
    }

    const handleChange = ( e ) => {
        setFormData( ( prevState ) => {
            return { ...prevState, [ e.target.name ]: e.target.value };
        } );
    }

    return (
        <form className="payment__form" onSubmit={handleSubmit}>
            <Link to="/" className="payment__back-link">
                <img src={backImg} alt="вернуться назад" />
            </Link>
            <h2 className="payment__title">Оплата</h2>

            <FormBlock label="Имя на карте:" id="name" name="name" placeholder={null} value={formData.name} onChange={handleChange} error={formErrors.name} />
            <FormBlock label="Номер карты:" id="number" name="number" placeholder={null} value={formData.number} onChange={handleChange} error={formErrors.number} />
            <FormBlock label="Срок действия (MM/YY):" id="expiry" name="expiry" placeholder="MM/YY" value={formData.expiry} onChange={handleChange} error={formErrors.expiry} />
            <FormBlock label="CVC:" id="cvc" name="cvc" placeholder={null} value={formData.cvc} onChange={handleChange} error={formErrors.cvc} />

            <p className="payment__sum">Сумма товаров: {sumOfProduct} р.</p>

            <button className="payment__button" type="submit" disabled={Object.keys( formErrors ).length !== 0}>
                Оплатить
            </button>
        </form>
    );
};

export default PaymentForm;
