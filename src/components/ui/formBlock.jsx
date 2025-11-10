const FormBlock = ( { label, id, name, placeholder, value, onChange, error } ) => {
    return (
        <div className="card__block">
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
            <span className="form__error">{error}</span>
        </div>
    )
}

export default FormBlock;