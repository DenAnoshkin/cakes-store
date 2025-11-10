const SearchBar = ( { value, onChange, className } ) => {
    return (
        <input className={className} type="search" placeholder="Поиск..." value={value} onChange={onChange} />
    )
}

export default SearchBar;